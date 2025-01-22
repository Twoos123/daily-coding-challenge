interface ChallengeDisplayProps {
  isLoading: boolean;
  challenge: string | null;
}

export const ChallengeDisplay = ({ isLoading, challenge }: ChallengeDisplayProps) => {
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
    <div className="prose prose-sm max-w-none dark:prose-invert prose-pre:bg-muted prose-pre:text-muted-foreground prose-code:text-muted-foreground">
      <div dangerouslySetInnerHTML={{ __html: challenge }} />
    </div>
  );
};