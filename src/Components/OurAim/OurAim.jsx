import React from "react";
import { domestic, power, transport } from "../../imports";

const OurAim = () => {
  return (
    <section className="bg-[#d7e7cc] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#274031] mb-4">
          Our Core Aim
        </h2>

        {/* Decorative underline under heading */}
        <div className="mx-auto mb-8 h-1 w-24 bg-[#4b7a5a] rounded-full opacity-90" />

        {/* Heading / Description */}
        <p className="text-gray-800 leading-relaxed text-lg md:text-xl font-medium max-w-3xl mx-auto">
          To mitigate the devastating impact of poorly managed agro and sawmill
          wastes on the environment, by converting them for bioenergy and biofuel
          production, aimed at addressing the energy access "trilemma" of
          affordability, reliability, and sustainability across the three major
          sectors of the economy -
        </p>

        {/* Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Power */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-[#4b3d2b] mb-4">Power</h3>
            <img
              src={power}
              alt="Power sector"
              className="w-full max-w-[300px] h-[250px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Domestic */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-[#4b3d2b] mb-4">Domestic</h3>
            <img
              src={domestic}
              alt="Domestic sector"
              className="w-full max-w-[300px] h-[250px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Transport */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-[#4b3d2b] mb-4">Transport</h3>
            <img
              src={transport}
              alt="Transport sector"
              className="w-full max-w-[300px] h-[250px] object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAim;
