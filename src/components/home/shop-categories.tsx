import Image from "next/image";
import { ProductCategoryFragment } from "@/gql/graphql";
import Link from "next/link";

export default async function ShopCategories({
  categories = [],
}: {
  categories: ProductCategoryFragment[];
}) {
  return (
    <section className="mt-4 w-full bg-[#EAF5EB] flex flex-col justify-start items-center py-[72px] px-2.5 rounded-2xl relative">
      <h3 className="text-[#1A1C1E] text-3xl font-light mb-12">
        Shop by Categories
      </h3>
      <div className="flex gap-6 justify-center items-start">
        {categories.map((item, index) => (
          <Link key={index} href={`/shop?category=${item.slug}`} passHref>
            <Image
              src={item.backgroundImage?.url || ""}
              alt={item.backgroundImage?.alt || ""}
              width={100}
              height={100}
            />
            <h4 className="text-center font-semibold">{item.name}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
