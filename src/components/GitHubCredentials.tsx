import { Input } from "@/components/ui/input";

interface GitHubCredentialsProps {
  githubUsername: string;
  setGithubUsername: (username: string) => void;
  githubToken: string;
  setGithubToken: (token: string) => void;
}

export const GitHubCredentials = ({
  githubUsername,
  setGithubUsername,
  githubToken,
  setGithubToken,
}: GitHubCredentialsProps) => {
  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Enter your GitHub username"
        value={githubUsername}
        onChange={(e) => {
          setGithubUsername(e.target.value);
          localStorage.setItem('github_username', e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="Enter your GitHub Personal Access Token"
        value={githubToken}
        onChange={(e) => {
          setGithubToken(e.target.value);
          localStorage.setItem('github_token', e.target.value);
        }}
      />
      <p className="text-xs text-muted-foreground">
        Create a token with 'repo' scope at: https://github.com/settings/tokens
      </p>
    </div>
  );
};