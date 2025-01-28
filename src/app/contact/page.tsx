import ContactForm from "@/components/contact/form";
import SideLink from "@/components/contact/sidelink";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="p-24 pt-36 flex justify-center gap-12 bg-[#F7F7F7] rounded-2xl relative">
      <div className="md:w-2/5">
        <div className="flex flex-col gap-5 mb-10">
          <h2 className="text-2xl font-light text-[#1A1C1E]">
            Need Help? Contact Us!
          </h2>
          <p className="text-md text-[#45474A]">
            Your health is our priority, and we're here to assist you. Whether
            you have questions, need personalized dietary advice, or want to
            share your experience, feel free to reach out.
          </p>
          <p className="text-md text-[#45474A]">
            Our dedicated team is ready to provide prompt and friendly
            assistance.
          </p>
        </div>
        <ContactForm />
      </div>
      <div className="md:w-2/5 flex flex-col gap-8">
        <SideLink icon="/icons/account.png" title="Learn more about Velvety">
          <Link
            href="/about"
            className="flex gap-2 justify-start items-center text-sm font-semibold text-[#013D17]"
          >
            About us <ChevronRight size={18} />
          </Link>
        </SideLink>
        <SideLink icon="/icons/bag.png" title="Check out new products">
          <Link
            href="/shop"
            className="flex gap-2 justify-start items-center text-sm font-semibold text-[#013D17]"
          >
            Go to shop now <ChevronRight size={18} />
          </Link>
        </SideLink>
        <SideLink icon="/icons/group.png" title="Where to find us">
          <span className="text-xs text-[#2F3033]">
            nourishnaturals@gmail.com
          </span>
          <p className="text-xs text-[#2F3033]">
            Our response time is 24 hours for <br />
            general inquiries and customers support-related matters.
          </p>
        </SideLink>
      </div>
    </section>
  );
}
