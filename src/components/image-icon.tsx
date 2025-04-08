import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Icon({ iconImageLink = "", className = "" }) {
  return (
    <Image
      src={iconImageLink}
      width={48}
      height={48}
      alt="Icons"
      className={cn("flex-0", className)}
    />
  );
}
