import TeamMemberCard from "./team-member-card";

const data = [
  {
    image: "eh.png",
    name: "Esther Howard",
    role: "CEO & Founder",
    Xlink: "https://x.com/",
  },
  {
    image: "af.png",
    name: "Albert Flores",
    role: "Head of Product Development",
    Xlink: "https://x.com/",
  },
  {
    image: "ww.png",
    name: "Wade Warren",
    role: "Marketing Director",
    Xlink: "https://x.com/",
  },
  {
    image: "dr.png",
    name: "Dianne",
    role: "Creative Director",
    Xlink: "https://x.com/",
  },
];
export default function Team() {
  return (
    <section className="w-full bg-[#F7F7F7] flex flex-col justify-start items-center p-24 rounded-2xl">
      <h2 className="text-[#4D775D] text-base font-semibold">Our Team</h2>
      <h4 className="text-[#1A1C1E] text-3xl font-light mt-4">
        The heart and soul behind the organization
      </h4>
      <div className="flex gap-6 mt-12">
        {data.map((item, index) => (
          <TeamMemberCard
            key={index}
            image={item.image}
            name={item.name}
            role={item.role}
            Xlink={item.Xlink}
          />
        ))}
      </div>
    </section>
  );
}
