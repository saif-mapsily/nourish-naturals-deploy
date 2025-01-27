"use client";

import { SORT_BY } from "@/constant/shop";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { searchParamsToObject, toQueryString } from "@/lib/utils";

export default function SortBySelector({ value }: { value: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (value: string) => {
    const newQuery = searchParamsToObject(searchParams);
    newQuery["sortBy"] = [value];
    router.replace(
      `/shop?${new URLSearchParams(toQueryString(newQuery)).toString()}`,
      { scroll: false }
    );
  };

  return (
    <Select name="sortBy" value={value} onValueChange={handleClick}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {SORT_BY.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
