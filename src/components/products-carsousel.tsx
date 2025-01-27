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
    <div className="flex flex-col gap-6">
      {title && (
        <h4 className="text-black text-2xl font-light text-center">{title}</h4>
      )}
      <Carousel>
        <CarouselContent>
          {products.map((item, index) => (
            <CarouselItem key={index}>
              <ProductCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-12 w-12 -ml-8" />
        <CarouselNext className="h-12 w-12 -mr-8" />
      </Carousel>
    </div>
  );
}
