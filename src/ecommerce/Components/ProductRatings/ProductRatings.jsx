import React from "react";

const ProductRatings = ({ ratings }) => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="font-bold">What people say about this product</h1>
      {ratings.map((rating) => (
        <div
          key={rating._id}
          className="bg-slate-100 rounded-xl shadow-sm p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-sm">{rating.userId.fullName}</h2>
            <p className="text-sm text-gray-500 font-semibold">
              Rating: {rating.rating}/5
            </p>
            <p className="text-sm text-gray-500">
              {rating.review}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductRatings;
