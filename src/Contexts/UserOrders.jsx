import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Star, PackageCheck } from "lucide-react";
import { useUser } from "./UserContext";
import { baseUrl } from "../baseUrl";

const UserOrders = () => {
  const { user, api } = useUser();
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ratingProductId, setRatingProductId] = useState(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [productRatings, setProductRatings] = useState({}); // store ratings by productId
  const [loadingRatings, setLoadingRatings] = useState(true); // Track loading state

  // Fetch user orders
  const getUserOrders = async () => {
    try {
      const response = await api.get(`${baseUrl}user-orders`);
      setOrders(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch ratings for each product
  const getProductRating = async (productId) => {
    try {
      const response = await api.get(`${baseUrl}rating/${productId}`);
      if (response.data && response.data.length > 0) {
        setProductRatings((prev) => ({ ...prev, [productId]: response.data[0].rating }));
      } else {
        setProductRatings((prev) => ({ ...prev, [productId]: null }));
      }
    } catch (err) {
      console.log(err);
      setProductRatings((prev) => ({ ...prev, [productId]: null }));
    }
  };

  // Fetch all ratings for products in orders
  const fetchAllRatings = async (orders) => {
    setLoadingRatings(true);
    const productIds = [];
    
    // Collect all unique product IDs
    orders.forEach((order) => {
      order.products.forEach((item) => {
        if (!productIds.includes(item.productId._id)) {
          productIds.push(item.productId._id);
        }
      });
    });

    // Fetch ratings for all products
    await Promise.all(productIds.map(id => getProductRating(id)));
    setLoadingRatings(false);
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      fetchAllRatings(orders);
    }
  }, [orders]);

  const submitRating = async () => {
    if (!ratingValue) {
      alert("Please select a rating");
      return;
    }

    try {
      const response = await api.post(`${baseUrl}rating/${ratingProductId}`, {
        rating: ratingValue,
        review: reviewText,
      });
      console.log(response.data.message);

      alert(response.data.message);
      setShowModal(false);
      setRatingValue(0);
      setReviewText("");
      
      // Refresh the rating for this specific product
      await getProductRating(ratingProductId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* RATING MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Rate Product</h2>

            {/* Stars */}
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <Star
                  key={num}
                  size={30}
                  onClick={() => setRatingValue(num)}
                  className={`cursor-pointer ${
                    ratingValue >= num ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill={ratingValue >= num ? "yellow" : "none"}
                />
              ))}
            </div>

            {/* Review Text */}
            <textarea
              placeholder="Write a short review (optional)"
              className="w-full border rounded-md p-3 text-sm h-24"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                onClick={submitRating}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ORDERS LIST */}
      <section className="w-full min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your Orders</h1>

          {orders.length === 0 ? (
            <p className="text-gray-500 text-center py-20">
              You haven't placed any orders yet.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="bg-white rounded-xl shadow-sm p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                >
                  <div className="flex-1 flex flex-col md:flex-row gap-4 items-start md:items-center">
                    {order.products.map((item) => (
                      <div key={item.productId._id} className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">{item.productId.name}</h2>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        <p className="text-sm text-gray-500">
                          Total: ₦{(item.price * item.quantity).toLocaleString()}
                        </p>

                        {loadingRatings ? (
                          <span className="text-gray-400 text-sm">Loading rating...</span>
                        ) : productRatings[item.productId._id] ? (
                          <span className="text-yellow-600 text-sm font-medium">
                            Rated: {"⭐".repeat(productRatings[item.productId._id])}
                          </span>
                        ) : (
                          <button
                            onClick={() => {
                              setRatingProductId(item.productId._id);
                              setShowModal(true);
                            }}
                            className="text-sm text-indigo-600 hover:underline mt-1"
                          >
                            ⭐ Rate Product
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

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
    </>
  );
};

export default UserOrders;