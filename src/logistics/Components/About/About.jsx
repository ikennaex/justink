import React from "react";
import { aboutimg } from "../../../imports";

const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            About <span className="text-[#33751D]">JustLink Logistics</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Powering Africa’s logistics, e-commerce, and supply chain evolution.
          </p>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-[#33751D] font-semibold">JustLink Logistics Limited</strong> is a 
              multi-sector logistics and e-commerce solutions provider dedicated 
              to transforming how goods move from manufacturers and suppliers to 
              wholesalers, retailers, and end consumers.
              <br /><br />
              We specialize in e-commerce, logistics, supply chain management, and 
              general goods trading—creating a seamless ecosystem where businesses 
              and individuals thrive, scale, and connect to global opportunities.
            </p>

            {/* Highlighted Quote */}
            <div className="p-6 bg-white border-l-4 border-[#33751D] shadow-md rounded-lg">
              <p className="italic text-gray-700">
                “Our mission is simple — To be the leading logistics and e-commerce enabler in Africa and beyond, seamlessly connecting manufacturers, wholesalers, suppliers, retailers, and consumers while fostering economic growth through innovation and trust.”
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE / VISUAL BLOCK */}
          <div className="relative">
            <div className="bg-[#33751D] absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-20"></div>
            <img
              src="/images/homepageimg.jpeg"
              alt="Logistics warehouse"
              className="relative rounded-3xl shadow-xl object-cover w-full h-[380px]"
            />
          </div>
        </div>

        {/* STRATEGIC GOALS */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Our <span className="text-[#33751D]">Strategic Goals</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#33751D] mb-2">Digitization</h4>
              <p className="text-gray-600">
                Real-time tracking across the entire supply chain for manufacturers, 
                wholesalers, suppliers, and retailers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#33751D] mb-2">Infrastructure</h4>
              <p className="text-gray-600">
                Build distribution hubs and warehouses supporting large-scale movement of goods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#33751D] mb-2">Trade Credit</h4>
              <p className="text-gray-600">
                Integrate financial support for wholesalers, suppliers, and retailers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#33751D] mb-2">Expansion</h4>
              <p className="text-gray-600">
                Scale across Africa and beyond to link local suppliers to global markets.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
