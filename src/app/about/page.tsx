import Hero from "@/components/about/hero";
import AboutUs from "@/components/about/about-us";
import Team from "@/components/about/team";
import Milestones from "@/components/about/milestones";
import { MILESTONES } from "@/constant/about";
import AllProducts from "@/components/all-products";
import { executeGraphQL } from "@/lib/graphql-client";
import { ProductCategoryListDocument } from "@/gql/graphql";

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const { category } = await searchParams;
  const data = await executeGraphQL(ProductCategoryListDocument, {
    revalidate: 60,
  });
  const categories = data.categories?.edges.map((e) => e.node) || [];

  return (
    <>
      <Hero />
      <AboutUs />
      <AllProducts className="pt-44" categories={categories} slug={category} />
      <Team />
      <Milestones data={MILESTONES} />
    </>
  );
}
