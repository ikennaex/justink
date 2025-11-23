import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useUser } from "../../Contexts/UserContext";
import { baseUrl } from "../../baseUrl";

const EcomAuthPage = ({ showModal, setShowModal }) => {
  const [auth, setAuth] = useState("Login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { api, setUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post(`${baseUrl}auth/login`, {
        email,
        password,
      });
      console.log(response.data);
      setUser(response.data.user);
      setAccessToken(response.data.accessToken);
      // setRefreshToken(response.data.refreshToken);
      alert(response.data.message);
      navigate("/ecommerce");
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null; // hide modal when closed

  return (
    // Overlay container
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      {/* Auth Box */}
      <div className="relative w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          ×
        </button>

        {auth === "Login" && (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Login to your account
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <button
              disabled={loading}
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition"
              >
                {loading ? "Processing..." : "Sign In"}
              </button>
            </form>

            {/* Footer */}
            <p
              onClick={() => setAuth("Register")}
              className="text-center text-sm text-gray-600 mt-6 cursor-pointer"
            >
              Don’t have an account?{" "}
              <Link className="text-blue-700 font-semibold hover:underline">
                Register
              </Link>
            </p>
          </>
        )}

        {auth === "Register" && (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Create Your Account
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Join JustLink and start shopping smarter today.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition"
              >
                Sign Up
              </button>
            </form>

            {/* Footer */}
            <p
              onClick={() => setAuth("Login")}
              className="text-center text-sm text-gray-600 mt-6 cursor-pointer"
            >
              Already have an account?{" "}
              <Link className="text-blue-700 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EcomAuthPage;
