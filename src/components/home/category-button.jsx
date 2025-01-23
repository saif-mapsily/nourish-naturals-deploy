"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function CategoryButton({ text, className }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = false;

  const handleClick = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("category", text.toLowerCase());
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };
  return (
    <Button
      variant="outline"
      className={cn(
        `${
          isActive
            ? "bg-[#557D64] text-white hover:bg-[#557D64] hover:text-white"
            : "bg-transparent text-[#1A1C1E]"
        }
            border-[#99B1A2] rounded-md shadow-none
            `,
        className
      )}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}
