import Ratings from "@/components/ratings";
import { Button } from "@/components/ui/button";
import Pair from "@/components/pair";
import { ProductDetailsQuery, VariantDetailsFragment } from "@/gql/graphql";
import Link from "next/link";

type PROPS = {
  product: ProductDetailsQuery["product"];
  variant: VariantDetailsFragment;
  slug: string;
};

export default function Info({ product, variant, slug }: PROPS) {
  const description = JSON.parse(product?.description || "").blocks[0].data
    ?.text;

  return (
    <div>
      <h2 className="text-gray-900 text-xl font-semibold">{product?.name}</h2>
      <span className="mt-2 flex items-center gap-2">
        <p className="text-sm">{product?.category?.name}</p>
        <div className="border-r-[1px] h-3 border-gray-300" />
        <p className="text-sm">{`Size: ${variant?.weight?.value} ${variant?.weight?.unit}`}</p>
        <div className="border-r-[1px] h-3 border-gray-300" />
        <Ratings value={product?.rating || 0} />
      </span>
      <div className="mt-2 flex items-center gap-2 font-light text-gray-500">
        <p className="font-semibold text-xl text-primary/90">
          ₹ {variant?.pricing?.price?.gross?.amount}
        </p>
        <p>₹ {variant?.pricing?.priceUndiscounted?.gross?.amount}</p>
        <span>MRP (Inc. all taxes)</span>
      </div>
      <p
        className="mt-2 text-sm font-light"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <div className="mt-4 flex gap-2 items-center">
        <Pair
          title="Available in Stock"
          value={`${variant.quantityAvailable}`}
        />
      </div>
      <div className="mt-4">
        <p className="text-sm font-light">
          Size: {variant.weight?.value} {variant.weight?.unit}
        </p>
        <span className="mt-2 flex gap-2">
          {product?.variants?.map((v) => (
            <Link key={v.id} href={`/product/${slug}?variant=${v.id}`}>
              <Button variant={v.id === variant.id ? "default" : "outline"}>
                {v.name}
              </Button>
            </Link>
          ))}
        </span>
      </div>
      <div className="flex gap-4 mt-4">
        <Button variant="outline" className="w-full">
          Add to cart
        </Button>
      </div>
      <Button className="mt-4 w-full">Buy now</Button>
      <div className="mt-4 w-full h-[1px] bg-gray-300" />
      <div className="mt-4">
        <Pair title="SKU" value={`${variant.sku}`} />
        <Pair title="Category" value={`${product?.category?.name}`} />
        <Pair
          title="Collection"
          value={`${product?.collections
            ?.map((c) => c.name)
            .flat()
            .toString()}`}
        />
      </div>
    </div>
  );
}
