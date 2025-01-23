import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart, Star, StarHalf } from "lucide-react";
export default function ProductCard({
  image,
  title,
  quantity,
  stars,
  reviews,
  regularPrice,
  sellPrice,
}) {
  return (
    <div className="flex flex-col gap-4 w-[264px] min-h-[486px]">
      <div className="flex justify-center items-center w-[264px] h-[324px] rounded-lg bg-white overflow-hidden p-8">
        <Image src={image} alt={title} width={300} height={400} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#1A1C1E] font-semibold min-h-[48px]">{title}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-[#45474A] text-sm">{quantity}</span>
            <div className="flex items-center justify-end">
              <span className="flex gap-1 mr-1">
                {Array.from({ length: 5 }).map((item, index) =>
                  index <= stars - 1 ? (
                    <Star
                      key={index}
                      size={16}
                      className="text-yellow-300 fill-yellow-300"
                    />
                  ) : (
                    <StarHalf key={index} size={16} className="text-yellow-300 fill-yellow-300" />
                  )
                )}
              </span>
              <span className="text-[#2F3033] text-xs">{reviews} reviews</span>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[#5D5E61] text-base line-through">
                ₹{regularPrice}
              </div>
              <div className="text-[#1A502E] text-xl font-semibold">
                ₹{sellPrice}
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
    </div>
  );
}
