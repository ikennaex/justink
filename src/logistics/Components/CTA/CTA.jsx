import React from "react";

const CTA = () => {
  return (
    <section
      className="py-20 px-6 text-white"
      style={{
        background: "linear-gradient(135deg, #33751D, #1f4e12)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to streamline your logistics?
        </h2>

        <p className="text-lg text-gray-200 mb-8">
          Join thousands of businesses who trust us for fast, reliable, and
          efficient delivery services across the globe.
        </p>

        <button
          className="bg-white text-[#33751D] font-semibold px-10 py-4 rounded-xl shadow-lg 
          hover:bg-gray-100 transition-all text-lg"
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default CTA;
