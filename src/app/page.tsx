import OurService from "@/components/home/our-services";
import AllProducts from "@/components/home/all-products";
import ShopCategories from "@/components/home/shop-categories";
import Process from "@/components/home/process";
import FeaturedProducts from "@/components/home/featured-products";
import AboutUs from "@/components/home/about-us";
import Hero from "@/components/home/hero";
import Testimonial from "@/components/home/testimonial";
import { executeGraphQL } from "@/lib/graphql-client";
import { ProductCategoryListDocument } from "@/gql/graphql";

export default async function Home(
  searchParams: Promise<{ category: string }>
) {
  const { category } = await searchParams;
  const data = await executeGraphQL(ProductCategoryListDocument, {
    revalidate: 60,
  });
  const categories = data.categories?.edges.map((e) => e.node) || [];

  return (
    <div>
      <Hero />
      <AboutUs />
      <FeaturedProducts />
      <Process />
      <ShopCategories categories={categories} />
      <AllProducts categories={categories} slug={category} />
      <OurService />
      <Testimonial />
    </div>
  );
}
