import { Star, StarHalf } from "lucide-react";
import { Progress } from "./ui/progress";

enum TYPE {
  PROGRESS = "PROGRESS",
  STAR = "STAR",
}

export default function Ratings({
  type = TYPE.STAR,
  value,
  maxStars = 5,
}: {
  type?: TYPE;
  value: number;
  maxStars?: number;
}) {

  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0; 
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1 items-center">
      {/* Render full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} size={16} color="orange" className="fill-orange-400" />
      ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <StarHalf size={16} color="orange" className="fill-orange-400" />}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={16} color="gray" className="fill-gray-200" />
      ))}

      {type === TYPE.PROGRESS ? (
        <Progress className="ml-2" value={(value / maxStars) * 100} />
      ) : (
        <p className="ml-2">{value.toFixed(1)}</p> // Show value with one decimal
      )}
    </div>
  );
}
