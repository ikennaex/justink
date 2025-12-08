import React from "react";
import {loghero} from "../../../imports"; // ensure this is correct
import { Search } from "lucide-react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section
      className="relative w-full md:h-[90vh] flex items-center justify-center text-white py-20"
    >
      {/* Background with blur + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${loghero})`,
          filter: "blur(4px)",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="font-semibold tracking-wide text-[#76c95b]">
            Leading Logistics Service
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Fastest & Reliable <br />{" "}
            <span style={{ color: "#76c95b" }}>Courier Service</span>
          </h1>

          <p className="text-gray-300 max-w-md">
            We offer a full range of global freight services with unmatched
            reliability and speed. Professional shipping solutions tailored to
            meet your business needs worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="px-5 py-3 rounded-xl font-semibold flex items-center gap-2"
              style={{ backgroundColor: "#33751D" }}
            ><Link to='sendpackage'>
              Send Package</Link>
            </button>

            <button className="hover:border hover:border-white px-5 py-3 rounded-xl bg-orange-600 transition">
              Become a Rider
            </button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto">
          <h2
            className="text-2xl font-bold text-center"
            style={{ color: "#33751D" }}
          >
            Track Your Shipment
          </h2>

          <p className="mt-2 text-center text-gray-500 text-sm">
            Enter your tracking number to get real-time updates on your package.
          </p>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter tracking number..."
            className="w-full mt-6 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 outline-none"
            style={{ focusRingColor: "#33751D" }}
          />

          {/* Button */}
          <button
            className="w-full mt-4 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: "#33751D" }}
          >
            <span><Search /></span> Track Package
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Need help?{" "}
            <span style={{ color: "#33751D" }} className="cursor-pointer">
              Contact our support team
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
