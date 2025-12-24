import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const leftContent = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Herosection = () => {
  const texts = [
    { text: "Fast Delivery", color: "text-blue-500" },
    { text: "Pay on Delivery", color: "text-yellow-500" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden mt-10 flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(21, 128, 61, 0.15), rgba(59, 130, 246, 0.08)),
          url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.25' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
      }}
    >
      {/* Decorative gradient blobs */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-green-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-25"></div>

      {/* Optional faint grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-7 lg:px-10 py-24 flex flex-col lg:flex-row items-center gap-14">
        {/* Left Content */}
        <motion.div
          className="p-5 lg:mx-20 text-center lg:text-center"
          variants={leftContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Animated headline */}
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-snug">
            {/* Animated line */}
            <div className="h-[1.3em] mb-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[index].text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className={`${texts[index].color} block`}
                >
                  {texts[index].text}.
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Static text */}
            <span className="text-green-700">
              Connecting Manufacturers, Wholesalers, Suppliers, Retailers, and
              Consumers Seamlessly.
            </span>
          </h1>

          <p className="text-gray-700 text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            By leveraging technology, data intelligence, and strategic
            partnerships, we deliver fast, affordable, and reliable services that
            simplify trade, expand market access, and support economic
            competitiveness.
          </p>

          <div className="flex items-center justify-center gap-4">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 bg-green-950 hover:bg-green-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >
              Contact Us
            </motion.button>
          </Link>

          <Link to="/getstarted">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            >

              Get started
            </motion.button>
          </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
