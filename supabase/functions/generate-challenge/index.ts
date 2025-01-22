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

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
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

    // Update README.md
    console.log('Updating README.md...')
    const readmeContent = `# Daily Coding Challenge Project

## About

This repository contains daily coding challenges generated using the Perplexity API. Each challenge is automatically generated and committed to this repository.

## Project info

**URL**: https://lovable.dev/projects/32867549-de20-4d11-a45f-71a962e14dbd

## Today's Challenge

${challenge}

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/32867549-de20-4d11-a45f-71a962e14dbd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

\`\`\`sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
\`\`\`

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase (for challenge storage)
- Perplexity API (for challenge generation)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/32867549-de20-4d11-a45f-71a962e14dbd) and click on Share -> Publish.

## Custom Domains

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)`

    try {
      // Convert string to Uint8Array
      const encoder = new TextEncoder()
      const fileContent = encoder.encode(readmeContent)

      // Upload README.md to storage
      const { error: uploadError } = await supabase
        .storage
        .from('project-files')
        .upload('README.md', fileContent, {
          contentType: 'text/markdown',
          upsert: true
        })

      if (uploadError) {
        console.error('Storage upload error:', uploadError)
        throw new Error('Failed to update README')
      }

      console.log('README.md updated successfully')
    } catch (error) {
      console.error('Error updating README:', error)
      throw new Error('Failed to update README')
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