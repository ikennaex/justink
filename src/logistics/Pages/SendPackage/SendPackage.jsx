import React, { useState } from 'react';

const SendPackage = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    senderEmail: '',
    senderAddress: '',
    senderCity: '',
    receiverName: '',
    receiverPhone: '',
    receiverEmail: '',
    receiverAddress: '',
    receiverCity: '',
    packageName: '',
    packageDescription: '',
    packageWeight: '',
    packageCategory: '',
    isFragile: 'No',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Send a Package</h2>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Sender Information */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Sender Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="senderName"
              placeholder="Full Name"
              value={formData.senderName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="senderPhone"
              placeholder="Phone Number"
              value={formData.senderPhone}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="senderEmail"
              placeholder="Email"
              value={formData.senderEmail}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="senderAddress"
              placeholder="Pickup Address"
              value={formData.senderAddress}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="senderCity"
              placeholder="City / State"
              value={formData.senderCity}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </section>

        {/* Receiver Information */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Receiver Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="receiverName"
              placeholder="Full Name"
              value={formData.receiverName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="tel"
              name="receiverPhone"
              placeholder="Phone Number"
              value={formData.receiverPhone}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="receiverEmail"
              placeholder="Email (optional)"
              value={formData.receiverEmail}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="receiverAddress"
              placeholder="Delivery Address"
              value={formData.receiverAddress}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="receiverCity"
              placeholder="City / State"
              value={formData.receiverCity}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </section>

        {/* Package Details */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Package Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="packageName"
              placeholder="Package Name / Title"
              value={formData.packageName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="packageDescription"
              placeholder="Package Description"
              value={formData.packageDescription}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 col-span-1 md:col-span-2"
            />
            <input
              type="number"
              name="packageWeight"
              placeholder="Weight (kg)"
              value={formData.packageWeight}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <select
              name="packageCategory"
              value={formData.packageCategory}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Category</option>
              <option value="Documents">Documents</option>
              <option value="Electronics">Electronics</option>
              <option value="Food & perishables">Food & perishables</option>
              <option value="Clothing">Clothing</option>
              <option value="Fragile items">Fragile items</option>
              <option value="Others">Others</option>
            </select>
            <select
              name="isFragile"
              value={formData.isFragile}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="No">Fragile: No</option>
              <option value="Yes">Fragile: Yes</option>
            </select>
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-[#33751D] hover:bg-[#1e4d0f] text-white font-semibold py-3 rounded-lg shadow"
        >
          Send Package
        </button>
      </form>
    </div>
  );
};

export default SendPackage;
