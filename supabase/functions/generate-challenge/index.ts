import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.1'
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Starting challenge generation...')
    
    const perplexityApiKey = Deno.env.get('PERPLEXITY_API_KEY')
    if (!perplexityApiKey) {
      throw new Error('Missing Perplexity API key')
    }

    const githubToken = Deno.env.get('GITHUB_ACCESS_TOKEN')
    if (!githubToken) {
      throw new Error('Missing GitHub access token')
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase configuration')
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Generate the challenge using Perplexity API
    console.log('Calling Perplexity API...')
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are a programming challenge generator. Generate a unique LeetCode-style coding challenge. Include: 1) Problem Description 2) Example Input/Output 3) Constraints 4) A solution in TypeScript. Format the response in markdown with proper headings and code blocks.'
          },
          {
            role: 'user',
            content: 'Generate a new coding challenge'
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    })

    if (!response.ok) {
      console.error('Perplexity API error:', await response.text())
      throw new Error('Failed to generate challenge')
    }

    const data = await response.json()
    const challenge = data.choices[0].message.content
    console.log('Challenge generated successfully')

    // Store the challenge in Supabase
    console.log('Storing challenge in database...')
    const { error: insertError } = await supabase
      .from('daily_challenges')
      .insert([{ challenge }])

    if (insertError) {
      console.error('Database insert error:', insertError)
      throw new Error('Failed to store challenge')
    }

    // Update README.md in GitHub
    console.log('Updating README.md in GitHub...')
    const readmeContent = `# Daily Coding Challenge Project

## About

This repository contains daily coding challenges generated using the Perplexity API. Each challenge is automatically generated and committed to this repository.

## Today's Challenge

${challenge}`

    try {
      console.log('Fetching current README from GitHub...')
      const repoResponse = await fetch('https://api.github.com/repos/Twoos123/daily-coding-challenge/contents/README.md', {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      })

      if (!repoResponse.ok) {
        const errorText = await repoResponse.text()
        console.error('GitHub API error when fetching README:', errorText)
        throw new Error(`Failed to get README from GitHub: ${errorText}`)
      }

      const repoData = await repoResponse.json()
      const currentSha = repoData.sha

      // Encode content to base64
      const encoder = new TextEncoder()
      const data = encoder.encode(readmeContent)
      const base64Content = btoa(String.fromCharCode(...data))

      console.log('Updating README in GitHub...')
      const updateResponse = await fetch('https://api.github.com/repos/Twoos123/daily-coding-challenge/contents/README.md', {
        method: 'PUT',
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Update daily challenge',
          content: base64Content,
          sha: currentSha
        })
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