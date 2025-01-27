import { OrderDirection } from "@/gql/graphql";

export const PRICE_RANGE = [
  { gte: 0, lte: 50 },
  { gte: 50, lte: 100 },
  { gte: 100, lte: 200 },
  { gte: 200, lte: 500 },
  { gte: 500, lte: 1000 },
];

export const SORT_BY = [
  { name: "Ascending", value: OrderDirection.Asc },
  { name: "Descending", value: OrderDirection.Desc },
];

export const PAGE_SIZE = 15;
