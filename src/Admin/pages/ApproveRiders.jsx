import { useEffect, useState } from "react";
import { useAdminAuth } from "../../Contexts/AdminContext";

export default function ApproveRiders() {
  const { api } = useAdminAuth();

  const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPendingRiders = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/unapprovedriders");
      console.log(res);
      setRiders(res.data.riders);
    } catch (err) {
      console.error("Failed to fetch pending riders:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (riderId) => {
    try {
      await api.patch(`/admin/approverider/${riderId}`);
      alert("Rider approved successfully");
      fetchPendingRiders();
    } catch (err) {
      alert("Failed to approve rider");
    }
  };

  const handleReject = async (riderId) => {
    try {
      await api.delete(`/admin/rejectrider/${riderId}`);
      fetchPendingRiders();
      alert("Rider rejected successfully");
    } catch (err) {
        console.log("Failed to reject rider:", err);
      alert("Failed to reject rider");
    }
  };

  useEffect(() => {
    fetchPendingRiders();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Approve Riders</h1>

      {loading ? (
        <p className="text-sm text-gray-500">Loading pending riders...</p>
      ) : riders.length === 0 ? (
        <p className="text-sm text-gray-500">No pending riders</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {riders.map((rider) => (
            <div
              key={rider._id}
              className="bg-white rounded-xl shadow-sm p-6 space-y-4"
            >
              {/* Rider Info */}
              <div>
                <h3 className="text-lg font-semibold">{rider.name}</h3>
                <p className="text-sm text-gray-500">{rider.email}</p>
                <p className="text-sm text-gray-500">{rider.phone}</p>
                <p className="text-sm text-gray-500">
                  Location: {rider.location?.address || "N/A"}
                </p>
              </div>

              {/* Identity Image */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Identification Document
                </p>
                <img
                  src={rider?.riderId?.url}
                  alt="Rider ID"
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleApprove(rider._id)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Approve
                </button>

                <button
                  onClick={() => handleReject(rider._id)}
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
