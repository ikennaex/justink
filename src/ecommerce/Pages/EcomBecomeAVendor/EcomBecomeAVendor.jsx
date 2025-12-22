import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../baseUrl";
import { useUser } from "../../../Contexts/UserContext";
import { useNavigate } from "react-router";

const EcomBecomeAVendor = () => {
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const { api, setUser } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post(`${baseUrl}become-a-vendor`, {
        businessName,
        phoneNumber,
        address,
        storeDescription,
      });
      alert(response.data.message);
      setUser(prev => ({ ...prev, role: "Vendor" }));
      navigate("/ecommerce/profile");
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen py-10 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Become a Vendor
          </h2>
          <p className="text-sm text-blue-600 font-semibold">
            Please ensure you supply only{" "}
            <span className="underline">correct</span> information.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Business Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Business Name
            </label>
            <input
              onChange={(e) => setBusinessName(e.target.value)}
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
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              onChange={(e) => setAddress(e.target.value)}
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
              onChange={(e) => setStoreDescription(e.target.value)}
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
            disabled={loading}
            className={`w-full text-white font-semibold py-2.5 rounded-lg transition 
            ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            {loading ? "Registering..." : "Register store"}
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
