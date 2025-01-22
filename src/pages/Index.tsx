import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ChallengeDisplay } from "@/components/ChallengeDisplay";

const Index = () => {
  const { data: challenge, isLoading } = useQuery({
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
            <div className="space-y-4">
              <ChallengeDisplay isLoading={isLoading} challenge={challenge} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;