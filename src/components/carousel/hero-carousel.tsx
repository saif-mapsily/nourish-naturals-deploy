"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carousel-arrows-button";
import { DotButton, useDotButton } from "./carousel-dot-button";
import { ProductListItemFragment } from "@/gql/graphql";

export default function HeroCarousel({
  products,
}: {
  products: ProductListItemFragment[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-fit flex items-center justify-center">
      <div className="flex flex-col gap-4 h-full">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="bg-transparent text-[#346445]"
          variant="outlined"
        >
          Prev
        </PrevButton>
        <div className="flex flex-col gap-2 items-center justify-center">
          {products.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-2.5 h-2.5 p-0 border rounded-full border-[#346445] ${
                index === selectedIndex ? "bg-[#346445]" : "bg-transparent"
              }`}
              variant="outlined"
            ></DotButton>
          ))}
        </div>
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="bg-transparent text-[#346445]"
          variant="outlined"
        >
          Next
        </NextButton>
      </div>
      <div className="w-[360px] overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 flex-grow-0 basis-full"
            >
              <Image
                src={item.thumbnail?.url || ""}
                alt={item.name}
                width={360}
                height={360}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
