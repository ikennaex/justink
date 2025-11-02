import React from "react";
import {
  beauty,
  electronics,
  fashion,
  pets,
  sports,
  toys,
} from "../../../imports";
import Products from "../../Components/Products/Products";
import Herobanner from "../../Components/Herobanner/Herobanner";
import { ArrowRightIcon } from "lucide-react";

const EcomHomepage = () => {
  const categories = [
    { name: "Electronics", img: electronics },
    { name: "Fashion", img: fashion },
    { name: "Beauty", img: beauty },
    { name: "Baby, Kids & Toys", img: toys },
    { name: "Sports", img: sports },
    { name: "Pets & Animals", img: pets },
  ];

  return (
    <div className="bg-gray-50">
      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="py-5">
          <Herobanner />
        </div>
        <h3 className="text-lg font-semibold mb-3">
          Explore popular categories
        </h3>
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[100px] bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img src={cat.img} alt={cat.name} className="w-14 h-14" />
              <p className="text-sm mt-2 font-medium text-gray-700">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Selling Items */}
      <div className="pb-12">
        <Products />

        <div className="flex items-center justify-center mt-10">
          <button className="bg-customBlue p-3 rounded-xl text-white flex gap-2">
            All Products <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EcomHomepage;
