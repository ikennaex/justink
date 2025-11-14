import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Globe,
  Search,
  Users,
  Heart,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 99,
    suffix: "%",
    label: "Industry-leading on-time delivery performance",
  },
  {
    icon: Globe,
    value: 36,
    suffix: "",
    label: "States across Nigeria",
  },
  {
    icon: Search,
    value: 99,
    suffix: "%",
    label: "Advanced tracking systems with GPS precision",
  },
  {
    icon: Users,
    value: 30,
    suffix: "+",
    label: "Logistics professionals worldwide",
  },
  {
    icon: Heart,
    value: 99,
    suffix: "%",
    label: "Outstanding client satisfaction rating",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Excellent online support and expert advice",
  },
];

// CountUp hook
const useCountUp = (end, duration = 2000) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const step = () => {
      start += increment;
      if (start < end) {
        setValue(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return value;
};

const OurImpact = () => {
  return (
    <section
      className="py-20 px-6 text-white relative"
      style={{
        background: "linear-gradient(145deg, #33751D, #33751D)",
      }}
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm tracking-wider text-[#FBC02D] mb-2"
        >
          OUR IMPACT
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Delivering excellence across the globe
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-200 mt-4"
        >
          With industry-leading standards and proven track record
        </motion.p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const count = useCountUp(stat.value);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Badge */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-4"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                }}
              >
                <Icon size={30} className="text-white" />
              </div>

              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold">
                {count}
                {stat.suffix}
              </div>

              {/* Label */}
              <p className="text-gray-200 mt-2 leading-relaxed text-sm max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-16 text-[#FBC02D] text-sm"
      >
        🔶 Trusted by thousands of customers worldwide
      </motion.p>
    </section>
  );
};

export default OurImpact;
