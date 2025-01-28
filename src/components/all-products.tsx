import { executeGraphQL } from "@/lib/graphql-client";
import ProductCard from "./product-card";
import CategoryTagSlider from "./home/category-tags-slider";
import Link from "next/link";
import {
  ProductListByCategoryDocument,
  ProductCategoryFragment,
  ProductListItemFragment,
} from "@/gql/graphql";
import { Button } from "./ui/button";
import clsx from "clsx";

export default async function AllProducts({
  categories,
  slug,
  className,
}: {
  categories: ProductCategoryFragment[];
  slug: string;
  className?: string;
}) {
  const data = await executeGraphQL(ProductListByCategoryDocument, {
    variables: {
      slugs: slug && [slug],
    },
    revalidate: 60,
  });

  const products: ProductListItemFragment[] = [];
  data.categories?.edges.map((e) => {
    e.node.products?.edges.map((p) => {
      products.push(p.node);
    });
  });

  return (
    <section
      className={clsx("w-full bg-muted p-24 rounded-2xl", className)}
    >
      <h2 className="text-3xl font-light text-center">All Products</h2>
      <CategoryTagSlider slug={slug} categories={categories} />
      <div className="grid grid-cols-4 gap-y-12 gap-x-6">
        {products.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
      <div className="flex justify-center">
        <Link href="/shop">
          <Button>View all</Button>
        </Link>
      </div>
    </section>
  );
}
