import BlogCarousel from "./blogs-carsousel";
import Link from "next/link";
import { cn } from "@/lib/utils";
const blogs = [
  {
    title: "Sweet Without the Guilt",
    image: "/images/blog1.png",
    imageAlt: "flour in bowl",
    desc: `Explore the use of essential oils in
skincare for various benefits.`,
    date: "January 22, 2024",
    author: "Ava Bennel",
    blogLink: "/blog1",
  },
  {
    title: "Raw Honey vs. Processed Honey",
    image: "/images/blog2.png",
    imageAlt: "Honey in jar",
    desc: `Expert advice for daily skincare
routines to maintain healthy, glow`,
    date: "January 22, 2024",
    author: "Ethan Brooks",
    blogLink: "/blog2",
  },
  {
    title: "From Farm to Table",
    image: "/images/blog3.png",
    imageAlt: "Vegetables",
    desc: `Explore the benefits of natural
ingredients in your skincare products.`,
    date: "January 22, 2024",
    author: "Oliver Davis",
    blogLink: "/blog3",
  },
  {
    title: "The Healing Properties of Organic Honey",
    image: "/images/blog4.png",
    imageAlt: "Honey jar",
    desc: `Natural methods to achieve a radiant
complexion without harsh chemical`,
    date: "January 22, 2024",
    author: "Lily Thompson",
    blogLink: "/blog4",
  },
  {
    title: "Sweet Without the Guilt",
    image: "/images/blog1.png",
    imageAlt: "flour in bowl",
    desc: `Explore the use of essential oils in
skincare for various benefits.`,
    date: "January 22, 2024",
    author: "Ava Bennel",
    blogLink: "/blog1",
  },
  {
    title: "Raw Honey vs. Processed Honey",
    image: "/images/blog2.png",
    imageAlt: "Honey in jar",
    desc: `Expert advice for daily skincare
routines to maintain healthy, glow`,
    date: "January 22, 2024",
    author: "Ethan Brooks",
    blogLink: "/blog2",
  },
];
export default function FeaturedBlogs({ className }) {
  return (
    <section
      className={cn(
        "w-full bg-[#F7F7F7] flex flex-col gap-16 justify-start items-center pt-[72px] pb-[132px] px-2.5 rounded-2xl",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-[#4D775D] text-base font-semibold mb-2">Blogs</h2>
        <h4 className="text-[#1A1C1E] text-3xl font-light">
          Scented stories for every mood
        </h4>
      </div>
      <BlogCarousel blogs={blogs} />
      <Link
        href="/blogs"
        className="rounded-sm text-sm font-semibold text-[#013D17] hover:bg-[#013D17] hover:text-white hover:ring-0 ring-1  ring-[#8AA694] px-4 py-3"
      >
        View all
      </Link>
    </section>
  );
}
