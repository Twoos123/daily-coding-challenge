import { DifficultyStars } from "./DifficultyStars";

interface ChallengeDisplayProps {
  isLoading: boolean;
  challenge: string | null;
  difficulty?: number;
}

export const ChallengeDisplay = ({ isLoading, challenge, difficulty = 3 }: ChallengeDisplayProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full"></div>
        <p>Loading today's challenge...</p>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">No challenge has been generated yet.</p>
        <p className="text-sm">The first challenge is being generated and will appear here shortly. Please refresh the page in a few moments.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Difficulty:</h3>
        <DifficultyStars difficulty={difficulty} />
      </div>
      <div className="prose prose-sm max-w-none dark:prose-invert prose-pre:bg-muted prose-pre:text-muted-foreground prose-code:text-muted-foreground">
        <div dangerouslySetInnerHTML={{ __html: challenge }} />
      </div>
    </div>
  );
};