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

async function generateChallengeWithAI(apiKey: string): Promise<{ challenge: string; difficulty: number }> {
  console.log('Calling Perplexity API...')
  
  // Get a random data structure type to focus on
  const dataStructures = [
    'Tree (Binary Tree, BST, or N-ary Tree)',
    'Graph (DFS, BFS, or Topological Sort)',
    'LinkedList (Singly or Doubly)',
    'Stack or Queue',
    'Heap (Min Heap or Max Heap)',
    'Trie',
    'Hash Table',
    'Dynamic Programming with Arrays',
    'Matrix Operations',
    'String Manipulation'
  ];
  
  const randomStructure = dataStructures[Math.floor(Math.random() * dataStructures.length)];
  
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
          content: `You are a programming challenge generator specializing in algorithms and data structures. Generate a unique LeetCode-style coding challenge that focuses specifically on ${randomStructure}. The challenge should require implementing or manipulating this data structure in an interesting way. After generating the challenge, carefully analyze its complexity, algorithmic requirements, and implementation difficulty to rate it from 1-5 (where 1 is very easy/beginner friendly and 5 is extremely challenging like a hard LeetCode problem). Include: 1) Problem Description emphasizing how the specific data structure should be used 2) Example Input/Output 3) Constraints 4) A complete solution in Python with detailed explanation of how the solution leverages the chosen data structure effectively. Add your analyzed difficulty rating in a machine-readable format at the start of your response like "DIFFICULTY:X". Format the rest of the response in markdown with proper headings and code blocks, excluding any mention of difficulty.`
        },
        {
          role: 'user',
          content: `Generate a new coding challenge that focuses on ${randomStructure}. Analyze its complexity and rate its difficulty from 1-5.`
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

  const data = await response.json() as PerplexityResponse;
  const content = data.choices[0].message.content;
  
  // Parse the AI-analyzed difficulty rating
  const difficultyMatch = content.match(/DIFFICULTY:(\d)/i);
  let difficulty;
  
  if (difficultyMatch) {
    difficulty = parseInt(difficultyMatch[1]);
    // Validate the difficulty is within bounds
    if (difficulty < 1 || difficulty > 5) {
      console.log('Invalid difficulty rating detected:', difficulty, 'defaulting to 3');
      difficulty = 3;
    }
  } else {
    console.log('No difficulty rating found in response, defaulting to 3');
    difficulty = 3;
  }
  
  const challenge = content.replace(/DIFFICULTY:\d\n*/i, '').trim();

  return {
    challenge,
    difficulty
  };
}

async function storeChallenge(supabase: any, challenge: string, difficulty: number): Promise<void> {
  console.log('Storing challenge in database...')
  const { error: insertError } = await supabase
    .from('daily_challenges')
    .insert([{ challenge, difficulty }])

  if (insertError) {
    console.error('Database insert error:', insertError)
    throw new Error('Failed to store challenge')
  }
}

async function updateGitHubReadme(githubToken: string, challenge: string, difficulty: number): Promise<void> {
  console.log('Updating README.md in GitHub...')
  const stars = '⭐'.repeat(difficulty);
  const readmeContent = `# Daily Coding Challenge Generator 🚀

An AI-powered platform that generates unique coding challenges daily, helping developers enhance their problem-solving skills through consistent practice.

## Features

- 🤖 **AI-Powered**: Challenges are generated using advanced AI to ensure uniqueness and relevance
- 🕒 **Daily Updates**: New challenges are automatically generated and committed at 12 AM EST
- ⭐ **Difficulty Ratings**: Each challenge includes a difficulty rating from 1-5
- 💡 **Complete Solutions**: Every challenge comes with a detailed Python solution

## Built With

- 🔥 **React + Vite**: For a fast and modern development experience
- 🔷 **TypeScript**: For type-safe code
- 🛠️ **Shadcn/UI**: For pre-built, customizable components
- 🔌 **Supabase**: For backend functionality and database
- 🤖 **Perplexity API**: For AI-powered challenge generation

## Today's Challenge

Difficulty: ${stars} (${difficulty}/5)

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
    
    const perplexityApiKey = Deno.env.get('PERPLEXITY_API_KEY')
    const githubToken = Deno.env.get('GITHUB_ACCESS_TOKEN')
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    
    if (!perplexityApiKey || !githubToken || !supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing required environment variables')
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { challenge, difficulty } = await generateChallengeWithAI(perplexityApiKey)
    await storeChallenge(supabase, challenge, difficulty)
    await updateGitHubReadme(githubToken, challenge, difficulty)

    return new Response(
      JSON.stringify({ success: true, challenge, difficulty }),
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
