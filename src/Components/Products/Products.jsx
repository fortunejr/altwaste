import React from "react";
import { hero, syngas, charcoal, biooil } from "../../imports"; // replace with actual images if available

const Products = () => {
  return (
    <section className="w-full bg-[#ffffff] py-20 px-6 lg:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkGreen mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Through innovative pyro-gasification, we transform agro-waste into valuable clean energy products that power industries and protect the planet.
          </p>
        </div>

        {/* SYNGAS */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-[#00ffc3] mb-4">SYNGAS</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A clean, combustible, and hydrogen-rich gaseous biofuel produced
              from biomass using our advanced pyro-gasification technology.
              Syngas burns cleanly with a pale blue flame and is ideal for power
              generation, industrial heating, fuel cells, and chemical
              processes.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-base">
              <li>Renewable power generation</li>
              <li>Industrial heating and fuel cells</li>
              <li>Secondary feedstock for hydrogen & liquid fuels</li>
            </ul>
          </div>

          <div className="flex-1">
            <img
              src={syngas}
              alt="Syngas"
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>

        {/* CHARCOAL BRIQUETTES */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <img
              src={charcoal}
              alt="Charcoal Briquettes"
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-3xl font-bold text-lightGreen mb-4">
              CHARCOAL BRIQUETTES
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our eco-friendly charcoal briquettes are black, carbon-rich, and
              energy-dense solid residues derived from biomass pyro-gasification.
              They ignite quickly, burn cleanly, and are safe for domestic
              cooking, metallurgy, and soil enhancement.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-base">
              <li>Domestic & commercial cooking fuel</li>
              <li>Activated carbon & space heating fuel</li>
              <li>Soil remediation and industrial applications</li>
            </ul>
          </div>
        </div>

        {/* BIO-OIL */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-[#ffb800] mb-4">BIO-OIL</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bio-oil is a natural dark-brown liquid by-product of pyrolysis,
              serving as a secondary feedstock for advanced biofuels and
              chemical products. It can replace fossil fuels in boilers,
              turbines, and furnaces, providing a sustainable industrial energy
              solution.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-base">
              <li>Industrial heating fuel and turbine feedstock</li>
              <li>Source for advanced biofuels & chemicals</li>
              <li>Used in soil amendment and industrial processes</li>
            </ul>
          </div>

          <div className="flex-1">
            <img
              src={biooil}
              alt="Bio-Oil"
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
