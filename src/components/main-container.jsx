import { cn } from "@/lib/utils";
export default function Main({ className, children }) {
  return (
    <main
      className={cn(
        "flex flex-col gap-5 w-full justify-center items-start",
        className
      )}
    >
      {children}
    </main>
  );
}
