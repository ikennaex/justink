import React from "react";
import { Link } from "react-router";

const products = [
  {
    name: "Beats Studio Buds",
    price: "₦ 125,950",
    oldPrice: "₦ 135,950",
    img: "https://img.freepik.com/premium-photo/blue-iron-isolated-white-background_432238-67.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Sony PlayStation 5 Digital Edition",
    price: "₦ 745,750",
    oldPrice: "₦ 795,000",
    img: "https://img.freepik.com/premium-photo/blue-iron-isolated-white-background_432238-67.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Apple Airpods 3",
    price: "₦ 107,050",
    oldPrice: "₦ 117,050",
    img: "https://img.freepik.com/premium-photo/blue-iron-isolated-white-background_432238-67.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "iPhone 13 128GB",
    price: "₦ 2,217,950",
    oldPrice: "₦ 2,295,950",
    img: "https://img.freepik.com/premium-photo/blue-iron-isolated-white-background_432238-67.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Apple Airpods 3",
    price: "₦ 107,050",
    oldPrice: "₦ 117,050",
    img: "https://img.freepik.com/premium-photo/blue-iron-isolated-white-background_432238-67.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "iPhone 13 128GB",
    price: "₦ 2,217,950",
    oldPrice: "₦ 2,295,950",
    img: "https://img.freepik.com/premium-photo/blue-iron-isolated-white-background_432238-67.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Apple Airpods 3",
    price: "₦ 107,050",
    oldPrice: "₦ 117,050",
    img: "https://img.freepik.com/premium-photo/blue-iron-isolated-white-background_432238-67.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "iPhone 13 128GB",
    price: "₦ 2,217,950",
    oldPrice: "₦ 2,295,950",
    img: "https://img.freepik.com/premium-photo/blue-iron-isolated-white-background_432238-67.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_hybrid&w=740&q=80",
  },
];

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h3 className="text-lg font-semibold mb-3">Top selling items</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <Link to={"/ecommerce/product/d"}>
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-40 w-full object-contain"
              />
              <p className="mt-3 text-gray-800 font-medium text-sm">
                {product.name}
              </p>
              <p className="text-green-600 font-bold text-lg">
                {product.price}
              </p>
              <p className="text-gray-400 text-sm line-through">
                {product.oldPrice}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
