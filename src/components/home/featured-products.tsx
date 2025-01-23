import { executeGraphQL } from "@/lib/graphql-client";
import ProductCarousel from "../products-carsousel";
import { ProductListByCollectionDocument } from "@/gql/graphql";

export default async function FeaturedProducts() {
  const data = await executeGraphQL(ProductListByCollectionDocument, {
    variables: { slug: "featured-products" },
    revalidate: 60,
  });

  const products = data.collection?.products?.edges.map((e) => e.node) || [];

  return (
    <section className="mt-4 w-full bg-muted py-24 px-24 rounded-2xl">
      <ProductCarousel title="Featured Products" products={products} />
    </section>
  );
}
