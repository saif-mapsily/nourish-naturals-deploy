export default function Pair({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="text-sm flex gap-2">
      <span className="text-primary/90 font-semibold">{title}:</span>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
