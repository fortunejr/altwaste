import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Mail } from "lucide-react";
import { medlogo2 } from "../../imports";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "SERVICES", link: "/services" },
    { name: "PRODUCTS", link: "/products" },
    { name: "PYROGAS PLANTS", link: "/pyrogas-plants" },
    { name: "PYROGAS PLANTS", link: "/pyrogas-plants" },
    { name: "MEET THE TEAM", link: "/Team" },
    { name: "ABOUT US", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-darkGreen text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img className="h-12 lg:h-16" src={medlogo2} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-14 text-sm font-semibold">
          {menuItems.map((menu, i) =>
            menu.link.includes("#") ? (
              <a
                key={i}
                href={menu.link}
                className="hover:text-lightGreen transition-colors duration-300"
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={i}
                to={menu.link}
                className="hover:text-lightGreen transition-colors duration-300"
              >
                {menu.name}
              </Link>
            )
          )}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-2 bg-white text-darkGreen font-semibold rounded-full px-5 py-2 hover:bg-lightGreen hover:text-white transition-all duration-300"
        >
          <Mail size={18} />
          Reach Us
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <IoClose size={34} className="cursor-pointer" />
          ) : (
            <IoIosMenu size={34} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden flex flex-col gap-4 px-6 py-4 bg-[#005c56] text-base font-medium border-t border-white/20">
          {menuItems.map((menu, i) =>
            menu.link.includes("#") ? (
              <a
                key={i}
                href={menu.link}
                className="border-b border-white/20 pb-2 hover:text-lightGreen transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={i}
                to={menu.link}
                className="border-b border-white/20 pb-2 hover:text-lightGreen transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </Link>
            )
          )}

          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 bg-white text-darkGreen font-semibold rounded-full px-5 py-2 hover:bg-lightGreen hover:text-white transition-all duration-300"
          >
            <Mail size={18} />
            Reach Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
