import { ArrowRightIcon, ShoppingBagIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Herobanner = () => {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-green-800 text-white py-20 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Hero Text */}
      <div className="relative max-w-2xl z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl mb-4 leading-tight">
          JustLink Logistics Ecommerce
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-6">
          Shop smarter, ship faster, and connect with trusted vendors all in
          one seamless platform built for efficiency and growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-200">
            <ShoppingBagIcon className="h-5 w-5" />
            Start Shopping
          </button>

          <Link to={"/ecommerce/categories"}>
          <button className="flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition duration-200">
            Explore Categories <ArrowRightIcon className="h-5 w-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
