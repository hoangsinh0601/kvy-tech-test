import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  max?: number;
}

export function Rating({ value, max = 5 }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < value ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">{value.toFixed(1)}</span>
    </div>
  );
}
