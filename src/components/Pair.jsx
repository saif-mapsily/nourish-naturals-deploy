export default function Pair({ theme }) {
  return (
    <div className="text-sm flex gap-2">
      <span
        className={`${
          theme === "light" ? "font-light" : "text-primary/90 font-semibold"
        } `}
      >
        Availability in Stock:
      </span>
      <p className={`${theme === "light" ? "font-light" : "font-semibold"} `}>
        20
      </p>
    </div>
  );
}
