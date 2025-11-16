import React from "react";
import { medlogo, medlogo2 } from "../../imports";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0f1b12] to-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={medlogo2}
                alt="AltWaste Energy Logo"
                className="h-14 mb-4 drop-shadow-md"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              At AltWaste Energy, we transform waste into sustainable energy
              through innovative technology and efficient management systems.
              Our mission is to redefine waste, create cleaner cities, and
              responsibly power communities.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold text-[#00ffc3] mb-5 uppercase tracking-wide">
              Contact Information
            </h2>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-start gap-3">
                <MdLocationOn className="text-[#00ffc3] text-lg mt-1" />
                Plot 1202 Ademola Adetokunbo Crescent, Wuse 2, Abuja
              </p>
              <a
                href="mailto:info@altwasteenergy.com"
                className="flex items-center gap-3 hover:text-[#00ffc3] transition-colors"
              >
                <MdEmail className="text-[#00ffc3]" />
                info@altwasteenergy.com
              </a>
              <a
                href="tel:+2349166897626"
                className="flex items-center gap-3 hover:text-[#00ffc3] transition-colors"
              >
                <MdPhone className="text-[#00ffc3]" />
                +234 (0) 916 689 7626
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-[#00ffc3] mb-5 uppercase tracking-wide">
              Quick Links
            </h2>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Products", path: "/products" },
                { label: "Pyrogas Plants", path: "/pyrogas-plants" },
                { label: "Contact", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-[#00ffc3] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold text-[#00ffc3] mb-5 uppercase tracking-wide">
              Follow Us
            </h2>
            <div className="flex items-center gap-5">
              {[
                { Icon: FaFacebook, link: "https://www.facebook.com/share/1NgMTHwBxe/" },
                { Icon: FaInstagram, link: "https://www.instagram.com/altwaste.energy?igsh=bzk0amw0MHllZnBx" },
                { Icon: FaLinkedinIn, link: "https://linkedin.com/company/altwaste" },
                { Icon: FaTiktok, link: "https://www.tiktok.com/@altwaste?_r=1&_t=ZS-91QbEbB4SiC" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-700 hover:border-[#00ffc3] hover:text-[#00ffc3] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {year} AltWaste Energy Ltd. All Rights Reserved.
          </p>
          <p className="text-sm mt-3 text-gray-400">
            Built by{" "}
            <a
              target="_blank"
              href="https://xmotivotechnologies.com/viewportfolio"
              rel="noopener noreferrer"
              className="text-[#00ffc3] font-semibold hover:text-[#00ffc3] transition-colors"
            >
              xMotivo Technologies Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
