"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

import CategoryButton from "./category-button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

type Category = {
  name: string;
};

export default function CategoryTagSlider({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  const newSearchParams = new URLSearchParams();
  newSearchParams.set("category", "all");

  useEffect(() => {
    router.push(`${pathname}?${newSearchParams.toString()}`);
  }, []);
  return (
    <ScrollArea className="w-[1120px] h-14 whitespace-nowrap">
      <CategoryButton text="All" />
      {categories.length &&
        categories.map((category, index) => (
          <CategoryButton key={index} text={category} className="mx-2" />
        ))}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
