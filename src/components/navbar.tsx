import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { NAVBAR_ITEMS } from "@/constant/navbar";
import { executeGraphQL } from "@/lib/graphql-client";
import {
  ProductCategoryFragment,
  ProductCategoryListDocument,
} from "@/gql/graphql";

const NavItems = ({
  categories,
}: {
  categories: ProductCategoryFragment[];
}) => {
  return (
    <NavigationMenu className="hidden md:flex space-x-4">
      <NavigationMenuList className="flex items-center space-x-6">
        {NAVBAR_ITEMS.map((item) => (
          <NavigationMenuItem key={item.name}>
            {item.href !== "/categories" ? (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-2 p-2">
                  {categories.map((category) => (
                    <NavigationMenuLink
                      key={category.id}
                      href={`/shop?category=${category.slug}`}
                      className={navigationMenuTriggerStyle()}
                    >
                      {category.name}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default async function Navbar() {
  const data = await executeGraphQL(ProductCategoryListDocument, {
    revalidate: 60,
  });

  const categories = data.categories?.edges.map((e) => e.node);

  return (
    <header className="z-10 left-0 w-full px-24 absolute top-8">
      <div className="bg-white rounded-xl container mx-auto flex items-center justify-between px-8 py-4">
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.png"
            alt="nourish-naturals-logo"
            width={80}
            height={80}
            className="h-10 object-contain"
          />
        </Link>
        <NavItems categories={categories || []} />
        <div className="hidden md:flex space-x-4">
          {/* <Link href="/login" passHref>
            <Button variant="ghost">LOGIN</Button>
          </Link>
          <Link href="/login" passHref>
            <Button variant="ghost">CART (0)</Button>
          </Link> */}
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" aria-label="Open Menu">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 space-y-4">
              <NavItems categories={categories || []} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
