import ProductCarousel from "@/components/products-carsousel";

import Link from "next/link";

export default function Category({ products = [] }) {
  return (
    <section className="mt-4 w-full bg-[#F7F7F7] flex flex-col gap-16 justify-start items-center pt-[164px] pb-[72px] px-2.5 rounded-2xl relative">
      <div className="flex flex-col items-center">
        <h2 className="text-[#4D775D] text-base font-semibold mb-2">
          Popular Category
        </h2>
        <h4 className="text-[#1A1C1E] text-3xl font-light">
          Explore the essence of elegance
        </h4>
      </div>
      <ProductCarousel title="100% vegan" products={products.slice(0, 6)} />
      <ProductCarousel title="Sugar Free" products={products.slice(0, 6)} />
      <ProductCarousel title="Strengthens" products={products.slice(0, 6)} />
      <Link
        href="/products"
        className="rounded-sm text-sm font-semibold text-white bg-[#013D17] px-4 py-3"
      >
        View all
      </Link>
    </section>
  );
}
