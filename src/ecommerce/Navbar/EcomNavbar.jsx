import React, { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { logo } from "../../imports";
import { Link } from "react-router";
import { useCart } from "../contexts/CartContext"; 

const EcomNavbar = () => {
  const {totalItems} = useCart()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/ecommerce" className="font-bold text-indigo-600">
              <img className="h-10" src={logo}></img>
            </Link>
          </div>

          {/* Search Bar */}
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
            <a href="/ecommerce/contact" className="text-gray-700 hover:text-customBlue">
              Contact
            </a>
            {/* User Account */}
            <Link to={"/ecommerce/register"}>
              <User className="h-6 w-6 text-gray-700 hover:text-customBlue cursor-pointer" />
            </Link>
            {/* Cart */}
            <div className="relative">
              <Link to={"/ecommerce/cart"}>
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-customBlue cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {totalItems}
              </span>
              </Link>
            </div>

            <Link to={"/ecommerce/become-a-vendor"}>
            <div className="cursor-pointer bg-customGreen rounded-xl px-2 py-1 text-white">Become a vendor</div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-4 space-y-1 shadow-md">
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
            to="ecommerce/contact"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Contact
          </Link>
          <div className="flex items-center space-x-4 mt-2">
            <User className="h-6 w-6 text-gray-700 hover:text-indigo-600 cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {totalItems}
              </span>
            </div>
          </div>

          <div>Become a vendor</div>
        </div>
      )}
    </nav>
  );
};

export default EcomNavbar;
