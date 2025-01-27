import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const searchParamsToObject = (
  searchParams: URLSearchParams
): Record<string, string[]> => {
  const result: Record<string, string[]> = {};
  searchParams.forEach((_, key) => {
    result[key] = searchParams.getAll(key);
  });
  return result;
};

export const toQueryString = (params: Record<string, string[]>): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, values]) => {
    values.forEach((value) => {
      searchParams.append(key, value);
    });
  });

  return searchParams.toString();
};
