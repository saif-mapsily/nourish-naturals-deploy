import Image from "next/image";
export default function Card({ icon, title, desc }) {
  return (
    <div className="flex flex-col gap-2 justify-start items-start p-4 rounded-lg shadow border border-[#E2E2E5] bg-white w-[552px] z-10">
      <div>
        <Image
          src={icon}
          alt="Card Icon"
          width={100}
          height={100}
          className="w-10 h-10"
        />
      </div>
      <h2 className="text-[#1A1C1E] font-semibold">{title}</h2>
      <p className="text-[#5D5E61] font-light">{desc}</p>
    </div>
  );
}
