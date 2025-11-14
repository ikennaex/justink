import React, { useState } from "react";
import { Search, Package, MapPin, CheckCircle, Truck } from "lucide-react";

const TrackHome = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleTrack = () => {
    if (trackingCode.trim() === "") return;
    setShowResult(true);
  };

  // Fake demo package data
  const packageInfo = {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e0c?auto=format&fit=crop&w=800&q=80",
    weight: "2.4 kg",
    dimensions: "32 x 20 x 14 cm",
    type: "Electronics",
    origin: "Lagos Warehouse",
    destination: "Abuja City Center",
    estimated: "Feb 18, 2025",
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
          {/* Input */}
          <input
            type="text"
            placeholder="Enter your tracking code..."
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="flex-1 w-full px-4 py-4 rounded-xl text-gray-900 focus:outline-none text-lg bg-white"
          />

          {/* Responsive Button */}
          <button
            onClick={handleTrack}
            className="w-full md:w-auto bg-[#33751D] hover:bg-[#285a16] active:scale-95 transition-all text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-lg shadow-lg"
          >
            <Search size={20} />
            Track
          </button>
        </div>

        <p className="text-sm text-gray-200 mt-3 text-center">
          Example: FCN-2024-9383-XLD
        </p>
      </div>

      {/* Tracking Results */}
      {showResult && (
        <div className="w-full max-w-2xl bg-white text-gray-900 rounded-2xl shadow-2xl p-8 mt-12 relative z-20 animate-fadeIn space-y-10">

          {/* Tracking Header */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#33751D] flex items-center gap-2">
              <Package /> Shipment Progress
            </h3>

            <div className="mb-6">
              <p className="text-md">
                <strong>Tracking Code:</strong> {trackingCode}
              </p>
              <p>
                <strong>Status:</strong> In Transit
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6 mt-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#33751D] rounded-full flex items-center justify-center text-white">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Package Received</h4>
                  <p className="text-gray-600 text-sm">
                    Your package has been registered at our facility.
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
                    Left Lagos Hub — currently on the way.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 opacity-50">
                <div className="w-6 h-6 border-2 border-[#33751D] rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Out for Delivery</h4>
                  <p className="text-gray-600 text-sm">
                    Awaiting arrival at the destination city.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 opacity-50">
                <div className="w-6 h-6 border-2 border-[#33751D] rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Delivered</h4>
                  <p className="text-gray-600 text-sm">
                    Will be marked completed once received.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PACKAGE INFO CARD */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
            <h3 className="text-xl font-bold text-[#33751D] mb-4 flex items-center gap-2">
              <Truck size={20} /> Package Information
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="w-full md:w-40 h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={packageInfo.image}
                  alt="Package"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Weight</p>
                  <p className="text-gray-700">{packageInfo.weight}</p>
                </div>
                <div>
                  <p className="font-semibold">Dimensions</p>
                  <p className="text-gray-700">{packageInfo.dimensions}</p>
                </div>
                <div>
                  <p className="font-semibold">Category</p>
                  <p className="text-gray-700">{packageInfo.type}</p>
                </div>
                <div>
                  <p className="font-semibold">Est. Delivery</p>
                  <p className="text-gray-700">{packageInfo.estimated}</p>
                </div>
                <div>
                  <p className="font-semibold">From</p>
                  <p className="text-gray-700">{packageInfo.origin}</p>
                </div>
                <div>
                  <p className="font-semibold">To</p>
                  <p className="text-gray-700">{packageInfo.destination}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-sm text-gray-500 border-t pt-4">
            *This is a demo. Connect your API for live tracking data.
          </div>
        </div>
      )}
    </section>
  );
};

export default TrackHome;
