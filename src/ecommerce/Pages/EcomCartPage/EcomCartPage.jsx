import React, { useState } from "react";
import { useCart } from "../../Contexts/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import EcomAuthPage from "../EcomAuthPage/EcomAuthPage";

const EcomCartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <EcomAuthPage showModal = {showModal} setShowModal = {setShowModal} />
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-4 border-b border-gray-200 pb-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">
                      ₦{item.price.toLocaleString()}
                    </p>

                    <div className="flex items-center mt-2 gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="p-1 border rounded hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="text-lg font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
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
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1 mt-2"
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary Section */}
            <div className="bg-gray-100 rounded-2xl p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Shipping</span>
                <span className="text-green-600 font-medium"></span>
              </div>

              <div className="border-t border-gray-300 my-4"></div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>

              <button
                onClick={() => setShowModal(true)}
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
        )}
      </div>
    </div>
  );
};

export default EcomCartPage;
