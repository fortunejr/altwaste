import { Recycle, Leaf, Factory, Droplets } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <div className="bg-darkGreen lg:py-10 lg:pb-24 lg:h-12">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="text-white font-semibold text-lg tracking-wide"
      >
        <h2 className="stats-font mx-8 flex items-center gap-2 lg:text-6xl text-3xl">
          <Recycle className="h-18" />
          Eco-Friendly Waste Processing
        </h2>

        <h2 className="stats-font mx-8 flex items-center gap-2 lg:text-6xl text-3xl">
          <Leaf className="h-18" />
          Sustainable Recycling Solutions
        </h2>

        <h2 className="stats-font mx-8 flex items-center gap-2 lg:text-6xl text-3xl">
          <Factory className="h-18" />
          Waste-to-Energy Technology
        </h2>

        <h2 className="stats-font mx-8 flex items-center gap-2 lg:text-6xl text-3xl">
          <Droplets className="h-18" />
          Environmental Cleanup Services
        </h2>
      </Marquee>
    </div>
  );
}
