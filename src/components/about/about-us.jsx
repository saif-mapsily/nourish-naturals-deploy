import Image from "next/image";
import Card from "./card";

export default function AboutUs() {
  return (
    <section className="w-full bg-[#EAF5EB] flex flex-col justify-start items-center p-24 rounded-2xl relative">
      <h2 className="text-[#4D775D] text-base font-semibold">About Us</h2>
      <h3 className="text-[#1A1C1E] text-3xl font-light mt-6">
        Creafting Organic-Products, creating memories
      </h3>
      <div className="flex w-full justify-center items-center gap-20 pt-10">
        <Image
          src="/images/line-lady.png"
          alt="Lady"
          width={400}
          height={400}
          className="w-[30%] h-auto"
        />
        <div className="flex flex-col gap-4 w-1/3">
          <p className="text-base font-light text-[#45474A]">
            We are committed to a sustainable, holistic business model that
            delivers pure, chemical-free organic edible oils, ghee, and natural
            sweeteners, promoting a healthy lifestyle.
          </p>
          <p className="text-3xl font-light text-[#1A1C1E]">
            “At Nourish Naturals, we strive to reshape India's agricultural
            landscape by ensuring farmers receive fair prices for their
            produce.”
          </p>
          <span className="font-semibold text-[#4D775D] italic">
            Toyyab Ali, Founder & CEO
          </span>
        </div>
      </div>
      <div className="absolute flex gap-5 -bottom-24">
        <Card
          icon="/icons/target.png"
          title="Our Mission"
          desc="Nourish Naturals aims to become a global leader in the organic market by expanding our product range and tapping into new regions with a growing demand for sustainable living. "
        />
        <Card
          icon="/icons/target-hit.png"
          title="Our Vision"
          desc="Our vision is to inspire respect for all beings and care for Mother Nature, where every purchase with us supports a healthier planet and a more equitable world."
        />
      </div>
    </section>
  );
}
