import React from "react";
import { useNavigate } from "react-router-dom"; // if using react-router for navigation

const TrackingModal = ({ trackingNumber }) => {
  const navigate = useNavigate(); // only if using react-router

  const copyToClipboard = () => {
    navigator.clipboard.writeText(trackingNumber);
    alert("Tracking code copied!");
  };

  const trackPackage = () => {
    navigate(`/logistics/track/${trackingNumber}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Shipment Created Successfully
        </h2>
        <p className="text-gray-600 text-sm mb-5">
          Here's your tracking ID. Please screenshot or copy this code as it will help you track your package.
        </p>

        <div className="bg-gray-100 rounded-lg py-3 px-4 mb-5 font-mono text-gray-800 text-lg select-all">
          {trackingNumber}
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={copyToClipboard}
            className="bg-[#33751D] hover:bg-[#1e4d0f] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Copy Code
          </button>

          <button
            onClick={trackPackage}
            className="bg-[#1C64F2] hover:bg-[#1249b5] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Track Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;
