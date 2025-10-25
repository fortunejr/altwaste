import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { medlogo2 } from "../../imports";

const Nav = () => {
  const menuItems = [
    { name: "ABOUT US", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "PRODUCTS", link: "/products" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-darkGreen text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img className="h-10 lg:h-13" src={medlogo2} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-16 text-lg font-semibold">
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

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <IoClose size={36} className="cursor-pointer" />
          ) : (
            <IoIosMenu size={36} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden flex flex-col gap-5 px-6 py-4 bg-[#005c56] text-lg font-medium border-t border-white/20">
          {menuItems.map((menu, i) =>
            menu.link.includes("#") ? (
              <a key={i} href={menu.link} className="border-b border-white/20 pb-2">
                {menu.name}
              </a>
            ) : (
              <Link
                key={i}
                to={menu.link}
                className="border-b border-white/20 pb-2"
              >
                {menu.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
