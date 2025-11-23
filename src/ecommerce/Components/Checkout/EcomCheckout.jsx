import React, { useState } from "react";
import { useUser } from "../../Contexts/UserContext";
import { useNavigate } from "react-router";
import { TbCurrencyNaira } from "react-icons/tb";
import PaystackPop from "@paystack/inline-js";
import axios from "axios";
import { baseUrl } from "../../baseUrl";

const EcomCheckout = ({ totalPrice, cartItems }) => {
  console.log(cartItems);
  const { user,api  } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  // Paystack Payment

  const handlePayment = () => {
    setLoading(true);
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: paystackPublicKey,
      amount: totalPrice * 100,
      email: user.email,
      name: user.fullName,
      onSuccess(transaction) {
        api
          .post(`${baseUrl}verify-payment`, { reference: transaction.reference, cartItems })
          .then(() => {
            navigate(`/ecommerce/profile`);
          });
        console.log(transaction);
      },
      onCancel() {
        setLoading(false);
        alert("Payment Cancelled");
    },
    
});
  };

  return (
    <button
    disabled={loading}
      onClick={handlePayment}
      className="w-full h-12 rounded-xl text-white bg-customBlue flex items-center justify-center gap-3 cursor-pointer"
    >
      {
        !loading ? (
          <>
            <TbCurrencyNaira size={25} />
            Pay with Paystack
          </>
        ) : (
          <p>Processing...</p>
        )
        // <Loader2/>
      }
    </button>
  );
};

export default EcomCheckout;
