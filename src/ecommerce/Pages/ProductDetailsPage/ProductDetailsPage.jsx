import React, { useEffect, useState } from "react";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router";
import { useCart } from "../../Contexts/CartContext";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { useUser } from "../../Contexts/UserContext";
import ProductRatings from "../../Components/ProductRatings/ProductRatings";

const ProductDetailsPage = () => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState({});
  const [selectedImg, setSelectedImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [ratings, setRatings] = useState([])

  const { id } = useParams();
  const { api } = useUser();
  const navigate = useNavigate();

  // Bookmark state
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState(null);

  // Fetch Single Product
  const getProduct = async () => {
    try {
      const response = await axios.get(`${baseUrl}products/${id}`);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch User Bookmarks
  const getFavoriteProduct = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return; // ignore checking if not logged in

      const response = await api.get(`${baseUrl}bookmark`);
      const bookmarks = response.data;

      // Check if this product is bookmarked
      const found = bookmarks.find((b) => b.productId === id);

      if (found) {
        setIsBookmarked(true);
        setBookmarkId(found._id);
      } else {
        setIsBookmarked(false);
        setBookmarkId(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Add Bookmark
  const favoriteProduct = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/ecommerce/login");
        return;
      }

      const response = await api.post(`${baseUrl}bookmark/${id}`);
      alert(response.data.message);

      // Update state to show filled heart
      setIsBookmarked(true);
      setBookmarkId(response.data.bookmark?._id);
    } catch (err) {
      console.log(err);
    }
  };

  // Remove Bookmark
  const removeFavorite = async () => {
    try {
      await api.delete(`${baseUrl}bookmark/${id}`);
      alert("Removed from bookmarks");

      // Switch back to hollow heart
      setIsBookmarked(false);
      setBookmarkId(null);
    } catch (err) {
      console.log(err);
    }
  };

  // get ratings 
  const getRatings = async () => {
    try {
      const response = await axios.get(`${baseUrl}rating/${id}`)
      console.log(response.data)
      setRatings(response.data.ratings)
    } catch (err) {
      console.log(err)
    }
  }

  // On Component Mount
  useEffect(() => {
    getProduct();
    getFavoriteProduct();
    getRatings()
  }, []);

  // Update selected image when product loads
  useEffect(() => {
    if (product.imgUrl && product.imgUrl.length > 0) {
      setSelectedImg(product.imgUrl[0]);
    }
  }, [product]);

  // Add to Cart
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert(`${product.name} added to cart`);
  };

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="relative bg-white rounded-lg shadow-sm p-4">
            <img
              src={selectedImg}
              alt={product.name}
              className="w-full h-[400px] object-contain rounded-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {product.imgUrl?.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImg(img)}
                className={`w-20 h-20 object-contain border rounded-md cursor-pointer ${
                  selectedImg === img ? "border-blue-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
          <p className="uppercase text-sm text-gray-500 tracking-wide">
            {product.category}
          </p>

          <h1 className="text-3xl font-semibold mt-2">{product.name}</h1>

          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">
              ₦{product.price?.toLocaleString()}
            </span>
          </div>

          <p className="mt-4 text-sm">
            Vendor:{" "}
            <Link className="text-customBlue">
              {product.vendor?.businessName || "N/A"}
            </Link>
          </p>

          <div className="flex items-center gap-2 mt-5 cursor-pointer w-fit">
            {isBookmarked ? (
              <>
                <Heart
                  onClick={removeFavorite}
                  className="text-red-500"
                  fill="red"
                  size={22}
                />
                <span
                  onClick={removeFavorite}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove from favorites
                </span>
              </>
            ) : (
              <>
                <Heart
                  onClick={favoriteProduct}
                  className="text-gray-500"
                  size={22}
                />
                <span
                  onClick={favoriteProduct}
                  className="text-sm text-gray-700 hover:underline"
                >
                  Add to favorites
                </span>
              </>
            )}
          </div>

          {/* About Product */}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2">About product</h3>
            <p className="text-gray-600 text-sm whitespace-pre-line">
              {product.desc}
            </p>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <p className="font-medium">Quantity</p>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-customBlue text-white rounded-full"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>

      </div>
        {/* ratings  */}
        {ratings && (
        <div className="mt-20">
          <ProductRatings ratings = {ratings}/>
        </div>
        )}
    </section>
  );
};

export default ProductDetailsPage;
