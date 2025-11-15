import React from "react";
import { pyrogas, pyrogas100, pyrogas1000, pyrogas300, pyrogas500 } from "../../imports";

// Assuming you have placeholder images for the different types
// You should update 'pyrogas_type_1', 'pyrogas_type_2', etc., with your actual imported assets.
const placeholderImage = "placeholder_image_url";
const pyrogas_type_1 = pyrogas100;
const pyrogas_type_2 = pyrogas300;
const pyrogas_type_3 = pyrogas500;
const pyrogas_type_4 = pyrogas1000;

const PyrogasPage = () => {
  return (
    <section className="w-full bg-gray-50 pt-20 pb-20 px-6 lg:px-16 text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Title and Introduction */}
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Advanced Pyrogasification Plant Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our state-of-the-art biomass pyro-gasification plants,
            engineered to convert various agricultural and wood waste into
            clean, sustainable energy.
          </p>
        </header>

        {/* Main Plant Image */}
        <div className="mb-16 shadow-2xl rounded-xl overflow-hidden">
          <img
            className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
            src={pyrogas}
            alt="AltWaste Pyrogasification Plant Facility"
          />
        </div>

        {/* --- */}

        {/* Types of Pyrogas Plants Section */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Types of Pyrogas Plants We Offer
        </h2>

        {/* Grid for Plant Types (Responsive 2x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-green-100">
            <img
              className="w-full object-cover"
              src={pyrogas_type_1}
              alt="Small-Scale Modular Unit"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Pyrogas 100
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-green-100">
            <img
              className="w-full object-cover"
              src={pyrogas_type_2}
              alt="Medium-Scale Industrial Plant"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Pyrogas 300
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-green-100">
            <img
              className="w-full object-cover"
              src={pyrogas_type_3}
              alt="Large-Scale Integrated Facility"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Pyrogas 500
              </h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-green-100">
            <img
              className="w-full object-cover"
              src={pyrogas_type_4}
              alt="Customized Waste-to-Energy Solution"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Pyrogas 1000
              </h3>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PyrogasPage;
