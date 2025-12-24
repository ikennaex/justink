import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { logo } from "../../../imports";
import { motion, AnimatePresence } from "framer-motion";
import "./Nav.css";

const Nav = () => {
  const menuItems = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Why Choose Us", link: "/why-choose-us" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggle = () => setOpen(!open);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: "easeIn" } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm shadow-sm border-b border-green-100">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="absolute inset-0 bg-green-700/5"></div>

      {/* Inner Container */}
      <div className="relative container mx-auto px-7 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img className="h-10 lg:h-12 object-contain" src={logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((menu) =>
            menu.link.includes("#") ? (
              <a
                key={menu.name}
                href={menu.link}
                className="text-gray-700 font-semibold uppercase tracking-wide hover:text-green-700 transition-colors duration-300"
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={menu.name}
                to={menu.link}
                className={`text-gray-700 font-semibold uppercase tracking-wide hover:text-green-700 transition-colors duration-300 ${
                  location.pathname === menu.link ? "text-green-700 border-b-2 border-green-700 pb-1" : ""
                }`}
              >
                {menu.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={toggle}>
          {open ? (
            <IoClose size={34} className="cursor-pointer text-green-700 transition-transform duration-200" />
          ) : (
            <IoIosMenu size={34} className="cursor-pointer text-green-700 transition-transform duration-200" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="relative lg:hidden bg-green-50 flex flex-col gap-5 py-5 px-8 border-t border-green-200 shadow-md"
          >
            {menuItems.map((menu) =>
              menu.link.includes("#") ? (
                <a
                  key={menu.name}
                  href={menu.link}
                  className="text-gray-800 uppercase font-semibold hover:text-green-700 transition-colors duration-300"
                >
                  {menu.name}
                </a>
              ) : (
                <Link
                  key={menu.name}
                  to={menu.link}
                  className={`text-gray-800 uppercase font-semibold hover:text-green-700 transition-colors duration-300 ${
                    location.pathname === menu.link ? "text-green-700" : ""
                  }`}
                >
                  {menu.name}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
