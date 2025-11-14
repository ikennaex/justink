import React from "react";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Seamless Market Access",
      desc: "Sell nationwide without physical outlets. Logistics unlocks a wider market for your business."
    },
    {
      title: "Customer Trust & Loyalty",
      desc: "Fast, reliable fulfilment builds confidence. COD increases customer security and repeat purchases."
    },
    {
      title: "Scalability & Growth",
      desc: "Grow from a few orders daily to hundreds effortlessly with warehousing, fulfilment, and dispatch solutions."
    },
    {
      title: "Efficiency & Cost Savings",
      desc: "Avoid managing your own fleet. Focus on sales while we handle storage, packaging, and last-mile delivery."
    },
    {
      title: "Reverse Logistics",
      desc: "Easy returns, exchanges, and replacements. Customers feel more confident buying repeatedly."
    },
    {
      title: "Competitive Advantage",
      desc: "Same-day or next-day delivery sets your brand apart and boosts conversions."
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-[#33751D]">JustLink Logistics</span>?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We don’t just move goods — we move growth, trust, and business success across Africa.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-7 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#33751D]"
            >
              <h3 className="text-xl font-semibold text-[#33751D] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
