"use client";

import { Star, StarHalf } from "lucide-react";
import { useDotButton, DotButton } from "../carousel/carousel-dot-button";
import { ProfilePicture } from "../home/profile-picture";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from "../carousel/carousel-arrows-button";
import { TESTIMONIALS } from "@/constant/home";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="basis-[480px] flex flex-col shrink-0 justify-between bg-white gap-4 p-6 rounded-2xl border border-[#E2E2E5] text-[#1A1C1E]">
      <p className="text-[#1A1C1E] text-lg">{testimonial.message}</p>
      <div className="flex flex-col justify-between items-start gap-3">
        <div className="flex gap-2 justify-start items-center">
          {Array.from({ length: 5 }).map((_, index) =>
            index + 1 <= testimonial.stars ? (
              <Star
                key={index}
                size={16}
                className="text-yellow-300 fill-yellow-300"
              />
            ) : (
              <StarHalf
                key={index}
                size={16}
                className="text-yellow-300 fill-yellow-300"
              />
            )
          )}
        </div>
        <div className="flex gap-3 justify-start items-center">
          <ProfilePicture image={testimonial.customerImage || ""} />
          <div className="text-[#45474A] text-sm">{testimonial.name}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
    [Autoplay()]
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex gap-5 items-center justify-center">
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
          {Array.from({ length: Math.ceil(TESTIMONIALS.length / 2) + 1 }).map(
            (_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-2.5 h-2.5 p-0 border rounded-full border-[#346445] ${
                  index === selectedIndex ? "bg-[#346445]" : "bg-transparent"
                }`}
                variant="outlined"
              />
            )
          )}
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
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-5">
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={index} testimonial={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
