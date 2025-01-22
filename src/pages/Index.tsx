import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const savedKey = localStorage.getItem('perplexity_api_key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const { data: challenge, isLoading } = useQuery({
    queryKey: ['dailyChallenge'],
    queryFn: async () => {
      if (!apiKey) return null;
      
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
              content: 'You are a programming challenge generator. Generate a unique LeetCode-style coding challenge. Include: 1) Problem Description 2) Example Input/Output 3) Constraints 4) A solution in TypeScript. Format the response in markdown.'
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
        throw new Error('Failed to generate challenge');
      }

      const data = await response.json();
      const content = data.choices[0].message.content;

      // Update README.md via GitHub API
      try {
        const today = new Date().toISOString().split('T')[0];
        const readmeContent = `# Daily Coding Challenge\n\n## ${today}\n\n${content}\n\n[Generated with ❤️ by Lovable](https://lovable.dev)`;
        
        // Get the current README content and SHA
        const readmeResponse = await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_USERNAME/contents/README.md', {
          headers: {
            'Authorization': `token ${localStorage.getItem('github_token')}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        if (readmeResponse.ok) {
          const readmeData = await readmeResponse.json();
          
          // Update README
          await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_USERNAME/contents/README.md', {
            method: 'PUT',
            headers: {
              'Authorization': `token ${localStorage.getItem('github_token')}`,
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
              message: `Daily coding challenge update: ${today}`,
              content: Buffer.from(readmeContent).toString('base64'),
              sha: readmeData.sha
            })
          });

          toast({
            title: "Success",
            description: "Challenge generated and README updated!",
          });
        }
      } catch (error) {
        console.error('Failed to update README:', error);
        toast({
          title: "Warning",
          description: "Challenge generated but failed to update README. Please check your GitHub token.",
          variant: "destructive",
        });
      }

      return content;
    },
    enabled: !!apiKey,
    retry: false,
    meta: {
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to generate challenge. Please check your API key.",
          variant: "destructive",
        });
      }
    }
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Daily Coding Challenge</CardTitle>
            <CardDescription>
              A new programming challenge is generated every day to help you practice and improve your coding skills.
              To enable auto-commits to your GitHub profile, please provide your GitHub personal access token.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {!apiKey ? (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Please enter your Perplexity API key to start generating challenges:
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="password"
                      placeholder="Enter your Perplexity API key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                    <Button onClick={() => {
                      if (apiKey) {
                        localStorage.setItem('perplexity_api_key', apiKey);
                        toast({
                          title: "Success",
                          description: "API key saved successfully!",
                        });
                      }
                    }}>
                      Save Key
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <Input
                      type="password"
                      placeholder="Enter your GitHub Personal Access Token"
                      onChange={(e) => localStorage.setItem('github_token', e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Create a token with 'repo' scope at: https://github.com/settings/tokens
                    </p>
                  </div>
                  <div className="space-y-4">
                    {isLoading ? (
                      <p>Generating challenge...</p>
                    ) : challenge ? (
                      <div className="prose prose-sm max-w-none dark:prose-invert">
                        <div dangerouslySetInnerHTML={{ __html: challenge }} />
                      </div>
                    ) : (
                      <p>No challenge generated yet.</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;