import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function CartItem() {
  return (
    <div className="flex gap-4">
      <Image src="" width={150} height={200} />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Digital Itcense</h3>
          <span>20</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Qty 1</span>
          <Button variant="text">Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default function CartModal() {
  const cartItems = [];

  return (
    <HoverCard>
      <HoverCardTrigger>Cart (0)</HoverCardTrigger>
      <HoverCardContent className="w-[400px]">
        <h4>Title</h4>
        <CartItem />
        <div className="flex justify-between">
          <p>Subtotal</p>
          <h4>40</h4>
        </div>
        <p>sad asdkj asdh</p>
        <div className="flex justify-between">
          <Button variant="outline">View Cart</Button>
          <Button>Check out</Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
