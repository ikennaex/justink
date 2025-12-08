import React, { useState } from "react";
import { baseUrl } from "../../baseUrl";
import axios from "axios";
import Loader from "../../../Loaders/Loader";

const BecomeARider = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    location: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getCurrentLocation = () => {
    setLocationLoading(true);

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      setLocationLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const coordinates = `${latitude},${longitude}`;

        try {
          // Reverse geocoding using OpenStreetMap Nominatim API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();

          // Set the display name for user to see
          const displayName = data.display_name || coordinates;
          setLocationName(displayName);

          // Set coordinates for backend
          setFormData((prev) => ({
            ...prev,
            location: coordinates,
          }));

          setLocationLoading(false);
        } catch (error) {
          console.error("Error fetching location name:", error);
          setLocationName(coordinates);
          setFormData((prev) => ({
            ...prev,
            location: coordinates,
          }));
          setLocationLoading(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert(
          "Unable to retrieve your location. Please check your permissions."
        );
        setLocationLoading(false);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post(`${baseUrl}logistics/becomearider`, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        password: formData.password,
      });
      console.log(response.data);
      alert("Application submitted successfully.");
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
    console.log("Rider application submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      location: "",
    });
    setLocationName("");
  };


  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Become a Rider
          </h1>
          <p className="text-gray-600">
            Join our team and start delivering today
          </p>
        </div>

        <div className="bg-white border-2 border-gray-100 rounded-lg shadow-lg p-8">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                placeholder="+234 800 000 0000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={locationName || formData.location}
                    readOnly
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                    placeholder="Use current location"
                    required
                  />
                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    disabled={locationLoading}
                    className="px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {locationLoading ? "Loading..." : "📍 Current"}
                  </button>
                </div>
                {formData.location && (
                  <p className="text-xs text-gray-500">
                    Coordinates: {formData.location}
                  </p>
                )}
              </div>
            </div>

            <button
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid || submitting}
          className={`w-full p-3 text-white rounded-md transition ${
            isFormValid && !submitting
              ? "bg-amber-600 hover:bg-amber-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            className="font-medium cursor-pointer"
            style={{ color: "#D97706" }}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default BecomeARider;
