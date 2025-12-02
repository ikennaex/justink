import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { baseUrl } from "../../baseUrl";
import { useUser } from "../../Contexts/UserContext";

const EcomLoginPage = () => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
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
              value={email}
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
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition disabled:bg-customBlue/50"
          >
            {loading ? "Login in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Dont have an account?{" "}
          <Link
            to="/ecommerce/register"
            className="text-blue-700 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EcomLoginPage;
