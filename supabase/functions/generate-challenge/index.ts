import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.1'
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PerplexityResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

async function generateChallengeWithAI(apiKey: string): Promise<string> {
  console.log('Calling Perplexity API...')
  const response = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.1-sonar-small-128k-online',
      messages: [
        {
          role: 'system',
          content: 'You are a programming challenge generator. Generate a unique LeetCode-style coding challenge. Include: 1) Problem Description 2) Example Input/Output 3) Constraints 4) A solution in Python. Format the response in markdown with proper headings and code blocks.'
        },
        {
          role: 'user',
          content: 'Generate a new coding challenge'
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    console.error('Perplexity API error:', await response.text())
    throw new Error('Failed to generate challenge')
  }

  const data = await response.json() as PerplexityResponse
  return data.choices[0].message.content
}

async function storeChallenge(supabase: any, challenge: string): Promise<void> {
  console.log('Storing challenge in database...')
  const { error: insertError } = await supabase
    .from('daily_challenges')
    .insert([{ challenge }])

  if (insertError) {
    console.error('Database insert error:', insertError)
    throw new Error('Failed to store challenge')
  }
}

async function updateGitHubReadme(githubToken: string, challenge: string): Promise<void> {
  console.log('Updating README.md in GitHub...')
  const readmeContent = `## About

This repository contains daily coding challenges generated using the Perplexity API. Each challenge is automatically generated and committed to this repository.

## Today's Challenge

${challenge}`

  const repoOwner = 'Twoos123'
  const repoName = 'daily-coding-challenge'
  const filePath = 'README.md'
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`

  try {
    console.log('Fetching current README if it exists...')
    const getFileResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    const encoder = new TextEncoder()
    const data = encoder.encode(readmeContent)
    const base64Content = btoa(String.fromCharCode(...data))

    let updatePayload: any = {
      message: 'Update daily challenge',
      content: base64Content,
    }

    if (getFileResponse.ok) {
      const fileData = await getFileResponse.json()
      updatePayload.sha = fileData.sha
      console.log('Existing README found, updating with SHA:', fileData.sha)
    } else {
      console.log('README does not exist, creating new file')
    }

    const updateResponse = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatePayload)
    })

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text()
      console.error('GitHub update error:', errorText)
      throw new Error(`Failed to update README in GitHub: ${errorText}`)
    }

    console.log('README.md updated successfully in GitHub')
  } catch (error) {
    console.error('Error updating README in GitHub:', error)
    throw new Error(`Failed to update README in GitHub: ${error.message}`)
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Starting challenge generation...')
    
    // Get environment variables
    const perplexityApiKey = Deno.env.get('PERPLEXITY_API_KEY')
    const githubToken = Deno.env.get('GITHUB_ACCESS_TOKEN')
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    
    // Validate environment variables
    if (!perplexityApiKey || !githubToken || !supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing required environment variables')
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Generate, store, and update challenge
    const challenge = await generateChallengeWithAI(perplexityApiKey)
    await storeChallenge(supabase, challenge)
    await updateGitHubReadme(githubToken, challenge)

    return new Response(
      JSON.stringify({ success: true, challenge }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})