import React from "react";
import { syngas, charcoal, biooil } from "../../imports"; // replace with actual images

const Products = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f6fff9] py-20 px-6 lg:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkGreen mb-6">
            Our Sustainable Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through innovative waste-to-energy conversion, we transform organic and agricultural waste 
            into clean, renewable energy products that power industries, homes, and help build a greener planet.
          </p>
        </div>

        {/* SYNGAS */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold text-green-600">Syngas</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A clean, hydrogen-rich gaseous fuel derived from biomass using our 
              advanced waste-to-energy process. Syngas serves as an efficient and 
              sustainable alternative to conventional fossil fuels.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-base">
              <li>Renewable power generation</li>
              <li>Industrial heating and fuel cells</li>
              <li>Feedstock for hydrogen & liquid biofuels</li>
            </ul>
          </div>

          <div className="flex-1">
            <img
              src={syngas}
              alt="Syngas"
              className="rounded-3xl w-full h-auto object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* CHARCOAL BRIQUETTES */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <img
              src={charcoal}
              alt="Charcoal Briquettes"
              className="rounded-3xl w-full h-auto object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold text-green-700">
              Charcoal Briquettes
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our eco-friendly briquettes are produced from agricultural waste, 
              offering a clean-burning, low-smoke fuel for homes and businesses. 
              They provide an efficient, renewable substitute for traditional charcoal.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-base">
              <li>Domestic & commercial cooking fuel</li>
              <li>Space heating & industrial applications</li>
              <li>Soil improvement and carbon sequestration</li>
            </ul>
          </div>
        </div>

        {/* BIO-OIL */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold text-green-600">Bio-Oil</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bio-oil is a natural by-product of waste pyrolysis, serving as a renewable 
              substitute for fossil fuels in boilers, turbines, and furnaces. 
              It plays a key role in reducing industrial carbon emissions.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-base">
              <li>Renewable industrial heating fuel</li>
              <li>Source for advanced biofuels & green chemicals</li>
              <li>Used in soil enhancement and energy recovery</li>
            </ul>
          </div>

          <div className="flex-1">
            <img
              src={biooil}
              alt="Bio-Oil"
              className="rounded-3xl w-full h-auto object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
