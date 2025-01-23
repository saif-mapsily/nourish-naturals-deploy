import { cn } from "@/lib/utils";
export default function PeachContainer({ className, children }) {
  return (
    <section
      className={cn(
        "w-full flex gap-10 justify-center items-center py-20 bg-[#FEF6EA] rounded-2xl p-5",
        className
      )}
    >
      {children}
    </section>
  );
}
