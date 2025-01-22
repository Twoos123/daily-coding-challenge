import { Button } from "@/components/ui/button"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { ChallengeDisplay } from "@/components/ChallengeDisplay"

export default function Index() {
  const { toast } = useToast()

  const { data: challenge, isLoading, refetch } = useQuery({
    queryKey: ['dailyChallenge'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('daily_challenges')
        .select('challenge')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        throw error;
      }

      return data?.challenge || null;
    },
  });

  const generateChallenge = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('generate-challenge')
      
      if (error) {
        throw error
      }

      toast({
        title: "Success!",
        description: "New challenge has been generated.",
      })

      // Refetch the challenge instead of reloading the page
      refetch()
    } catch (error) {
      console.error('Error generating challenge:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate challenge. Please try again.",
      })
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Daily Coding Challenge</CardTitle>
            <CardDescription>
              A new programming challenge is generated every day at midnight UTC to help you practice and improve your coding skills.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={generateChallenge}
              className="mb-4"
            >
              Generate New Challenge
            </Button>
            <div className="space-y-4">
              <ChallengeDisplay isLoading={isLoading} challenge={challenge} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}