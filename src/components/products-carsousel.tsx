import ProductCard from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductListItemFragment } from "@/gql/graphql";

export default function ProductCarousel({
  title,
  products = [],
}: {
  title: string;
  products: ProductListItemFragment[];
}) {
  return (
    <div className="mt-8 flex flex-col gap-5">
      {title && <h4 className="text-black text-2xl font-light text-center">{title}</h4>}
      <Carousel>
        <CarouselContent>
          {products.map((item, index) => (
            <CarouselItem key={index}>
              <ProductCard
                image={item.thumbnail?.url}
                title={item.name}
                quantity={10}
                stars={2}
                reviews={3}
                regularPrice={100}
                sellPrice={50}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-16 w-16 -ml-8" />
        <CarouselNext className="h-16 w-16 -mr-8" />
      </Carousel>
    </div>
  );
}
