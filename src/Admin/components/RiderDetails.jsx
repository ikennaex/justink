import React from "react";

export default function RiderDetails({ rider }) {
  if (!rider) {
    return (
      <div className="p-6 text-center text-gray-500">
        Rider details not available
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Rider Details</h1>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-sm">Name</p>
          <p className="text-gray-800 font-medium">{rider.name}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="text-gray-800 font-medium">{rider.email}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Phone</p>
          <p className="text-gray-800 font-medium">{rider.phone}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Status</p>
          <p className="text-gray-800 font-medium">
            {rider.isActive ? "Active" : "Inactive"} /{" "}
            {rider.isAvailable ? "Available" : "Busy"}
          </p>
        </div>
      </div>

      {/* Location */}
      {rider.location?.coordinates && (
        <div>
          <p className="text-gray-500 text-sm">Location (Longitude, Latitude)</p>
          <p className="text-gray-800 font-medium">
            {rider.location.coordinates[0]}, {rider.location.coordinates[1]}
          </p>
        </div>
      )}

      {/* Rider ID */}
      {rider.riderId?.url && (
        <div>
          <p className="text-gray-500 text-sm">Rider Identity</p>
          <img
            src={rider.riderId.url}
            alt="Rider ID"
            className="mt-2 w-48 h-auto border rounded"
          />
        </div>
      )}

      {/* Assigned Orders */}
      {rider.assignedOrders && rider.assignedOrders.length > 0 && (
        <div>
          <p className="text-gray-500 text-sm">Assigned Orders</p>
          <ul className="list-disc list-inside mt-2">
            {rider.assignedOrders.map((order) => (
              <li key={order._id} className="text-gray-800">
                {order.trackingNumber || order._id}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
