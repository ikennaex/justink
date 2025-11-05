import React from "react";
import { Edit3, PackagePlus, User, Mail, Phone, MapPin } from "lucide-react";
import { useUser } from "../../Contexts/UserContext";
import { Link } from "react-router";


const UserProfile = () => {
    const {user} = useUser()
    console.log(user)
  return (
    <section className="w-full min-h-screen bg-gray-50 flex justify-center items-start py-10 px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-md p-8 relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={user?.profileImage || "https://avatar.iran.liara.run/public/34"}
            alt="User avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
          />

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user?.fullName || "John Doe"}
            </h2>
            <p className="text-gray-500 capitalize">{user?.role || "user"}</p>
            <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
              <button className="flex items-center gap-1 px-3 py-2 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition">
                <Edit3 size={16} />
                Edit Profile
              </button>

              {/* Show "Post a Product" if user.role === "vendor" */}
              {user?.role === "Vendor" && (
                <Link to={"/ecommerce/new-product"}>
                <button className="flex items-center gap-1 px-3 py-2 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition">
                  <PackagePlus size={16} />
                  Post a Product
                </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* User Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={18} className="text-indigo-500" />
            <span>{user?.email || "user@email.com"}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Phone size={18} className="text-indigo-500" />
            <span>{user?.phoneNumber || "+234 000 0000 000"}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MapPin size={18} className="text-indigo-500" />
            <span>{user?.address || "Lagos, Nigeria"}</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{user?.posts || 0}</p>
            <p className="text-sm text-gray-500">Products</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{user?.followers || 0}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{user?.following || 0}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
