import React from "react";
import { medlogo } from "../../imports";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-white">
      <div className="container mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block">
              <img src={medlogo} alt="AltWaste Energy Logo" className="h-14 mb-4" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              At AltWaste Energy, we transform waste into sustainable energy
              through innovative technology and efficient management systems.
              Our mission is to redefine waste — creating cleaner cities and
              powering communities responsibly.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <p className="flex items-start gap-2 text-sm text-gray-300">
              <MdLocationOn className="text-[#00ffc3] mt-1" />
              Plot 1202 Ademola Adetokunbo Crescent, Wuse 2, Abuja
            </p>
            <a
              href="mailto:nnannajnr.okoro@altwasteenergy.com"
              className="flex items-center gap-2 mt-3 text-sm text-gray-300 hover:text-[#00ffc3] transition-colors"
            >
              <MdEmail className="text-[#00ffc3]" />
              nnannajnr.okoro@altwasteenergy.com
            </a>
            <a
              href="tel:+2349166897626"
              className="flex items-center gap-2 mt-3 text-sm text-gray-300 hover:text-[#00ffc3] transition-colors"
            >
              <MdPhone className="text-[#00ffc3]" />
              +234 (0) 916 689 7626
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-[#00ffc3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00ffc3] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#00ffc3] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00ffc3] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00ffc3] transition-transform transform hover:scale-110"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00ffc3] transition-transform transform hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00ffc3] transition-transform transform hover:scale-110"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {year} AltWaste Energy Ltd. All rights reserved.
          </p>
          <p className="text-sm mt-3 ">Built by <span className="text-purple-300"><a target="_blank" href="https://xmotivotechnologies.com/viewportfolio">xMotivo Technologies Limited</a></span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
