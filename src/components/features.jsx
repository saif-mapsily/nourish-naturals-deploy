import { Separator } from "@/components/ui/separator";
import Icon from "@/components/Icon";
import { Fragment } from "react";
import PeachContainer from "./peach-container";



export default function Features({ data=[] }) {
  return (
    <PeachContainer>
      {data.map((item, index) => (
        <Fragment key={index}>
          <div className="flex flex-col items-center justify-center gap-2 w-[335px]">
            <Icon iconImageLink={`/icons/${item.icon}`} />
            <h3 className="text-2xl font-light">{item.title}</h3>
            <p className="text-base font-light">{item.desc}</p>
          </div>
          {data[index + 1] && <Separator className="w-[1px] h-[88px]" />}
        </Fragment>
      ))}
    </PeachContainer>
  );
}
