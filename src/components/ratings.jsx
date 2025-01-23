import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import { Progress } from "./ui/progress";

export default function Ratings({ type }) {
  return (
    <div className="flex gap-1 items-center">
      <Star size={16} color="orange" />{" "}
      <StarFilledIcon size={28} color="orange" />
      {type === "progress" ? (
        <Progress className="ml-2" value={33} />
      ) : (
        <>
          <p className="ml-1">4.5</p>
          <span className="font-light">(225 reviews)</span>
        </>
      )}
    </div>
  );
}
