import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen py-16 px-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section - Info */}
        <div className="bg-gradient-to-br from-blue-700 to-green-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-100 mb-8">
            We’re always here to help! Reach out for any inquiries, feedback, or
            partnership opportunities.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <span>support@justlinklogistics.com.ng</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <span>+234-816-854-6166, +234-913-328-6601</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <span>16 Femidaramola Street Cele Egbe bus stop Lagos Nigeria</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a message
          </h3>
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
