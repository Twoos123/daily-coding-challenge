interface ChallengeDisplayProps {
  isLoading: boolean;
  challenge: string | null;
}

export const ChallengeDisplay = ({ isLoading, challenge }: ChallengeDisplayProps) => {
  if (isLoading) {
    return <p>Generating challenge...</p>;
  }

  if (!challenge) {
    return <p>No challenge has been generated yet. Please check back later.</p>;
  }

  return (
    <div className="prose prose-sm max-w-none dark:prose-invert prose-pre:bg-muted prose-pre:text-muted-foreground prose-code:text-muted-foreground">
      <div dangerouslySetInnerHTML={{ __html: challenge }} />
    </div>
  );
};