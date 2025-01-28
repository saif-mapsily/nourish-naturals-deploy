import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function OurService() {
  return (
    <section className="w-full bg-[#EAF5EB] flex flex-col justify-start items-center p-24 rounded-2xl relative">
      <div className="flex w-full justify-center items-center gap-2">
        <Image
          src="/images/line-lady2.png"
          alt="lady-illustration"
          width={400}
          height={400}
          className="w-1/3 h-auto"
        />
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-base text-primary font-semibold">
            Try Our Service
          </h2>
          <h4 className="text-3xl font-light">
            Register yourself for future product notifications
          </h4>
          <p className="text-base font-light text-gray-600">
            Say hello to a more radiant, healthier you with personalized diet
            that's as unique as you are.
          </p>
          <Button variant="outline" className="w-fit">
            Register
            <MoveRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
