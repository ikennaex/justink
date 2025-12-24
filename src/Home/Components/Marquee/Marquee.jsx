import { BoxIcon, Globe, Ship, Warehouse } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <div className="bg-green-950 py-10 pb-10">
      <Marquee
        gradient={false}
        speed={30} // slower speed
        pauseOnHover={true}
        className="text-white font-bold text-xl tracking-wide" // bigger text
      >
        <h2 className="stats-font px-12 flex items-center gap-3">
          <BoxIcon size={28} />
          Fast Delivery
        </h2>
        <h2 className="stats-font px-12 flex items-center gap-3">
          <Ship size={28} />
          Global Shipping
        </h2>
        <h2 className="stats-font px-12 flex items-center gap-3">
          <Warehouse size={28} />
          Warehousing & Inventory Management
        </h2>
        <h2 className="stats-font px-12 flex items-center gap-3">
          <Globe size={28} />
          Supply Chain Experts
        </h2>
      </Marquee>
    </div>
  );
}
