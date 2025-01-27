"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import clsx from "clsx";

type Media = {
  id: string;
  url: string;
  alt: string;
};

export default function ImagesViewer({ images = [] }: { images?: Media[] }) {
  const [index, setIndex] = useState(0);

  const handleChange = (idx: number) => {
    setIndex(idx);
  };

  return (
    <div className="flex gap-4 flex-col">
      <div className="relative h-full w-full">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {images.map(
              (image, idx) =>
                index === idx && (
                  <CarouselItem key={idx}>
                    <Image
                      src={image.url}
                      width={800}
                      height={800}
                      className="w-full h-[360px] object-contain bg-white rounded-lg"
                      alt={image.alt || "product-image"}
                    />
                  </CarouselItem>
                )
            )}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex gap-4 justify-start align-center w-[140px]">
        {images.map((image, idx) => (
          <Image
            key={idx}
            className={
              (clsx("cursor-pointer p-4 bg-white object-contain"),
              idx === index ? "border border-primary rounded-md" : "")
            }
            src={image.url}
            width={80}
            height={80}
            onClick={() => handleChange(idx)}
            alt={image.alt || "product-image"}
          />
        ))}
      </div>
    </div>
  );
}
