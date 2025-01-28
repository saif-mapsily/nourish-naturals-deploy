import Icon from "@/components/icon";

export default function SideLink({ icon, title, children }) {
  return (
    <div className="flex gap-3 items-start justify-start">
      <Icon iconImageLink={icon} />
      <div className="flex flex-col justify-center items-start gap-1">
        <h2 className="text-lg font-semibold text-[#1A1C1E]">{title}</h2>
        {children}
      </div>
    </div>
  );
}
