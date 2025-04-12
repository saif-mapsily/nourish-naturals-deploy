import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { ProductListItemFragment } from "@/gql/graphql";
import Ratings from "./ratings";
import Link from "next/link";

export default function ProductCard({
  slug,
  name,
  thumbnail,
  variants,
  rating,
}: ProductListItemFragment) {
  return (
    <Link
      href={`/product/${slug}`}
      className="flex flex-col gap-4 w-[250px]"
    >
      <div className="h-2/3 flex justify-center items-center rounded-lg bg-white overflow-hidden p-8">
        <Image
          src={thumbnail?.url || ""}
          alt={thumbnail?.alt || ""}
          width={300}
          height={400}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{name}</h3>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-[#45474A] text-sm">{`${variants?.[0].weight?.value} ${variants?.[0].weight?.unit}`}</span>
            <Ratings value={rating || 0} />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[#5D5E61] text-base line-through">
                ₹{variants?.[0]?.pricing?.priceUndiscounted?.gross.amount}
              </div>
              <div className="text-[#1A502E] text-xl font-semibold">
                ₹{variants?.[0]?.pricing?.price?.gross.amount}
              </div>
            </div>
            <Button
              variant="outline"
              className="text-[#013D17] text-base shadow-none border-[#AAABAE] font-semibold rounded-sm bg-transparent px-4"
            >
              <ShoppingCart size={18} className="font-bold mr-1" /> Add to cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
