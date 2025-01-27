"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { searchParamsToObject, toQueryString } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

type FILTER = {
  name: string;
  slug: string;
};

export default function Filter({
  title,
  selectedFilter,
  filters,
  name,
}: {
  title: string;
  selectedFilter: string | string[];
  filters: FILTER[];
  name: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedFilters = Array.isArray(selectedFilter)
    ? selectedFilter
    : selectedFilter
    ? [selectedFilter]
    : [];

  const isAllChecked = selectedFilters.length === 0;
  const checked: Record<string, boolean> = filters.reduce(
    (acc, filter) => ({
      ...acc,
      [filter.slug]: selectedFilters.includes(filter.slug),
    }),
    { all: isAllChecked }
  );

  const handleClick = (filter: string, remove: boolean) => {
    const newQuery = { ...searchParamsToObject(searchParams) };

    if (remove) {
      delete newQuery[name];
    } else if (selectedFilters.includes(filter)) {
      newQuery[name] = selectedFilters.filter((f) => f !== filter);
    } else {
      newQuery[name] = [...selectedFilters, filter];
    }

    const sp = new URLSearchParams(toQueryString(newQuery)).toString();
    router.replace(`/shop${sp ? `?${sp}` : ""}`, { scroll: false });
  };

  return (
    <div className="p-5 rounded-lg bg-white w-full">
      <h3>{title}</h3>
      <div
        onClick={() => handleClick("", true)}
        className="mt-4 flex gap-5 justify-start items-center h-12"
      >
        <Checkbox
          id="All"
          className="fill-[#013D17] ring-[#013D17] w-5 h-5 text-lg"
          checked={!selectedFilter || isAllChecked}
        />
        <Label
          htmlFor="All"
          className={`text-sm text-[#1A1C1E] ${
            isAllChecked ? "font-semibold" : "font-light"
          }`}
        >
          All
        </Label>
      </div>
      {filters.map((item, index) => (
        <div
          onClick={() => handleClick(item.slug, false)}
          key={index}
          className="flex gap-5 justify-start items-center h-12"
        >
          <Checkbox
            id={item.slug}
            className="fill-[#013D17] ring-[#013D17] w-5 h-5 text-lg"
            checked={checked[item.slug]}
          />
          <Label
            htmlFor={item.slug}
            className={`text-sm text-[#1A1C1E] ${
              checked[item.slug] ? "font-semibold" : "font-light"
            }`}
          >
            {item.name}
          </Label>
        </div>
      ))}
    </div>
  );
}
