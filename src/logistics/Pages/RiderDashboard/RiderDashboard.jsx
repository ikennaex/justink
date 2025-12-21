import React, { useEffect, useState } from "react";
import { useRiderAuth } from "../../../Contexts/RiderContext";
import { useNavigate } from "react-router";
import { formatDistanceToNow } from "date-fns";
import { nav } from "framer-motion/client";

export default function RiderDashboard() {
  const navigate = useNavigate();

  const [availableOrders, setAvailableOrders] = useState([]);

  const [assignedOrders, setAssignedOrders] = useState([]);

  const { rider, isAuthenticated, api } = useRiderAuth();

  const [openOrderId, setOpenOrderId] = useState(null);

  const toggleDetails = (orderId) => {
    setOpenOrderId((prev) => (prev === orderId ? null : orderId));
  };

  const fetchAvailableOrders = async () => {
    try {
      const res = await api.get("/logistics/available-orders");
      console.log(res);
      setAvailableOrders(res.data.orders);
    } catch (err) {
      console.error("Error fetching available orders:", err);
    }
  };

  const assignOrder = async (orderId) => {
    try {
      const res = await api.post(`/logistics/rider/accept-orders/${orderId}`);
      console.log(res);
      alert(res.data.message);
      // Refresh orders
      fetchAvailableOrders();
    } catch (err) {
      console.error("Error fetching assigned orders:", err);
    }
  };

  const getAssignedOrders = async () => {
    try {
      const res = await api.get("/logistics/rider/rider-orders");
      console.log(res);
      setAssignedOrders(res.data.orders);
    } catch (err) {
      console.error("Error fetching assigned orders:", err);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/logistics/login");
      return;
    }
    fetchAvailableOrders();
    getAssignedOrders();
  }, [isAuthenticated, navigate]);

  const STATUS_OPTIONS = [
    { label: "Assigned", value: "assigned" },
    { label: "Picked Up", value: "picked_up" },
    { label: "In Transit", value: "in_transit" },
    { label: "Delivered", value: "delivered" },
  ];

  const handleStatusChange = (orderId, newStatus) => {
    setAssignedOrders((prev) =>
      prev.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      await api.patch(`/logistics/orders/${orderId}`, {
        status,
      });

      alert("Order status updated successfully");
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Failed to update order status");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Rider Info */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome, {rider?.name || "Rider"}
            </h2>
            <p className="text-sm text-gray-500">{rider?.phone || "+234"}</p>
          </div>

          <span className="px-4 py-1 text-sm font-medium rounded-full bg-green-600 text-white">
            Active
          </span>
        </div>

        {/* Available Orders */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Available Orders Near You
            </h3>
            <span className="text-sm text-gray-500">
              {availableOrders.length} available
            </span>
          </div>

          <div className="space-y-4">
            {availableOrders.map((order) => {
              const isOpen = openOrderId === order._id;

              return (
                <div
                  key={order._id}
                  className="border border-gray-200 rounded-xl p-4 transition"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        #{order.trackingNumber}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {order.pickup.pickupAddress} → {order.receiver.address}
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 whitespace-nowrap">
                      {formatDistanceToNow(new Date(order.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => toggleDetails(order._id)}
                      className="text-sm text-green-700 font-medium hover:underline"
                    >
                      {isOpen ? "Hide details" : "View details"}
                    </button>

                    <button
                      onClick={() => assignOrder(order._id)}
                      className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
                    >
                      Accept
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {isOpen && (
                    <div className="mt-6 space-y-5 text-sm">
                      {/* Sender */}
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">
                          Sender
                        </p>
                        <p>{order.sender.fullName}</p>
                        <p className="text-gray-500">{order.sender.phone}</p>
                        <p className="text-gray-500">{order.sender.address}</p>
                      </div>

                      {/* Receiver */}
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">
                          Receiver
                        </p>
                        <p>{order.receiver.fullName}</p>
                        <p className="text-gray-500">{order.receiver.phone}</p>
                        <p className="text-gray-500">
                          {order.receiver.address}
                        </p>
                      </div>

                      {/* Package */}
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">
                          Package Details
                        </p>
                        <p>
                          <span className="text-gray-500">Type:</span>{" "}
                          {order.package.type}
                        </p>
                        <p>
                          <span className="text-gray-500">Weight:</span>{" "}
                          {order.package.weight}kg
                        </p>
                        {order.package.description && (
                          <p>
                            <span className="text-gray-500">Description:</span>{" "}
                            {order.package.description}
                          </p>
                        )}
                        {order.package.value && (
                          <p>
                            <span className="text-gray-500">
                              Declared Value:
                            </span>{" "}
                            ₦{order.package.value.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {availableOrders.length === 0 && (
              <p className="text-center text-sm text-gray-500 py-6">
                No available orders at the moment
              </p>
            )}
          </div>
        </div>

        {/* Assigned Orders */}
  <div className="space-y-4">
  {assignedOrders.map((order) => {
    const isOpen = openOrderId === order._id;

    return (
      <div
        key={order._id}
        className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-semibold text-gray-800">
              #{order.trackingNumber}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {order.pickup.pickupAddress} → {order.receiver.address}
            </p>

            <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full border border-orange-400 text-orange-600">
              {order.status}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleDetails(order._id)}
              className="text-sm text-green-700 font-medium hover:underline"
            >
              {isOpen ? "Hide details" : "View details"}
            </button>

            <select
              value={order.status}
              onChange={(e) =>
                handleStatusChange(order._id, e.target.value)
              }
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>

            <button
              onClick={() => updateOrderStatus(order._id, order.status)}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-green-700 text-white hover:bg-green-800 transition"
            >
              Update
            </button>
          </div>
        </div>

        {/* Expanded Details */}
        {isOpen && (
          <div className="mt-6 space-y-5 text-sm">
            {/* Sender */}
            <div>
              <p className="font-semibold text-gray-800 mb-1">Sender</p>
              <p>{order.sender.fullName}</p>
              <p className="text-gray-500">{order.sender.phone}</p>
              <p className="text-gray-500">{order.sender.address}</p>
            </div>

            {/* Receiver */}
            <div>
              <p className="font-semibold text-gray-800 mb-1">Receiver</p>
              <p>{order.receiver.fullName}</p>
              <p className="text-gray-500">{order.receiver.phone}</p>
              <p className="text-gray-500">{order.receiver.address}</p>
            </div>

            {/* Package */}
            <div>
              <p className="font-semibold text-gray-800 mb-1">
                Package Details
              </p>
              <p>
                <span className="text-gray-500">Type:</span>{" "}
                {order.package.type}
              </p>
              <p>
                <span className="text-gray-500">Weight:</span>{" "}
                {order.package.weight}kg
              </p>

              {order.package.description && (
                <p>
                  <span className="text-gray-500">Description:</span>{" "}
                  {order.package.description}
                </p>
              )}

              {order.package.value && (
                <p>
                  <span className="text-gray-500">Declared Value:</span>{" "}
                  ₦{order.package.value.toLocaleString()}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  })}

  {assignedOrders.length === 0 && (
    <p className="text-center text-sm text-gray-500 py-6">
      No assigned orders yet
    </p>
  )}
</div>

      </div>
    </div>
  );
}
