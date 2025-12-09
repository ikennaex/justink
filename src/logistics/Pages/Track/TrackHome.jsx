import React, { useState } from "react";
import {
  Search,
  Package,
  MapPin,
  CheckCircle,
  Truck,
  Clock,
} from "lucide-react";
import axios from "axios";
import { baseUrl } from "../../../ecommerce/baseUrl";

const TrackHome = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}logistics/track-package`, {
        trackingNumber: trackingCode,
      });
      console.log(response.data);
      setPackageData(response.data);
    } catch (err) {
      console.error(err);
      setPackageData(null);
    } finally {
      setLoading(false);
    }
  };

  // Dynamic Status Display
  const StatusCard = () => {
    const status = packageData?.status?.toLowerCase();

    const cardBase =
      "flex items-start gap-4 bg-gray-100 p-5 rounded-xl shadow-inner border-l-4";

    // PENDING
    if (status === "pending") {
      return (
        <div className={`${cardBase} border-yellow-500`}>
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white">
            <Clock size={20} />
          </div>
          <div>
            <h4 className="font-bold text-yellow-700 text-lg">Order Pending</h4>
            <p className="text-gray-700 text-sm">
              Your order has been created and is awaiting processing.
            </p>
          </div>
        </div>
      );
    }

    // PICKED UP
    if (status === "picked_up") {
      return (
        <div className={`${cardBase} border-blue-500`}>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <Package size={20} />
          </div>
          <div>
            <h4 className="font-bold text-blue-700 text-lg">
              Package Picked Up
            </h4>
            <p className="text-gray-700 text-sm">
              Your package has been picked up and registered.
            </p>
          </div>
        </div>
      );
    }

    // AT WAREHOUSE
    if (status === "at_warehouse") {
      return (
        <div className={`${cardBase} border-indigo-500`}>
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white">
            <Package size={20} />
          </div>
          <div>
            <h4 className="font-bold text-indigo-700 text-lg">At Warehouse</h4>
            <p className="text-gray-700 text-sm">
              Your package has arrived at our warehouse.
            </p>
          </div>
        </div>
      );
    }

    // OUT FOR DELIVERY
    if (status === "out_for_delivery") {
      return (
        <div className={`${cardBase} border-orange-500`}>
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
            <Truck size={20} />
          </div>
          <div>
            <h4 className="font-bold text-orange-700 text-lg">
              Out for Delivery
            </h4>
            <p className="text-gray-700 text-sm">
              Your package is on the way to the receiver.
            </p>
          </div>
        </div>
      );
    }

    // IN TRANSIT
    if (status === "in_transit") {
      return (
        <div className={`${cardBase} border-green-600`}>
          <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white animate-pulse">
            <Truck size={20} />
          </div>
          <div>
            <h4 className="font-bold text-green-700 text-lg">In Transit</h4>
            <p className="text-gray-700 text-sm">
              Your package is moving through our delivery network.
            </p>
          </div>
        </div>
      );
    }

    // CANCELLED
    if (status === "cancelled") {
      return (
        <div className={`${cardBase} border-red-600`}>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
            <XCircle size={20} />
          </div>
          <div>
            <h4 className="font-bold text-red-700 text-lg">Order Cancelled</h4>
            <p className="text-gray-700 text-sm">
              This shipment has been cancelled.
            </p>
          </div>
        </div>
      );
    }

    // DELIVERED
    if (status === "delivered") {
      return (
        <div className={`${cardBase} border-green-600`}>
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
            <CheckCircle size={20} />
          </div>
          <div>
            <h4 className="font-bold text-green-700 text-lg">Delivered</h4>
            <p className="text-gray-700 text-sm">
              Successfully delivered to {packageData.receiver.fullName}.
            </p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative text-white"
      style={{
        background: "linear-gradient(135deg, #33751D, #1f4e12)",
      }}
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="text-center max-w-2xl relative z-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Track Your Package
        </h1>
        <p className="text-gray-200 text-lg mb-10">
          Enter your tracking code to follow your shipment’s journey.
        </p>
      </div>

      {/* Track Form */}
      <div className="w-full max-w-2xl relative z-20">
        <div className="bg-white/15 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Enter your tracking code..."
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="flex-1 w-full px-4 py-4 rounded-xl text-gray-900 focus:outline-none text-lg bg-white"
          />
          <button
            onClick={handleTrack}
            className="w-full md:w-auto bg-[#33751D] hover:bg-[#285a16] active:scale-95 transition-all text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-lg shadow-lg"
          >
            <Search size={20} />
            {loading ? "Loading..." : "Track"}
          </button>
        </div>

        <p className="text-sm text-gray-200 mt-3 text-center">
          Example: JSL027097109
        </p>
      </div>

      {/* Tracking Result */}
      {packageData && (
        <div className="w-full max-w-2xl bg-white text-gray-900 rounded-2xl shadow-2xl p-8 mt-12 relative z-20 animate-fadeIn space-y-10">
          {/* Tracking Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#33751D] flex items-center gap-2">
              <Package /> Shipment Progress
            </h3>

            <div className="mb-6">
              <p className="text-md">
                <strong>Tracking Number:</strong> {packageData.trackingNumber}
              </p>
              <p>
                <strong>Status:</strong> {packageData.status}
              </p>
            </div>

            {/* Dynamic Status */}
            <StatusCard />
          </div>

          {/* Package Info */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
            <h3 className="text-xl font-bold text-[#33751D] mb-4 flex items-center gap-2">
              <Truck size={20} /> Package Information
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Sender</p>
                  <p className="text-gray-700">
                    {packageData.sender.fullName} - {packageData.sender.address}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Receiver</p>
                  <p className="text-gray-700">
                    {packageData.receiver.fullName} -{" "}
                    {packageData.receiver.address}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Item Description</p>
                  <p className="text-gray-700">
                    {packageData.package?.description ||
                      packageData.description}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Item Type</p>
                  <p className="text-gray-700">
                    {packageData.package?.type || packageData.type}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Weight</p>
                  <p className="text-gray-700">
                    {packageData.package?.weight || packageData.weight} kg
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Pickup Type</p>
                  <p className="text-gray-700">
                    {packageData.pickup.pickupType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrackHome;
