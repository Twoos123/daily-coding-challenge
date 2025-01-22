import { Button } from "@/components/ui/button"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/components/ui/use-toast"

export default function Index() {
  const { toast } = useToast()

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

      // Reload the page to show the new challenge
      window.location.reload()
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daily Coding Challenge</h1>
      <Button 
        onClick={generateChallenge}
        className="mb-4"
      >
        Generate New Challenge
      </Button>
    </div>
  )
}