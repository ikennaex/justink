import React from "react";

const EcomBecomeAVendor = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-10 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Become a Vendor
          </h2>
          <p className="text-sm text-blue-600 font-semibold">
            Please ensure you supply only <span className="underline">correct</span> information.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Business Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              placeholder="Enter your business name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your business or personal address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Store Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Store Description
            </label>
            <textarea
              name="storeDescription"
              placeholder="Describe your store..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-customBlue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Register Store
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already a vendor?{" "}
          <a
            href="/ecommerce/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Log in here
          </a>
        </p>
      </div>
    </section>
  );
};

export default EcomBecomeAVendor;
