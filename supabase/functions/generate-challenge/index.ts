import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
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
    const githubToken = Deno.env.get('GITHUB_ACCESS_TOKEN')

    if (!perplexityApiKey) {
      throw new Error('Missing Perplexity API key')
    }

    if (!githubToken) {
      throw new Error('Missing GitHub access token')
    }

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

    // Get the current README content
    console.log('Fetching current README...')
    const readmeResponse = await fetch(
      'https://api.github.com/repos/lovable-dev/daily-coding-challenge/contents/README.md',
      {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    )

    if (!readmeResponse.ok) {
      console.error('GitHub API error:', await readmeResponse.text())
      throw new Error('Failed to fetch README')
    }

    const readmeData = await readmeResponse.json()
    const currentContent = atob(readmeData.content)

    // Update the README content with the new challenge
    const todayDate = new Date().toISOString().split('T')[0]
    const newContent = currentContent.replace(
      "## Today's Challenge\n\nNo challenge has been generated yet. The first challenge will be committed soon.",
      `## Today's Challenge\n\n**Date**: ${todayDate}\n\n${challenge}`
    )

    // Commit the updated README
    console.log('Committing updated README...')
    const updateResponse = await fetch(
      'https://api.github.com/repos/lovable-dev/daily-coding-challenge/contents/README.md',
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          message: `Add coding challenge for ${todayDate}`,
          content: btoa(newContent),
          sha: readmeData.sha,
        }),
      }
    )

    if (!updateResponse.ok) {
      console.error('GitHub commit error:', await updateResponse.text())
      throw new Error('Failed to commit README update')
    }

    console.log('Challenge committed successfully')

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