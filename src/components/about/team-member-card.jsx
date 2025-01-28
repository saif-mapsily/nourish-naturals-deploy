import Image from "next/image";
import { Twitter } from "lucide-react";
import Link from "next/link";
export default function TeamMemberCard({ image, name, role, Xlink }) {
  return (
    <div>
      <Image
        src={`/images/${image}`}
        width={200}
        height={200}
        className="w-64 h-64 rounded-sm"
        alt={name}
      />
      <div className="flex justify-between items-start py-3">
        <div>
          <h3 className="mb-2 text-[#1A1C1E] text-base font-semibold">
            {name}
          </h3>
          <h4 className="text-[#3A3B3E] text-sm font-light">{role}</h4>
        </div>
        <Link href={Xlink} target="_blank">
          <Twitter size={24} className="w-6 h-6 text-[#5D5E61]" />
        </Link>
      </div>
    </div>
  );
}
