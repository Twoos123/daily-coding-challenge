import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ApiKeyInput } from "@/components/ApiKeyInput";
import { GitHubCredentials } from "@/components/GitHubCredentials";
import { ChallengeDisplay } from "@/components/ChallengeDisplay";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [githubToken, setGithubToken] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const savedKey = localStorage.getItem('perplexity_api_key');
    const savedUsername = localStorage.getItem('github_username');
    const savedToken = localStorage.getItem('github_token');
    if (savedKey) setApiKey(savedKey);
    if (savedUsername) setGithubUsername(savedUsername);
    if (savedToken) setGithubToken(savedToken);
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

      if (githubUsername && githubToken) {
        try {
          const today = new Date().toISOString().split('T')[0];
          const readmeContent = `# Daily Coding Challenge\n\n## ${today}\n\n${content}\n\n[Generated with ❤️ by Lovable](https://lovable.dev)`;
          
          // Use the specific repository information
          const readmeResponse = await fetch(`https://api.github.com/repos/Twoos123/daily-coding-challenge/contents/README.md`, {
            headers: {
              'Authorization': `token ${githubToken}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          });
          
          if (readmeResponse.ok) {
            const readmeData = await readmeResponse.json();
            
            const updateResponse = await fetch(`https://api.github.com/repos/Twoos123/daily-coding-challenge/contents/README.md`, {
              method: 'PUT',
              headers: {
                'Authorization': `token ${githubToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
              },
              body: JSON.stringify({
                message: `Daily coding challenge update: ${today}`,
                content: Buffer.from(readmeContent).toString('base64'),
                sha: readmeData.sha
              })
            });

            if (updateResponse.ok) {
              toast({
                title: "Success",
                description: "Challenge generated and README updated!",
              });
            } else {
              const errorData = await updateResponse.json();
              throw new Error(errorData.message || 'Failed to update README');
            }
          } else {
            throw new Error('Failed to fetch current README');
          }
        } catch (error) {
          console.error('Failed to update README:', error);
          toast({
            title: "Warning",
            description: `Failed to update README: ${error.message}. Please check your GitHub credentials.`,
            variant: "destructive",
          });
        }
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
              To enable auto-commits to the daily-coding-challenge repository, please provide your GitHub username and personal access token.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {!apiKey ? (
                <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} />
              ) : (
                <>
                  <GitHubCredentials
                    githubUsername={githubUsername}
                    setGithubUsername={setGithubUsername}
                    githubToken={githubToken}
                    setGithubToken={setGithubToken}
                  />
                  <div className="space-y-4">
                    <ChallengeDisplay isLoading={isLoading} challenge={challenge} />
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