import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#D5EBD8] flex justify-between m-4 px-36 py-16 mt-4 rounded-xl">
      <div className="w-[20%]">
        <Image
          src="/logo.png"
          alt="nourish-naturals-logo"
          width={130}
          height={130}
        />
        <div className="mt-6 flex gap-4">
          <Image
            src="/icons/instagram.png"
            alt="instagram-icon"
            width={30}
            height={30}
          />
          <Image
            src="/icons/twitter.png"
            alt="twitter-icon"
            width={30}
            height={30}
          />
          <Image
            src="/icons/facebook.png"
            alt="facebook-icon"
            width={30}
            height={30}
          />
        </div>
      </div>
      <ul className="flex flex-col gap-3 items-center">
        <p className="text-md text-primary/70 font-medium mb-4">Main</p>
        <li>
          <Link href="/" className="font-light">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-light">
            About
          </Link>
        </li>
      </ul>
      <div className="h-32 w-[1px] bg-primary/20" />
      <ul className="flex flex-col gap-3 items-center">
        <p className="text-md text-primary/70 font-medium mb-4">Ecommerce</p>
        <li>
          <Link href="/shop" className="font-light">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-light">
            Cart
          </Link>
        </li>
      </ul>
      <div className="h-32 w-[1px] bg-primary/20" />
      <ul className="flex flex-col gap-3 items-center">
        <p className="text-md text-primary/70 font-medium mb-4">Utility</p>
        <li>
          <Link href="/contact" className="font-light">
            Contact
          </Link>
        </li>
      </ul>
      <p className="text-sm rotate-90 font-light">©2024 Nourish Naturals</p>
      <Image
        src="/illustrations/clusiacae.png"
        alt="brand-illustration-1"
        width={100}
        height={100}
        className="absolute bottom-0 left-0"
      />
      <Image
        alt="brand-illustration-2"
        src="/illustrations/evergreen.png"
        width={100}
        height={100}
        className="absolute right-0 top-0"
      />
    </footer>
  );
}
