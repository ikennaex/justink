import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import { useNavigate } from "react-router";
import { useUser } from "../../../Contexts/UserContext";

const EcomNewProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    desc: "",
    price: "",
    imgs: [], // store multiple images
    category: "",
    location: "",
  });

  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, api } = useUser();
  console.log(user);

  // Handle input text changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle multiple image uploads
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, imgs: files });

    // Generate preview URLs
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(imagePreviews);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("desc", product.desc);
    formData.append("price", product.price.trim());
    formData.append("category", product.category);
    formData.append("location", product.location);

    // Append multiple images
    product.imgs.forEach((img) => {
      formData.append("imgs", img);
    });

    try {
      await api.post(`${baseUrl}vendor/new-product`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product Uploaded Successfully!");
      setProduct({
        name: "",
        desc: "",
        price: "",
        imgs: [],
        category: "",
        location: "",
      });
      setPreviews([]);
      navigate("/ecommerce/profile");
    } catch (err) {
      console.error(err);
      alert("Failed to upload product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.role !== "Vendor") {
      return navigate("/ecommerce");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add a New Product
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Upload your product details to showcase them on{" "}
          <span className="font-semibold text-blue-600">JustLink</span>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="e.g. Wireless Earbuds"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Description
            </label>
            <textarea
              name="desc"
              value={product.desc}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Briefly describe your product"
            />
          </div>

          {/* Price and Location */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₦)
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. 25000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                name="location"
                value={product.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. Lekki, Lagos"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select a Category</option>
              <option value="electronics">Electronics</option>
              <option value="phones-&-tablets">Phones & Tablets</option>
              <option value="home-appliances">Home Appliances</option>
              <option value="beauty">Beauty</option>
              <option value="fashion">Fashion</option>
              <option value="real-estate">Real Estate</option>
              <option value="health">Health</option>
              <option value="food-&-pastries">Food & Pastries</option>
              <option value="cars">Cars</option>
              <option value="skincare">Skincare</option>
            </select>
          </div>

          {/* Multiple Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {/* Preview Section */}
            {previews.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {previews.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`preview-${index}`}
                    className="w-full h-24 object-cover rounded-lg border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-customBlue text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
          >
            {loading ? "Uploading..." : "Upload Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EcomNewProduct;
