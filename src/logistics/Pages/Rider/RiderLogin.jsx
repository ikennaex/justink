import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import { useRiderAuth } from "../../../Contexts/RiderContext";
import { useNavigate } from "react-router";

const RiderLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginRider, isAuthenticated } = useRiderAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${baseUrl}logistics/rider-login`, {
        email,
        password,
      });
      console.log(response);
      loginRider(response.data.token, response.data.rider);
      alert(response.data.message);
      navigate("/logistics/rider-dashboard");
    } catch (err) {
      setLoading(true);
      console.log(err);
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/logistics/rider-dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Rider Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        <button
          disabled={loading}
          onClick={handleLogin}
          className="w-full py-2 rounded-lg text-white font-semibold"
          style={{ backgroundColor: "#D97706" }}
        >
          {loading ? "Processing..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4 cursor-pointer hover:underline">
          Forgot password?
        </p>
      </div>
    </div>
  );
};

export default RiderLogin;
