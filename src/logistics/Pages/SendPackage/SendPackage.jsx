import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../../ecommerce/baseUrl";
import TrackingModal from "../../Components/TrackingModal/TrackingModal";

const SendPackage = () => {
  const [showModal, setShowModal] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    packageName: "",
    packageDescription: "",
    packageWeight: "",
    packageCategory: "",
    isFragile: "No",
    pickUp: "pickup",
    pickUpAddress: "",
    senderName: "",
    senderPhone: "",
    senderEmail: "",
    senderAddress: "",
    senderCity: "",
    receiverName: "",
    receiverPhone: "",
    receiverEmail: "",
    receiverAddress: "",
    receiverCity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prev) => ({
          ...prev,
          pickUpAddress: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`, // Only coordinates as string
        }));
      },
      (err) => {
        alert("Unable to get your location. Please try again.");
        console.error(err);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      sender: {
        fullName: formData.senderName,
        phone: formData.senderPhone,
        email: formData.senderEmail,
        address: formData.senderAddress + ", " + formData.senderCity,
      },
      receiver: {
        fullName: formData.receiverName,
        phone: formData.receiverPhone,
        email: formData.receiverEmail,
        address: formData.receiverAddress + ", " + formData.receiverCity,
      },
      package: {
        type: formData.packageCategory,
        weight: Number(formData.packageWeight),
        description: formData.packageDescription,
        value: 0,
      },
      pickup: {
        pickupType: formData.pickUp,
        pickupAddress: formData.pickUpAddress, // Only coordinates string or typed address
        pickupDate: new Date(),
      },
    };

    try {
      const response = await axios.post(`${baseUrl}logistics/send-package`, payload);
      alert(response.data.message);
      setTrackingNumber(response.data.shipment.trackingNumber);
      setShowModal(true);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error sending package");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg space-y-6">
      {showModal && <TrackingModal trackingNumber={trackingNumber} showModal={showModal} />}

      <h2 className="text-2xl font-bold mb-6 text-center">Send a Package</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Package Details */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="text-xl font-semibold">Package Details</h3>
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
            <select
              name="pickUp"
              value={formData.pickUp}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="dropoff">Drop Off</option>
              <option value="pickup">Pick Up</option>
            </select>

            {formData.pickUp === "pickup" && (
              <div className="flex flex-col gap-2">
                <input
                  name="pickUpAddress"
                  placeholder="Enter Pick Up Address or use current location"
                  type="text"
                  onChange={handleChange}
                  value={formData.pickUpAddress}
                  required
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  type="button"
                  onClick={handleUseCurrentLocation}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
                >
                  Use Current Location
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Sender Information */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="text-xl font-semibold">Sender Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="senderName" placeholder="Full Name" value={formData.senderName} onChange={handleChange} required className="p-3 border rounded" />
            <input type="tel" name="senderPhone" placeholder="Phone Number" value={formData.senderPhone} onChange={handleChange} required className="p-3 border rounded" />
            <input type="email" name="senderEmail" placeholder="Email" value={formData.senderEmail} onChange={handleChange} required className="p-3 border rounded" />
            <input type="text" name="senderAddress" placeholder="Address" value={formData.senderAddress} onChange={handleChange} required className="p-3 border rounded" />
            <input type="text" name="senderCity" placeholder="City / State" value={formData.senderCity} onChange={handleChange} required className="p-3 border rounded" />
          </div>
        </section>

        {/* Receiver Information */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="text-xl font-semibold">Receiver Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="receiverName" placeholder="Full Name" value={formData.receiverName} onChange={handleChange} required className="p-3 border rounded" />
            <input type="tel" name="receiverPhone" placeholder="Phone Number" value={formData.receiverPhone} onChange={handleChange} required className="p-3 border rounded" />
            <input type="email" name="receiverEmail" placeholder="Email (optional)" value={formData.receiverEmail} onChange={handleChange} className="p-3 border rounded" />
            <input type="text" name="receiverAddress" placeholder="Address" value={formData.receiverAddress} onChange={handleChange} required className="p-3 border rounded" />
            <input type="text" name="receiverCity" placeholder="City / State" value={formData.receiverCity} onChange={handleChange} required className="p-3 border rounded" />
          </div>
        </section>

        <button type="submit" disabled={submitting} className="w-full bg-[#33751D] hover:bg-[#1e4d0f] text-white font-semibold py-3 rounded-lg shadow">
          {submitting ? "Submitting..." : "Send Package"}
        </button>
      </form>
    </div>
  );
};

export default SendPackage;
