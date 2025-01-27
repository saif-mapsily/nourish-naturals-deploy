"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams, useRouter } from "next/navigation";
import { searchParamsToObject, toQueryString } from "@/lib/utils";
import { PageInfo } from "@/gql/graphql";

const ListingPagination = ({ pageInfo }: { pageInfo?: PageInfo }) => {
  const [page, setPage] = React.useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePrevious = () => {
    if (!pageInfo?.startCursor || !pageInfo.hasPreviousPage) return;
    const newQuery = { ...searchParamsToObject(searchParams) };
    newQuery["cursor"] = [pageInfo?.startCursor];
    router.push(
      `/shop?${new URLSearchParams(toQueryString(newQuery)).toString()}`,
      { scroll: false }
    );
  };

  const handleNext = () => {
    if (!pageInfo?.endCursor || !pageInfo.hasNextPage) return;
    const newQuery = { ...searchParamsToObject(searchParams) };
    newQuery["cursor"] = [pageInfo?.endCursor];
    router.push(
      `/shop?${new URLSearchParams(toQueryString(newQuery)).toString()}`,
      { scroll: false }
    );
  };

  return (
    <Pagination>
      <PaginationContent className="flex gap-6">
        <PaginationItem onClick={handlePrevious}>
          <PaginationPrevious className="hover:bg-[#DCF9E0] p-2.5" />
        </PaginationItem>

        <p className={`text-[#013D17] text-base font-normal rounded-sm`}>
          {page}
        </p>

        {/* Next Page */}
        <PaginationItem onClick={handleNext}>
          <PaginationNext className="hover:bg-[#DCF9E0] p-2.5" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ListingPagination;
