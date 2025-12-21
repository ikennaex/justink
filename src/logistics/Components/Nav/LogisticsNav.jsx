import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { logo } from "../../../imports";
import { useRiderAuth } from "../../../Contexts/RiderContext";

const LogisticsNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useRiderAuth();

  const handleLogout = () => {
    logout();
    navigate("/logistics/login");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/logistics" className="font-bold text-indigo-600">
              <img className="h-10" src={logo} alt="Logo" />
            </Link>
          </div>

          {!isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
              <Link to="/logistics/services">Services</Link>
              <Link to="/logistics/about">About</Link>
              <Link to="/logistics/contact">Contact</Link>

              <Link
                to="/logistics/track"
                className="ml-6 bg-[#33751D] text-white px-4 py-2 rounded-lg"
              >
                Track
              </Link>

              <Link
                to="/logistics/login"
                className="ml-6 text-orange-600 px-4 py-2 hover:underline"
              >
                Sign In
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-6">
              <Link to={"/logistics/rider-dashboard"} >Dashboard</Link>
              <button onClick={handleLogout} className="text-red-600">Logout</button>
            </div>
          )}

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center gap-3">
            {/* TRACK (Mobile) */}
            <Link
              to="/logistics/track"
              className="bg-[#33751D] text-white px-5 py-2.5 rounded-lg text-m font-medium hover:opacity-90"
            >
              Track
            </Link>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && !isAuthenticated && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-5 shadow-md font-medium">
          <Link
            to="/logistics/services"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Services
          </Link>
          <Link
            to="/logistics/about"
            className="block text-gray-700 hover:text-indigo-600"
          >
            About
          </Link>
          <Link
            to="/logistics/contact"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Contact
          </Link>
          <Link
            to="/logistics/login"
            className="text-orange-600 px-4 py-2 hover:underline rounded-lg hover:opacity-90 transition-all"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default LogisticsNav;
