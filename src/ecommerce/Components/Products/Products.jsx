import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {baseUrl} from "../../baseUrl"
import axios from "axios";

const Products = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}products`)
      console.log(response.data)
      setProducts(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h3 className="text-lg font-semibold mb-3">Top selling items</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <Link to={`/ecommerce/product/${product._id}`}>
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.imgUrl[0]}
                alt={product.name}
                className="h-40 w-full object-contain"
              />
              <p className="mt-3 text-gray-800 font-medium text-sm">
                {product.name}
              </p>
              <p className="text-green-600 font-bold text-lg">
                ₦{product.price.toLocaleString()}
              </p>
              {/* <p className="text-gray-400 text-sm line-through">
                {product.oldPrice}
              </p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
