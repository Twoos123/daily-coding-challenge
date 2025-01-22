import { Star, StarHalf } from "lucide-react";

interface DifficultyStarsProps {
  difficulty: number;
}

export const DifficultyStars = ({ difficulty }: DifficultyStarsProps) => {
  const totalStars = 5;
  const fullStars = Math.floor(difficulty);
  const hasHalfStar = difficulty % 1 >= 0.5;

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  );
};