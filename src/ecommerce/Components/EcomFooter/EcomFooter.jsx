import { PhoneForwarded } from "lucide-react";
import React from "react";
import { logo } from "../../../imports";

const EcomFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-14 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-700/50 pb-10">
          
          {/* Column 1: Brand Info & Contact */}
          <div className="lg:col-span-1 flex flex-col space-y-5">
            {/* Logo & Brand Name */}
            <div className="flex items-center space-x-3">
              <img className="h-10 bg-white rounded-md p-1" src={logo} alt="JustLink logo" />
              <h2 className="text-xl md:text-2xl font-bold text-white">JustLink Logistics</h2>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed">
              Shop smarter, ship faster, and connect with trusted vendors — all in one
              seamless platform built for efficiency and growth.
            </p>

            {/* Contact Info */}
            <div className="text-sm space-y-2">
              <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <PhoneForwarded className="h-4 w-4 mr-2 text-gray-400" />
                08168546166, 09133286601
              </p>
              <a
                href="mailto:support@justlinklogistics.com.ng"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                support@justlinklogistics.com.ng
              </a>
            </div>
          </div>

          {/* Column 2-5: Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Products</h4>
              <ul className="space-y-2 text-sm">
                {["Logistics", "Ecommerce"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Categories</h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Fashion",
                  "Beauty",
                  "Electronics",
                  "Food & Groceries",
                  "Office & School",
                  "Travel & Lifestyle",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                {["FAQs", "Contact Us", "Return Policy", "Shipping Info"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} JustLink Logistics. All rights reserved.</p>
          <p>Developed by <span className="text-customBlue"><a href="https://xmotivotechnologies.com/viewportfolio" target="_blank">xMotivo Technologies</a></span></p>
        </div>
      </div>
    </footer>
  );
};

export default EcomFooter;
