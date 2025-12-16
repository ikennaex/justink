import React from "react";
import { motion } from "framer-motion";
import { box } from "../../../imports";

const services = [
  {
    title: "Warehousing & Inventory Management",
    description:
      "Safe and structured storage for goods, ensuring smooth flows from manufacturers to wholesalers.",
  },
  {
    title: "Bulk Distribution & Freight",
    description:
      "Efficient large-scale transport of goods from factories and suppliers to regional markets.",
  },
  {
    title: "Last-Mile Delivery",
    description:
      "Fast, reliable delivery directly from wholesalers or retailers to the customer’s doorstep.",
  },
  {
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled logistics tailored for perishable and sensitive goods.",
  },
  {
    title: "Reverse Logistics",
    description:
      "Seamless product return flows supporting retailers, consumers, and warranty processing.",
  },
];

const Services = () => {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#33751D]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#33751D]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#33751D] mb-14"
        >
          Logistics Services Designed for Efficiency
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#33751D]/40 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

              {/* Card */}
              <div
                className="relative z-10 bg-white rounded-3xl shadow-lg 
                border border-[#33751D]/20 group-hover:shadow-2xl 
                group-hover:border-[#33751D] transition-all duration-500
                overflow-hidden"
              >
                {/* Full-width image header */}
                <div className="w-full">
                  <img
                    src={box}
                    alt="Service illustration"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#33751D] mb-3 text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
