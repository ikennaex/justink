import { useEffect, useState } from "react";
import { useAdminAuth } from "../../Contexts/AdminContext";

export default function ApproveVendors() {
  const { api } = useAdminAuth();

  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPendingVendors = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/unapprovedvendors");
      console.log(res.data);
      setVendors(res.data.vendors);
    } catch (err) {
      console.error("Failed to fetch pending vendors:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (vendorId) => {
    try {
      await api.patch(`/admin/approvevendor/${vendorId}`);
      alert("Vendor approved successfully");
      fetchPendingVendors();
    } catch (err) {
      alert("Failed to approve vendor");
    }
  };

  const handleReject = async (vendorId) => {
    try {
      await api.delete(`/admin/rejectvendor/${vendorId}`);
      alert("Vendor rejected successfully");
      fetchPendingVendors();
    } catch (err) {
      console.error("Failed to reject vendor:", err);
      alert("Failed to reject vendor");
    }
  };

  useEffect(() => {
    fetchPendingVendors();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Approve Vendors</h1>

      {loading ? (
        <p className="text-sm text-gray-500">Loading pending vendors...</p>
      ) : vendors.length === 0 ? (
        <p className="text-sm text-gray-500">No pending vendors</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {vendors.map((vendor) => (
            <div
              key={vendor._id}
              className="bg-white rounded-xl shadow-sm p-6 space-y-4"
            >
              {/* Vendor Info */}
              <div>
                <h3 className="text-lg font-semibold">
                  {vendor.businessName || vendor.fullName}
                </h3>
                <p className="text-sm text-gray-500">{vendor.email}</p>
                <p className="text-sm text-gray-500">{vendor.phone}</p>
                <p className="text-sm text-gray-500">
                  Address: {vendor.address || "N/A"}
                </p>
              </div>

              {/* Business / Identity Document */}
              <div>
                <p className="text-sm font-medium mb-2">
                Store Description
                </p>

                <p>
                  {vendor.storeDescription || "No description provided."}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleApprove(vendor._id)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Approve
                </button>

                <button
                  onClick={() => handleReject(vendor._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
