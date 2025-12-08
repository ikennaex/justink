import React, { useState } from "react";
import { Search, Package, MapPin, CheckCircle, Truck } from "lucide-react";
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
      setPackageData(response.data);
    } catch (err) {
      console.error(err);
      setPackageData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative text-white"
      style={{
        background: "linear-gradient(135deg, #33751D, #1f4e12)",
      }}
    >
      {/* Soft Glow Background */}
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

      {/* Tracking Box */}
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

      {/* Tracking Results */}
      {packageData && (
        <div className="w-full max-w-2xl bg-white text-gray-900 rounded-2xl shadow-2xl p-8 mt-12 relative z-20 animate-fadeIn space-y-10">
          {/* Tracking Header */}
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

            {/* Timeline */}
            <div className="space-y-6 mt-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#33751D] rounded-full flex items-center justify-center text-white">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Package Registered</h4>
                  <p className="text-gray-600 text-sm">
                    Package from {packageData.sender.fullName} has been registered at our facility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#33751D] rounded-full flex items-center justify-center text-white animate-pulse">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">In Transit</h4>
                  <p className="text-gray-600 text-sm">
                    Pickup from {packageData.pickup.pickupAddress} on {new Date(packageData.pickup.pickupDate).toLocaleDateString()}.
                  </p>
                </div>
              </div>
            </div>
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
                  <p className="text-gray-700">{packageData.sender.fullName} - {packageData.sender.address}</p>
                </div>
                <div>
                  <p className="font-semibold">Receiver</p>
                  <p className="text-gray-700">{packageData.receiver.fullName} - {packageData.receiver.address}</p>
                </div>
                <div>
                  <p className="font-semibold">Item Description</p>
                  <p className="text-gray-700">{packageData.package?.description || packageData.description}</p>
                </div>
                <div>
                  <p className="font-semibold">Item Type</p>
                  <p className="text-gray-700">{packageData.package?.type || packageData.type}</p>
                </div>
                <div>
                  <p className="font-semibold">Weight</p>
                  <p className="text-gray-700">{packageData.package?.weight || packageData.weight} kg</p>
                </div>
                <div>
                  <p className="font-semibold">Pickup Type</p>
                  <p className="text-gray-700">{packageData.pickup.pickupType}</p>
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
