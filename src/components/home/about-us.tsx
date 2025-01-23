import Image from "next/image";
import { Separator } from "../ui/separator";
import Icon from "../Icon";
import { FEATURED_COMPANIES, FEATURES } from "@/constant/home";

function FeatureCard({ item }: { item: (typeof FEATURES)[0] }) {
  return (
    <div className="flex flex-col gap-3 bg-white border-[#E2E2E5] border shadow-lg rounded-lg p-6 w-[264px]">
      <Icon iconImageLink={item.image} />
      <h4 className="text-[#1A1C1E] text-lg font-semibold">{item.title}</h4>
      <p className="text-[#5D5E61] text-xs">{item.desc}</p>
    </div>
  );
}

function FeaturedInCard({ name, image }: { name: string; image: string }) {
  return <Image src={image} alt={name} width={150} height={15} />;
}

export default function AboutUs() {
  return (
    <section className="mt-4 w-full bg-primary py-36 px-24 rounded-2xl">
      <div className="flex flex-col justify-center items-center gap-12 relative">
        <div className="w-full gap-8 flex justify-between absolute -top-60">
          {FEATURES.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
        <div className="grid gap-5 grid-cols-2 grid-rows-1">
          <div>
            <h2 className="text-gray-300 font-semibold">About us</h2>
            <h4 className="text-gray-200 text-3xl font-light mt-4">
              Nourish Naturals Cultivating Health, Empowering Farmers
            </h4>
          </div>
          <div className="text-gray-300 font-light">
            <p>
              At Nourish Naturals, we strive to reshape India's agricultural
              landscape by ensuring farmers receive fair prices for their
              produce. We are committed to a sustainable, holistic business
              model that delivers pure, chemical-free organic edible oils, ghee,
              and natural sweeteners, promoting a healthy lifestyle.
            </p>
            <p className="mt-8">
              By uplifting the lives of those who grow our food and fostering
              farmer collaboration, we aim to be a global beacon of
              consciousness. Our vision is to inspire respect for all beings and
              care for Mother Nature, where every purchase with us supports a
              healthier planet and a more equitable world.
            </p>
          </div>
        </div>
        <Separator className="bg-primary" />
        <div className="text-gray-300 w-full">
          <h5>As seen in</h5>
          <div className="mt-4 flex items-center justify-between">
            {FEATURED_COMPANIES.map((item, index) => (
              <FeaturedInCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
