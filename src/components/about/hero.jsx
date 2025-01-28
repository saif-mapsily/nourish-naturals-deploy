import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center gap-6 items-center w-full bg-[#FEF3CC] rounded-2xl p-24 pt-36">
      <h2 className="text-[#4D775D] font-semibold">
        Get to know us better, about our brand
      </h2>
      <p className="w-2/3 text-3xl font-light text-center">
        Where the magic of organic and the art of storytelling converge. Learn
        how our brand's journey intertwines with your own, creating a
        captivating and inspiring experience.
      </p>
      <Image
        alt="hero-1"
        src="/illustrations/hero-1.png"
        className="absolute top-20 left-0 w-28"
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
