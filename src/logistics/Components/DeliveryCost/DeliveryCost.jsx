import React, { useState } from "react";

const DeliveryCost = () => {
  const [distance, setDistance] = useState("");
  const [destination, setDestination] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [fragile, setFragile] = useState(false);
  const [express, setExpress] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [packaging, setPackaging] = useState(false);

  // Basic Pricing Logic
  const calculatePrice = () => {
    let price = 0;

    // Base price based on distance
    const distanceRates = {
      short: 5,
      medium: 10,
      long: 20,
    };

    if (distance) price += distanceRates[distance];

    // Weight multiplier
    price += weight * 0.5;

    // Volume multiplier
    price += (width * height) / 2000;

    // Fragile handling
    if (fragile) price += 7;

    // Add-ons
    if (express) price += 12;
    if (insurance) price += 5;
    if (packaging) price += 3;

    return price.toFixed(3);
  };

  const estimatedPrice = calculatePrice();

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h4 className="text-sm tracking-wide text-orange-500 font-semibold mb-1">
          TOTAL DELIVERY COST
        </h4>
        <h2 className="text-4xl font-bold text-[#33751D]">
          Find out the approximate cost of delivery of your shipments
        </h2>
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">

        {/* Inputs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Distance */}
          <div>
            <label className="text-gray-700 font-medium">Distance</label>
            <select
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full mt-1 border rounded-lg p-3"
            >
              <option value="">Please select</option>
              <option value="short">Short (0–50km)</option>
              <option value="medium">Medium (50–200km)</option>
              <option value="long">Long (200km+)</option>
            </select>
          </div>

          {/* Destination */}
          <div>
            <label className="text-gray-700 font-medium">Destination</label>
            <input
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full mt-1 border rounded-lg p-3"
            />
          </div>

          {/* Width */}
          <div>
            <label className="text-gray-700 font-medium">Width (cm)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(parseFloat(e.target.value))}
              className="w-full mt-1 border rounded-lg p-3"
            />
          </div>

          {/* Height */}
          <div>
            <label className="text-gray-700 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              className="w-full mt-1 border rounded-lg p-3"
            />
          </div>
        </div>

        {/* Weight + Fragile */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Weight */}
          <div>
            <label className="text-gray-700 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full mt-1 border rounded-lg p-3"
            />
          </div>

          {/* Fragile */}
          <div>
            <label className="text-gray-700 font-medium">Fragile</label>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fragile"
                  checked={fragile === true}
                  onChange={() => setFragile(true)}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fragile"
                  checked={fragile === false}
                  onChange={() => setFragile(false)}
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Extra Options */}
        <div className="flex flex-wrap gap-6 mt-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={express}
              onChange={() => setExpress(!express)}
            />
            Express Delivery
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={insurance}
              onChange={() => setInsurance(!insurance)}
            />
            Insurance
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={packaging}
              onChange={() => setPackaging(!packaging)}
            />
            Packaging
          </label>
        </div>

        {/* Estimated Price */}
        <div className="mt-10 border-t pt-6 flex justify-between items-center">
          <p className="text-gray-700 font-semibold text-lg">Estimated Price:</p>
          <p className="text-orange-500 text-3xl font-bold">
            ₦{estimatedPrice}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryCost;
