import React, { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { logo } from "../../imports";
import { Link } from "react-router";
import { useCart } from "../Contexts/CartContext";

const EcomNavbar = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/ecommerce" className="font-bold text-indigo-600">
              <img className="h-10" src={logo} alt="JustLink Logo" />
            </Link>
          </div>

          {/* Search Bar (Desktop only) */}
          <div className="hidden md:flex flex-1 mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/ecommerce/categories"
              className="text-gray-700 hover:text-customBlue"
            >
              Categories
            </Link>
            <Link
              to="/ecommerce/contact"
              className="text-gray-700 hover:text-customBlue"
            >
              Contact
            </Link>
            {/* User Account */}
            <Link to="/ecommerce/register">
              <User className="h-6 w-6 text-gray-700 hover:text-customBlue cursor-pointer" />
            </Link>

            {/* Cart Icon */}
            <div className="relative">
              <Link to="/ecommerce/cart">
                <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-customBlue cursor-pointer" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

            {/* Become a Vendor */}
            <Link to="/ecommerce/become-a-vendor">
              <div className="cursor-pointer bg-customGreen rounded-xl px-3 py-1 text-white text-sm font-medium">
                Become a vendor
              </div>
            </Link>
          </div>

          {/* Mobile Right Section (Menu + Cart) */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Cart visible on mobile */}
            <Link to="/ecommerce/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-5 shadow-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
          />

          <Link
            to="/ecommerce/categories"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Categories
          </Link>

          <Link
            to="/ecommerce/contact"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Contact
          </Link>

          <Link
            to="/ecommerce/register"
            className="block text-gray-700 hover:text-indigo-600 flex items-center gap-2"
          >
            <User className="h-5 w-5" /> Account
          </Link>

          <Link
            to="/ecommerce/become-a-vendor"
            className="block text-center bg-customGreen text-white py-2 rounded-lg font-medium hover:opacity-90"
          >
            Become a vendor
          </Link>
        </div>
      )}
    </nav>
  );
};

export default EcomNavbar;
