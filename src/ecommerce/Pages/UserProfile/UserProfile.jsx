import React, { useEffect, useState } from "react";
import { Edit3, PackagePlus, Mail, Phone, MapPin } from "lucide-react";
import { useUser } from "../../Contexts/UserContext";
import { Link } from "react-router";
import UserOrders from "../../Contexts/UserOrders";
import EcomVendorProducts from "../../Components/Vendor/EcomVendorProducts";
import { baseUrl } from "../../baseUrl";
import Loader from "../../../Loaders/Loader";

const UserProfile = () => {
  const { user, api } = useUser();

  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loadingFav, setLoadingFav] = useState(true);
  const [loading, setLoading] = useState(false)

  // Fetch bookmarked product IDs + full products
  const getFavoriteProduct = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoadingFav(false);
        return;
      }

      const response = await api.get(`${baseUrl}bookmark`);
      const bookmarks = response.data; // [{ productId: "123" }]

      if (!Array.isArray(bookmarks) || bookmarks.length === 0) {
        setFavoriteProducts([]);
        setLoadingFav(false);
        return;
      }

      // Fetch each product
      const products = await Promise.all(
        bookmarks.map(async (bm) => {
          try {
            const res = await api.get(`${baseUrl}products/${bm.productId}`);
            return res.data;
          } catch {
            return null;
          }
        })
      );

      setFavoriteProducts(products.filter((p) => p !== null));
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingFav(false);
      setLoading(false)
    }
  };

  useEffect(() => {
    getFavoriteProduct();
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <section className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* PROFILE INFO */}
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-md p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={user?.profileImage || "https://avatar.iran.liara.run/public/34"}
            alt="User avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
          />

          <div className="text-center sm:text-left flex-1">
            <h2 className="text-2xl font-semibold">{user?.fullName}</h2>
            <p className="capitalize text-gray-500">{user?.role}</p>

            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <button className="flex items-center gap-1 px-3 py-2 text-sm bg-indigo-100 text-indigo-700 rounded-md">
                <Edit3 size={16} />
                Edit Profile
              </button>

              {user?.role === "Vendor" && (
                <Link to={"/ecommerce/new-product"}>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm bg-green-100 text-green-700 rounded-md">
                    <PackagePlus size={16} />
                    Post a Product
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <hr className="my-6" />

        {/* USER DETAILS */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-indigo-500" />
            <span>{user?.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={18} className="text-indigo-500" />
            <span>{user?.phoneNumber || "+234 000 0000 000"}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-indigo-500" />
            <span>{user?.address || "Lagos, Nigeria"}</span>
          </div>
        </div>
      </div>

      {/* FAVORITES SECTION */}
      <div className="w-full max-w-3xl mt-10">
        <h2 className="text-xl font-semibold mb-4">Your Favorites</h2>

        {loadingFav ? (
          <p className="text-gray-500">Loading favorites...</p>
        ) : favoriteProducts.length === 0 ? (
          <p className="text-gray-500">You have no favorite products.</p>
        ) : (
          <div className="space-y-3">
            {favoriteProducts.map((product) => (
              <Link
                key={product.id}
                to={`/ecommerce/product/${product._id}`}
                className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800">{product.name}</p>

                <p className="text-indigo-600 font-bold">
                  ₦{product.price?.toLocaleString()}
                </p>

                <p className="text-sm text-gray-500">
                  Vendor: {product.vendor?.businessName || "N/A"}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {user?.role === "Vendor" && (
        <div className="w-full max-w-3xl mt-10">
          <EcomVendorProducts />
        </div>
      )}

      <div className="w-full max-w-3xl mt-10">
        <UserOrders />
      </div>
    </section>
  );
};

export default UserProfile;
