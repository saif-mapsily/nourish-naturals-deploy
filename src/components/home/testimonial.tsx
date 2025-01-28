import TestimonialCarousel from "../carousel/testimonial-carousel";

export default function Testimonial() {
  return (
    <section className="w-full bg-[#FEF3CC] flex flex-col gap-12 justify-start items-center p-24 rounded-2xl">
      <h3 className="text-3xl font-light">What our Customer Says</h3>
      <TestimonialCarousel />
    </section>
  );
}
