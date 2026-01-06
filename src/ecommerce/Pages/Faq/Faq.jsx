import React, { useState } from "react";

const faqData = [
  {
    category: "General Questions",
    items: [
      {
        q: "What is Justlink Logistics Limited & E-commerce Services?",
        a: "Justlink Logistics Limited is a logistics and e-commerce service provider that offers reliable delivery, order fulfillment, and online marketplace services across Nigeria, connecting sellers and customers efficiently.",
      },
      {
        q: "Where does Justlink operate?",
        a: "We currently operate within major cities and states in Nigeria, with plans to expand nationwide. Delivery availability may depend on your location.",
      },
      {
        q: "How do I contact Justlink Customer Support?",
        a: "You can contact us via our official phone number, email, website, or social media channels. Our customer support team is available during business hours to assist you.",
      },
    ],
  },
  {
    category: "Orders & Shopping",
    items: [
      {
        q: "How do I place an order?",
        a: "Orders can be placed through our website, web app, mobile app, or by contacting approved sellers using the Justlink e-commerce website.",
      },
      {
        q: "Can I cancel my order after placing it?",
        a: "Yes, orders can be canceled before dispatch. Once an item has been shipped, cancellation may not be possible.",
      },
      {
        q: "How do I know my order has been confirmed?",
        a: "You will receive an order confirmation via SMS, email, or in-app notification once your order is successfully placed.",
      },
    ],
  },
  {
    category: "Delivery & Logistics",
    items: [
      {
        q: "How long does delivery take?",
        a: "Same-day or next-day delivery within select cities, and 2 to 5 business days for inter-state deliveries.",
      },
      {
        q: "How much does delivery cost?",
        a: "Delivery fees vary based on distance, package size, and delivery method. The exact cost will be displayed before checkout or communicated during order confirmation.",
      },
      {
        q: "Can I track my delivery?",
        a: "Yes. Once your order is dispatched, you will receive tracking details to monitor your shipment in real time or through customer support.",
      },
      {
        q: "What happens if I’m not available during delivery?",
        a: "Our delivery agent may contact you. If delivery fails, a re-delivery may be scheduled, and additional charges may apply.",
      },
    ],
  },
  {
    category: "Payments",
    items: [
      {
        q: "What payment methods are accepted?",
        a: "We accept bank transfers, debit cards, POS payments, and cash on delivery where applicable.",
      },
      {
        q: "Is Cash on Delivery available?",
        a: "Yes, Cash on Delivery is available for select locations and products. Eligibility will be communicated during checkout.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    items: [
      {
        q: "What is your return policy?",
        a: "Items can be returned within 7 days of delivery, provided they are unused, in original condition, and meet our return requirements.",
      },
      {
        q: "Which items cannot be returned?",
        a: "Perishable goods, personal care items, digital products, and items marked Non-Returnable cannot be returned.",
      },
      {
        q: "How long does it take to get a refund?",
        a: "Approved refunds are processed within 7 to 14 business days, depending on your payment method.",
      },
      {
        q: "Who pays for return shipping?",
        a: "Justlink or the vendor covers return shipping for wrong, damaged, or defective items. Customers cover return shipping for change-of-mind returns.",
      },
    ],
  },
  {
    category: "Sellers & Marketplace",
    items: [
      {
        q: "Does Justlink sell products directly?",
        a: "Justlink operates both as a logistics provider and an e-commerce platform. Some products are sold directly, while others are sold by third-party vendors.",
      },
      {
        q: "How does Justlink ensure seller quality?",
        a: "We monitor sellers to ensure product quality, accurate listings, and timely fulfillment. However, sellers remain responsible for the products they list.",
      },
      {
        q: "I’m a seller. Can I partner with Justlink?",
        a: "Yes. Businesses and individuals can partner with Justlink Logistics Limited for delivery and e-commerce services. Contact us to get started.",
      },
    ],
  },
  {
    category: "Security & Trust",
    items: [
      {
        q: "Is my personal information safe with Justlink?",
        a: "Yes. We take customer data protection seriously and use appropriate security measures to safeguard your personal information.",
      },
      {
        q: "What should I do if I receive a damaged or wrong item?",
        a: "Contact Customer Support immediately within 7 days of delivery with your order details and photos if required.",
      },
    ],
  },
  {
    category: "Other Questions",
    items: [
      {
        q: "What if I have a complaint or dispute?",
        a: "Please contact our Customer Support Team. We aim to resolve all complaints fairly and promptly.",
      },
      {
        q: "Can Justlink change its policies?",
        a: "Yes. Justlink Logistics Limited reserves the right to update its policies. Any changes will be communicated via our official channels.",
      },
    ],
  },
];

const Faq = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {section.category}
          </h2>

          <div className="space-y-3">
            {section.items.map((item, itemIndex) => {
              const index = `${sectionIndex}-${itemIndex}`;
              return (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-medium bg-gray-50 hover:bg-gray-100"
                  >
                    <span>{item.q}</span>
                    <span className="text-xl">
                      {active === index ? "-" : "+"}
                    </span>
                  </button>

                  {active === index && (
                    <div className="p-4 text-gray-600 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
