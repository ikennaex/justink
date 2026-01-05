import React from "react";

const ReturnPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Return & Refund Policy
      </h1>

      <p className="text-gray-700 mb-8 leading-relaxed">
        At Justlink Logistics Limited & E-commerce Services, customer satisfaction
        is important to us. This Return & Refund Policy outlines the conditions
        under which items purchased through our platform can be returned,
        exchanged, or refunded.
      </p>

      <div className="space-y-8 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-3">
            1. Eligibility for Returns
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The item was purchased through Justlink Logistics Limited & E-commerce Services.</li>
            <li>The return request is made within 7 days of delivery.</li>
            <li>The item is unused, unworn, unwashed, and in its original condition.</li>
            <li>Original packaging, tags, labels, and accessories are intact.</li>
            <li>Proof of purchase (receipt, order number, or invoice) is provided.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            2. Non-Returnable Items
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Perishable goods (food items, groceries, flowers, etc.)</li>
            <li>Personal care and hygiene products (cosmetics, underwear, hair products, etc.)</li>
            <li>Digital products or downloadable content</li>
            <li>Items damaged due to misuse, negligence, or customer handling</li>
            <li>Items marked “Final Sale” or “Non-Returnable” at the point of purchase</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            3. Reasons for Acceptable Returns
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Wrong item delivered</li>
            <li>Damaged or defective item at the point of delivery</li>
            <li>Incomplete order (missing items)</li>
            <li>
              Items that materially deviate from the description or visual
              representation provided on the platform
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            4. Return Process
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact Justlink Customer Support via our official phone number, email, or platform.</li>
            <li>Provide your order number, item details, and reason for return.</li>
            <li>Our team will review and approve eligible requests within 24–72 hours.</li>
            <li>Once approved, return instructions will be provided.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            5. Return Shipping & Logistics
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If the return is due to an error by Justlink Logistics Limited or the
              seller, return shipping costs will be covered by the store vendor.
            </li>
            <li>
              If the return is due to customer preference, the customer bears the
              return shipping cost.
            </li>
            <li>Returned items must be properly packaged to prevent damage.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            6. Inspection & Approval
          </h2>
          <p>
            All returned items will be inspected upon receipt. Approval or
            rejection will be communicated within 3–5 business days after
            inspection. Items that do not meet return conditions may be rejected
            and sent back to the customer.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            7. Refund Policy
          </h2>
          <p>
            Approved refunds will be processed within 7–14 business days.
            Refunds will be made via the original payment method or wallet credit,
            where applicable. Shipping fees are non-refundable except in cases of
            company or seller error.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            8. Exchange Policy
          </h2>
          <p>
            Exchanges are subject to product availability. If the replacement
            item costs more, the customer will pay the difference. If it costs
            less, the balance may be refunded or credited.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            9. Seller Responsibility (Marketplace Orders)
          </h2>
          <p>
            Sellers are responsible for the quality, authenticity, and accuracy
            of listed products. Justlink reserves the right to intervene in
            disputes to protect customers and maintain service standards.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            10. Policy Updates
          </h2>
          <p>
            Justlink Logistics Limited & E-commerce Services reserves the right to
            modify this policy at any time. Changes will be communicated through
            our website or official channels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
