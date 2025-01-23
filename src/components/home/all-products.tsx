import { executeGraphQL } from "@/lib/graphql-client";
import ProductCard from "../product-card";
import CategoryTagSlider from "./category-tags-slider";
import Link from "next/link";
import {
  ProductListByCategoryDocument,
  ProductCategoryFragment,
  ProductListItemFragment,
} from "@/gql/graphql";

export default async function AllProducts({
  categories = [],
  slug = "all",
}: {
  categories: ProductCategoryFragment[];
  slug: string;
}) {
  const data = await executeGraphQL(ProductListByCategoryDocument, {
    variables: {
      slugs: [],
    },
    revalidate: 60,
  });

  const products: ProductListItemFragment[] = [];
  data?.categories?.edges.map((e) => {
    e.node.products?.edges.map((p) => {
      products.push(p.node);
    });
  });

  return (
    <section className="mt-4 w-full bg-muted p-24">
      <h2 className="text-3xl font-light text-center">All Products</h2>
      {/* <CategoryTagSlider categories={categories} /> */}
      <div className="grid grid-cols-4 gap-y-12 gap-x-6">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              image={product.thumbnail?.url}
              title={product.name}
              quantity={10}
              stars={4}
              reviews={3}
              regularPrice={100}
              sellPrice={200}
            />
          );
        })}
      </div>
      <Link
        href="/products"
        className="rounded-sm text-sm font-semibold text-white bg-[#013D17] px-4 py-3"
      >
        View all
      </Link>
    </section>
  );
}
