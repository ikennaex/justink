import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  TrendingUp,
  Truck,
  RefreshCcw,
  Trophy,
  Cpu,
  Package,
  Users,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Seamless Market Access",
      text: "Sell to clients nationwide without opening physical outlets. Logistics opens your business to a whole new world.",
    },
    {
      icon: ShieldCheck,
      title: "Customer Trust & Loyalty",
      text: "Quick, convenient fulfillments build credibility. COD makes customers feel secure, boosting repeat purchases.",
    },
    {
      icon: TrendingUp,
      title: "Scalability & Growth",
      text: "From 5–10 orders daily to hundreds without pressure. With warehousing, fulfilment & dispatch services, bottlenecks are gone.",
    },
    {
      icon: Truck,
      title: "Efficiency & Cost Savings",
      text: "Avoid hiring your own fleet. Focus on selling while we handle storage, packing, and last-mile delivery.",
    },
    {
      icon: RefreshCcw,
      title: "Reverse Logistics",
      text: "Easy pickup & replacement for returns, exchanges & refurbishments. Customers feel reassured to purchase.",
    },
    {
      icon: Trophy,
      title: "Competitive Advantage",
      text: "Same-day or next-day delivery helps you stand out. Quick delivery = better sales & stronger brand.",
    },
    {
      icon: Cpu,
      title: "Digital Integration",
      text: "GPS tracking, real-time notifications & proof of delivery keeps everyone updated every step of the way.",
    },
    {
      icon: Package,
      title: "Cross-Border Opportunities",
      text: "Importing from China, US, UK? We assist with freight & clearance, growing your business globally.",
    },
    {
      icon: Users,
      title: "Job Creation & Partnerships",
      text: "Each package supports riders, drivers, and the Nigerian economy. Your growth fuels national growth.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 mt-15">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
        >
          The reasons why{" "}
          <span className="text-green-600">JustLink Logistics & E-Commerce</span>{" "}
          is so Important to You
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-green-200 pl-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-12 relative ${
                  index % 2 === 0 ? "md:ml-0" : "md:ml-12"
                }`}
              >
                {/* Dot & line indicator */}
                <span className="absolute -left-10 top-2 w-6 h-6 rounded-full bg-green-700 flex items-center justify-center text-white shadow-lg">
                  <Icon className="w-4 h-4" />
                </span>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 bg-green-700 text-white rounded-2xl shadow-lg p-10 text-center"
        >
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">JustLink Logistics + E-Commerce</span>{" "}
            = Growth, Trust, and Reach.
            <br />
            <span className="italic">
              JustLink is not merely another online store, it is a versatile,
              reliable, and countrywide enterprise that can be expanded.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
