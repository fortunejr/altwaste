import React from "react";
import { profile } from "../../imports";

const Intro = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img
                src={profile}
                alt="Dr. Nnanna-jnr Okoro, CEO AltWaste"
                className="w-[340px] h-auto rounded-3xl shadow-lg border-4 border-lightGreen/40 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-lightGreen text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                CEO & Head of Technology
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-darkGreen mb-6">
              About Us
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              <span className="font-semibold text-darkGreen">
                Alternative Waste Energy Systems Limited (AltWaste)
              </span>{" "}
              is a proudly Nigerian bioenergy company that specializes in
              converting agricultural waste into clean, sustainable biofuels and
              bioenergy. We develop and operate biomass pyro-gasification plants
              that utilize a wide range of agro-residues—such as sawdust, rice
              husk, corn cobs, palm kernel shells, sugarcane bagasse, and other
              locally sourced biomass feedstocks—to generate electricity and
              valuable by-products, including charcoal and bio-oil.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our innovative bioenergy solutions have emerged from{" "}
              <span className="font-semibold text-darkGreen">
                nine years of research and development
              </span>
              , driven by our commitment to tackle two critical challenges:{" "}
              <span className="text-lightGreen font-semibold">
                waste management and energy scarcity.
              </span>{" "}
              We transform organic waste into productive energy resources that
              benefit industries, communities, and environmental sustainability.
            </p>

            <div className="bg-linear-to-r from-[#f4fff6] to-[#e6fff3] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-darkGreen mb-4">
                Core Services
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Biomass Pyrolysis & Gasification Power Systems</li>
                <li>Waste-to-Energy Plant Development</li>
                <li>Charcoal Briquettes & Bio-Oil Production</li>
                <li>Renewable Energy Consulting</li>
                <li>Agro-Waste Collection & Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkGreen mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Driving sustainability through innovative bioenergy solutions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-[#f4fff6] rounded-3xl shadow-md border border-lightGreen/30 p-10 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-darkGreen mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To deliver innovative and sustainable bioenergy solutions that
              convert organic waste into clean, affordable energy for a greener
              Africa.
            </p>
          </div>

          <div className="bg-[#e6fff3] rounded-3xl shadow-md border border-[#00ffc3]/30 p-10 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-darkGreen mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be Africa’s leading bioenergy company, advancing renewable
              technologies that promote energy security, environmental
              sustainability, and circular economy growth.
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-20 text-center">
          <p className="text-3xl sm:text-4xl font-semibold text-[#00ffc3] italic">
            “Waste Redefined. Energy Delivered.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
