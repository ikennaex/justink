import React, { useEffect, useState } from "react";

import { Link } from "react-router";
import { ShoppingCart, PackageCheck } from "lucide-react";
import { useUser } from "./UserContext";
import { baseUrl } from "../baseUrl";

const UserOrders = () => {
  const { user, api } = useUser();
  const [orders, setOrders] = useState([]);

  const getUserOrders = async () => {
    try {
      const response = await api.get(`${baseUrl}user-orders`);
      setOrders(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your Orders</h1>

        {orders.length === 0 ? (
          <p className="text-gray-500 text-center py-20">
            You haven’t placed any orders yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-xl shadow-sm p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                {/* Left: Order info */}
                <div className="flex-1 flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                    <img
                      src={order.products[0]?.productId.imgUrl[0] || "https://via.placeholder.com/150"}
                      alt={order.products[0]?.productId.name || "Product"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {order.products[0]?.productId.name || "Product Name"}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Quantity: {order.products[0]?.quantity || 1}
                    </p>
                    <p className="text-sm text-gray-500">
                      Total: ₦
                      {order.products
                        .reduce((sum, item) => sum + item.price * item.quantity, 0)
                        .toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Right: Status + Actions */}
                <div className="flex flex-col md:items-end gap-2">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {order.status}
                  </span>

                  <Link
                    to={`/orders/${order._id}`}
                    className="text-sm text-indigo-600 hover:underline flex items-center gap-1"
                  >
                    <PackageCheck size={16} />
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserOrders;
