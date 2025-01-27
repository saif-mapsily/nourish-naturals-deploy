import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ProductCategoryFragment } from "@/gql/graphql";

export default function CategoryTagSlider({
  categories,
  slug,
}: {
  categories: ProductCategoryFragment[];
  slug: string;
}) {
  return (
    <ScrollArea className="my-8">
      <div className="w-full flex justify-center gap-4">
        <Link href="/" scroll={false}>
          <Button>ALL</Button>
        </Link>
        {categories.map((category, index) => (
          <Link href={`?category=${category.slug}`} key={index} scroll={false}>
            <Button variant={slug === category.slug ? "default" : "outline"}>
              {category.name}
            </Button>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
