import ProductCard from "@/components/product-card";
import { PageInfo, ProductListItemFragment } from "@/gql/graphql";
import ListingPagination from "./listing-pagination";
import SortBySelector from "./sortby-selector";

export default function ProductContainer({
  products,
  sortBy,
  pageInfo,
}: {
  products: ProductListItemFragment[];
  sortBy: string;
  pageInfo?: PageInfo;
}) {
  return (
    <div className="w-3/4">
      <div className="flex justify-between items-center">
        <h3 className="text-[#4D775D] text-xl font-semibold">
          Showing {products.length} of {products.length}
        </h3>
        <SortBySelector value={sortBy} />
      </div>
      <div className="grid grid-cols-3 grid-rows-auto gap-6 mt-6">
        {products &&
          products.map((item, index) => {
            if (index > 14) return;
            return <ProductCard key={index} {...item} />;
          })}
      </div>
      <div className="mt-10">
        <ListingPagination pageInfo={pageInfo} />
      </div>
    </div>
  );
}
