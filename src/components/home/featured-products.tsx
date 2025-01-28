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
    <section className="w-full bg-muted p-24 rounded-2xl">
      <ProductCarousel title="Featured Products" products={products} />
    </section>
  );
}
