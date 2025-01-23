import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";

export function ProfilePicture({
  image,
  className,
}: {
  image: string;
  className?: string;
}) {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={image} />
      <AvatarFallback>NN</AvatarFallback>
    </Avatar>
  );
}
