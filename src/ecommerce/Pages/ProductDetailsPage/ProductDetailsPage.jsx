import React, { useEffect, useState } from "react";
import { Minus, Plus, ShoppingCart, CreditCard } from "lucide-react";
import { Link, useParams } from "react-router";
import { useCart } from "../../Contexts/CartContext"; 
import axios from "axios";
import { baseUrl } from "../../baseUrl";

const ProductDetailsPage = () => {
  const { addToCart } = useCart(); 
  const [product, setProduct] = useState({})
  const {id} = useParams();

  const getProduct = async () => {
    try {
      const response = await axios.get(`${baseUrl}products/${id}`)
      console.log(response.data)
      setProduct(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  console.log(product)

  const [selectedImg, setSelectedImg] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
  if (product.imgUrl && product.imgUrl.length > 0) {
    setSelectedImg(product.imgUrl[0]);
  }
}, [product]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // ✅ pass quantity and product details
    alert(`${product.name} added to cart`)
  };

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section: Image Gallery */}
        <div className="flex-1">
          <div className="relative bg-white rounded-lg shadow-sm p-4">
            <img
              src={selectedImg}
              alt={product.name}
              className="w-full h-[400px] object-contain rounded-lg"
            />
          </div>

          {/* Thumbnail images */}
          <div className="flex gap-3 mt-4">
            {product.imgUrl?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumbnail-${i}`}
                onClick={() => setSelectedImg(img)}
                className={`w-20 h-20 object-contain border rounded-md cursor-pointer ${
                  selectedImg === img ? "border-blue-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Info */}
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
            Vendor: <Link className="text-customBlue">{product.vendor.businessName}</Link>
          </p>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2">About product</h3>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {/* Quantity + Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <p className="font-medium">Quantity</p>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 hover:text-black"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:text-black"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Buy and Add to Cart Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-customGreen text-white font-semibold rounded-full hover:bg-customGreen/70 transition">
              <CreditCard className="h-5 w-5" />
              Buy Now
            </button> */}

            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-customBlue text-white font-semibold rounded-full hover:bg-blue-800 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
