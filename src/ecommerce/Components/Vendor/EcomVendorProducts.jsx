import React, { useEffect, useState } from "react";
import { useUser } from "../../Contexts/UserContext";
import { Link } from "react-router";

const EcomVendorProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, api } = useUser();

  const fetchProducts = async () => {
    try {
      const response = await api.get(`vendor/products`);
      setProducts(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="w-full min-h-full bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Your Products
        </h1>

        {loading ? (
          <p className="text-gray-500 text-center py-20">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-500 text-center py-20">
            You haven’t added any products yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-sm p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                {/* Left: Product Info */}
                <div className="flex-1 flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                    <img
                      src={product.imgUrl[0] || "https://via.placeholder.com/150"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h2>

                    <p className="text-sm text-gray-500 truncate w-48 md:w-60">
                      {product.desc || "No description available"}
                    </p>

                    <p className="text-sm text-gray-700 font-medium">
                      ₦{Number(product.price).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Right: Meta Info */}
                <div className="flex flex-col md:items-end gap-2">
                  <span className="text-sm text-gray-500 flex gap-2">
                    <Link className="text-blue-600">Edit</Link>
                    <Link className="text-red-600">Delete</Link>
                  </span>
                  <span className="text-sm text-gray-500">
                    Category: {product.category || "Uncategorized"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EcomVendorProducts;
