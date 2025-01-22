import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const { toast } = useToast();

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
      return data.choices[0].message.content;
    },
    enabled: !!apiKey,
    retry: false,
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to generate challenge. Please check your API key.",
        variant: "destructive",
      });
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
            </CardDescription>
          </CardHeader>
          <CardContent>
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
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;