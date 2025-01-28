import ProductContainer from "@/components/shop/products-container";
import Hero from "@/components/shop/hero";
import { executeGraphQL } from "@/lib/graphql-client";
import {
  FilteredProductItemListDocument,
  OrderDirection,
  ProductCategoryListDocument,
} from "@/gql/graphql";
import Filter from "@/components/shop/filter";
import { PRICE_RANGE } from "@/constant/shop";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    category: string | string[];
    priceRange: string | string[];
    sortBy: OrderDirection;
    cursor: string;
  }>;
}) {
  const { category, priceRange, sortBy, cursor } = await searchParams;
  const { categories } = await executeGraphQL(ProductCategoryListDocument, {
    revalidate: 60,
  });
  const ids = categories?.edges
    .filter((c) =>
      typeof category === "object"
        ? category.includes(c.node.slug)
        : c.node.slug === category
    )
    .map((c) => c.node.id);

  const convertedPriceRange = Array.isArray(priceRange)
    ? priceRange
    : priceRange
    ? [priceRange]
    : [];

  const greatestPrice = Math.max(
    ...convertedPriceRange.map((p) => PRICE_RANGE[parseInt(p)].gte)
  );
  const lowestPrice = Math.min(
    ...convertedPriceRange.map((p) => PRICE_RANGE[parseInt(p)].lte)
  );
  const data = await executeGraphQL(FilteredProductItemListDocument, {
    variables: {
      slugs: ids,
      gte: greatestPrice,
      lte: lowestPrice,
      after: cursor,
      sortBy: sortBy || OrderDirection.Asc,
    },
    revalidate: 60,
  });

  const products = data?.products?.edges.map((p) => p.node);

  return (
    <section className="bg-gray-50 rounded-md flex flex-col items-center py-36 px-24">
      <Hero />
      <div className="w-full mt-12 flex gap-4">
        <div className="w-1/4">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">Filters</h2>
          <Filter
            title="Categories"
            filters={
              categories?.edges.map((c) => ({
                name: c.node.name,
                slug: c.node.slug,
              })) || []
            }
            selectedFilter={category}
            name="category"
          />
          <Filter
            title="Price"
            filters={PRICE_RANGE.map((p, idx) => {
              return { name: `${p.lte} to ${p.gte}`, slug: idx.toString() };
            })}
            selectedFilter={priceRange}
            name="priceRange"
          />
        </div>
        <ProductContainer
          products={products || []}
          sortBy={sortBy}
          pageInfo={data?.products?.pageInfo}
        />
      </div>
    </section>
  );
}
