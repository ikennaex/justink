import React, { useState } from "react";
import { useCart } from "../../Contexts/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import EcomAuthPage from "../EcomAuthPage/EcomAuthPage";
import { useUser } from "../../Contexts/UserContext";
import EcomCheckout from "../../Components/Checkout/EcomCheckout";

const EcomCartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();
  const [showModal, setShowModal] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const { isAuthenticated } = useUser();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <EcomAuthPage showModal={showModal} setShowModal={setShowModal} />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* MAIN CONTENT */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-lg
           p-6 md:p-10">
            <h1 className="text-3xl font-bold text-customBlue mb-8">Your Cart</h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg mb-4">
                  Your cart is currently empty.
                </p>
                <a
                  href="/ecommerce"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                >
                  Continue Shopping
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row items-center gap-4 border-b border-gray-200 pb-6"
                  >
                    <img
                      src={item.imgUrl[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1 w-full">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-500">
                        ₦{item.price.toLocaleString()}
                      </p>

                      <div className="flex items-center mt-2 gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item._id, Math.max(1, item.quantity - 1))
                          }
                          className="p-1 border rounded hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="text-lg font-medium">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="p-1 border rounded hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <p className="text-lg font-semibold">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500 hover:text-red-700 flex items-center gap-1 mt-2"
                      >
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {checkout && (
            <div className="w-full flex justify-center py-10 bg-gray-50">
              <form className="bg-white shadow-md rounded-2xl p-6 w-full max-w-2xl space-y-5 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                  Delivery Information
                </h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Receiver's Name"
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-customBlue transition-all duration-200"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Receiver's Address"
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-customBlue transition-all duration-200"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Receiver's Phone Number"
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-customBlue transition-all duration-200"
                    required
                  />
                </div>

                {/* <button
                  type="submit"
                  className="w-full bg-customBlue text-white py-3 rounded-lg font-semibold hover:bg-customBlue/90 transition-all duration-200"
                >
                  Proceed to Payment
                </button> */}

                <EcomCheckout cartItems={cartItems} totalPrice = {totalPrice} />
              </form>
            </div>
          )}
        </div>

        {/* ORDER SUMMARY */}
        <div className="w-full lg:w-1/3 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>

            <button
              onClick={() =>
                !isAuthenticated ? setShowModal(true) : setCheckout(true)
              }
              className="w-full bg-blue-600 text-white py-3 rounded-full mt-6 hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full text-red-500 font-semibold mt-4 hover:underline"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcomCartPage;
