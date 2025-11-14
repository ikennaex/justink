import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Boxes,
  Package,
  Snowflake,
  RotateCcw,
} from "lucide-react";

const services = [
  {
    title: "Warehousing & Inventory Management",
    description:
      "Safe and structured storage for goods, ensuring smooth flows from manufacturers to wholesalers.",
    icon: Boxes,
  },
  {
    title: "Bulk Distribution & Freight",
    description:
      "Efficient large-scale transport of goods from factories and suppliers to regional markets.",
    icon: Truck,
  },
  {
    title: "Last-Mile Delivery",
    description:
      "Fast, reliable delivery directly from wholesalers or retailers to the customer’s doorstep.",
    icon: Package,
  },
  {
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled logistics tailored for perishable and sensitive goods.",
    icon: Snowflake,
  },
  {
    title: "Reverse Logistics",
    description:
      "Seamless product return flows supporting retailers, consumers, and warranty processing.",
    icon: RotateCcw,
  },
];

const Services = () => {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Background creative accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#33751D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#33751D]/20 rounded-full blur-3xl"></div>
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#33751D]/40 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg border border-[#33751D]/20
                group-hover:shadow-2xl group-hover:border-[#33751D] transition-all duration-500">
                  
                  {/* Icon container */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl 
                  bg-gradient-to-br from-[#33751D] to-[#2A5E18] shadow-md mb-6">
                    <Icon size={34} color="white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#33751D] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
