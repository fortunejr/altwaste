import React from 'react'

const ServicesBanner = () => {
return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/plastic-garbage-conveyor-belt-waste-recycling-factory-workers-background_1268-23440.jpg?t=st=1761485960~exp=1761489560~hmac=0e20373e1cf3fd4a3228e3337af2d137fcd884c8ad70683d2758405c660336da&w=1480')", // replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          From Smart Collection to Sustainable Solutions.
        </h1>
        <p className="text-base sm:text-lg mb-8">
          We provide innovative waste management and recycling services, from
          planning to execution, helping communities and businesses achieve
          cleaner, safer, and more sustainable environments.
        </p>
        <button className="bg-lightGreen hover:bg-darkGreen text-white font-semibold py-3 px-8 rounded-md transition-all duration-300">
          See All Services
        </button>
      </div>
    </section>
  );
}

export default ServicesBanner