import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    // Example: set launch date 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          mins: Math.floor((distance / (1000 * 60)) % 60),
          secs: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-500"></div>

      {/* Animated overlay orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-96 h-96 bg-white/10 blur-[150px] rounded-full top-10 left-10"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-yellow-400/10 blur-[200px] rounded-full bottom-10 right-10"
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Coming <span className="text-yellow-300">Soon</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          We’re working hard to launch something amazing. Stay tuned!
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 mb-10">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-4xl font-bold">{value.toString().padStart(2, "0")}</span>
              <span className="text-sm uppercase text-white/80">{label}</span>
            </div>
          ))}
        </div>

        {/* Email Notify Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-5 py-3 rounded-full bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-green-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Notify Me
          </button>
        </form>
      </motion.div>

    </section>
  );
};

export default ComingSoon;
