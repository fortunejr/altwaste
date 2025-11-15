import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const ContactPage = () => {
  return (
    <section className="bg-[#f4f7f2] text-gray-800 pt-9">
      {/* Hero Section */}
      <div className="bg-[#0f3b2e] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-gray-200 text-lg">
          We're here to answer your questions, discuss collaboration, or explore opportunities in sustainable energy transformation.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0f3b2e] mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you’re a potential partner, customer, or investor, we’d love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MdLocationOn className="text-[#00ffc3] text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Our Office</h3>
                <p className="text-gray-600">
                  Plot 1202 Ademola Adetokunbo Crescent, Wuse 2, Abuja
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdEmail className="text-[#00ffc3] text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a
                  href="mailto:info@altwasteenergy.com"
                  className="text-gray-600 hover:text-[#00ffc3] transition-colors"
                >
                  info@altwasteenergy.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdPhone className="text-[#00ffc3] text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a
                  href="tel:+2349166897626"
                  className="text-gray-600 hover:text-[#00ffc3] transition-colors"
                >
                  +234 (0) 916 689 7626
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0f3b2e] mb-6">
            Send Us a Message
          </h2>
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffc3]"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffc3]"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffc3]"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffc3]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#0f3b2e] hover:bg-[#00ffc3] text-white font-semibold py-3 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[350px] mt-10">
        <iframe
          title="AltWaste Energy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.658058199991!2d7.490106314787216!3d9.074374193482264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0472f04311%3A0x5d65e7758da25db1!2sWuse%202%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700240000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-t-2xl shadow-md"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
