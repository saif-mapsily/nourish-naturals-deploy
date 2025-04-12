import PeachContainer from "../peach-container";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { PROCESS } from "@/constant/home";

async function VideoComponent() {
  return (
    <div className="absolute rounded-xl -top-36 right-0 w-[369px] h-[223px] overflow-hidden">
      <video
        controls
        muted
        preload="none"
        aria-label="Video Player"
        className="w-full h-full"
      >
        <source src="https://youtu.be/GdNhpb2FKVI" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function ProcessCard({ item }: { item: (typeof PROCESS)[0] }) {
  return (
    <div className="flex flex-col gap-4 justify-start">
      <Image
        src={`/images/process/${item.image}`}
        alt={item.title}
        width={40}
        height={40}
      />
      <h4 className="text-xl font-semibold">{item.title}</h4>
      <p className="text-sm font-light">{item.desc}</p>
      <Link href={item.buttonLink}>
        <Button
          variant="outline"
          className="bg-transparent rounded-sm border-[#8AA694] text-[#013D17] hover:bg-transparent"
        >
          {item.buttonText}
        </Button>
      </Link>
    </div>
  );
}

export default function Process() {
  return (
    <PeachContainer className="p-24">
      <div className="flex flex-col gap-12 relative">
        <div className="flex gap-2 w-1/2">
          <h3 className="relative text-3xl font-light">
            Let's see the processing of our products
            <MoveRight size={28} className="absolute bottom-0.5 left-32" />
          </h3>
        </div>
        <div className="flex gap-12">
          {PROCESS.map((item, index) => (
            <ProcessCard key={index} item={item} />
          ))}
        </div>
        {/* <VideoComponent /> */}
      </div>
    </PeachContainer>
  );
}
