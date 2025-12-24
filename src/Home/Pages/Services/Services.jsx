import React from 'react';
import { logistics, ecommerce, general, value } from '../../../imports';

const Services = () => {
  const services = [
    {
      title: "Logistics & Supply Chain Solutions",
      items: [
        "Warehousing & Inventory Management: Safe storage for goods from manufacturers and suppliers before reaching wholesalers and retailers.",
        "Bulk Distribution & Freight: Large-scale transport of goods from factories and suppliers to wholesalers and regional markets.",
        "Last-Mile Delivery: Fast delivery from wholesalers or retailers directly to the consumer’s doorstep.",
        "Cold Chain Logistics: Specialized logistics for perishable goods from agricultural producers and suppliers.",
        "Reverse Logistics: Simplifying product returns for retailers and consumers while supporting manufacturers’ warranty services."
      ],
      img: logistics,
    },
    {
      title: "E-commerce & Trade Solutions",
      items: [
        "Marketplace Integration: Enabling manufacturers and suppliers to list products for wholesalers, retailers, and consumers.",
        "B2B E-commerce Solutions: A digital trade bridge connecting manufacturers to wholesalers and suppliers to retailers.",
        "B2C E-commerce Solutions: Direct-to-consumer sales for retailers and brands.",
        "Cross-Border E-commerce: Helping African suppliers and manufacturers reach international wholesalers and retailers.",
        "Pay on Delivery: Providing secure payment methods that build confidence for retailers and consumers."
      ],
      img: ecommerce,
    },
    {
      title: "General Goods & Trading",
      items: [
        "Procurement and supply of fast-moving consumer goods (FMCGs), electronics, agricultural products, industrial materials, and household essentials.",
        "Connecting manufacturers and suppliers with wholesalers and retailers across industries.",
        "Facilitating large-scale trading networks that ensure wholesalers and retailers can access goods at competitive rates."
      ],
      img: general,
    },
    {
      title: "Value-Added Services",
      items: [
        "Financial Facilitation: Trade credit and flexible financing for wholesalers, suppliers, and retailers.",
        "Retail Insights & Data Analytics: Market intelligence for manufacturers and suppliers to understand consumer demand.",
        "Trade Partnerships: Linking SMEs, manufacturers, and suppliers to larger wholesale and retail markets."
      ],
      img: value,
    }
  ];

  return (
    <section className="text-gray-800 py-16 px-6 md:px-12 mt-15">
      <div className="max-w-7xl mx-auto space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center`}
          >
            {/* Text Section */}
            <div className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {service.title}
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                {service.items.map((item, i) => (
                  <li key={i} className="text-lg leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"} w-full h-full rounded-lg flex items-center justify-center`}>
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
