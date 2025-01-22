import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: (key: string) => void;
}

export const ApiKeyInput = ({ apiKey, setApiKey }: ApiKeyInputProps) => {
  const { toast } = useToast();

  return (
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
  );
};