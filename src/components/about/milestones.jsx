import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import PeachContainer from "@/components/peach-container";


export default function Milestones({ data }) {
  return (
    <PeachContainer>
      {data.map((item, index) => (
        <Fragment key={index}>
          <div className="flex flex-col items-center justify-center gap-2 w-[335px]">
            <h3 className="text-2xl font-light">{item.number}</h3>
            <h4 className="text-base font-light">{item.title}</h4>
          </div>
          {data[index + 1] && <Separator className="w-[1px] h-[88px]" />}
        </Fragment>
      ))}
    </PeachContainer>
  );
}
