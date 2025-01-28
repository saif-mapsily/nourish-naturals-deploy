import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProfilePicture } from "./profile-picture";
import HeroCarousel from "../carousel/hero-carousel";
import { executeGraphQL } from "@/lib/graphql-client";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import Image from "next/image";

export default async function Hero() {
  const data = await executeGraphQL(ProductListByCollectionDocument, {
    variables: {
      slug: "hero-products",
    },
    revalidate: 60,
  });

  const products = data.collection?.products?.edges.map((e) => e.node);

  return (
    <section className="relative w-full bg-[#FEF3CC] p-24 py-36 rounded-2xl flex gap-8 items-center justify-center">
      <HeroCarousel products={products || []} />
      <div className="flex flex-col gap-10">
        <h1 className="text-black font-bold text-6xl leading-tight">
          Bringing you pure <br />
          <span className="text-primary">chemical-free</span>
          <br />
          organic products
        </h1>
        <Link href="/shop">
          <Button size="lg">
            Shop now <ArrowRight />
          </Button>
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <ProfilePicture
                key={index}
                image="/images/eh.png"
                className={`${index > 0 ? "-ml-4" : "ml-0"}`}
              />
            ))}
          </div>
          <span className="text-gray-800 font-semibold text-xs">100,000+</span>
          <span className="text-gray-400 font-light text-xs">
            Satisfied Customers
          </span>
        </div>
      </div>
      <Image
        alt="hero-1"
        src="/illustrations/hero-1.png"
        className="absolute top-32 left-0 w-28"
        width={250}
        height={250}
      />
      <Image
        alt="hero-2"
        src="/illustrations/hero-2.png"
        className="absolute bottom-0 left-0 w-28"
        width={250}
        height={250}
      />
      <Image
        alt="hero-3"
        src="/illustrations/hero-3.png"
        className="absolute bottom-0 right-0 w-28"
        width={250}
        height={250}
      />
      <Image
        alt="hero-4"
        src="/illustrations/hero-4.png"
        className="absolute top-0 right-0 w-28"
        width={250}
        height={250}
      />
    </section>
  );
}
