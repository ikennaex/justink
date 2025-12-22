import { useEffect, useState } from "react";
import { useAdminAuth } from "../../Contexts/AdminContext";

export default function AdminStats() {
  const { api } = useAdminAuth();
  const [stats, setStats] = useState(null);

  const getAdminStats = async () => {
    try {
      const res = await api.get("/admin/stats");

      setStats(res.data);
    } catch (err) {
      console.error("Error fetching admin stats:", err);
    }
  }

  useEffect(() => {
    getAdminStats()
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div><p className="font-bold">Ecommerce</p></div>
      <StatCard title="Total Users" value={stats?.totalUsers} />
      <StatCard title="Active Vendors" value={stats?.activeVendors} />
      <StatCard title="Pending Vendors" value={stats?.pendingVendors} />
      <div><p className="font-bold">Logistics</p></div>
      <StatCard title="Total Shipments" value={stats?.totalShipments} />
      <StatCard title="Active Riders" value={stats?.activeRiders} />
      <StatCard title="Pending Riders" value={stats?.inactiveRiders} />
      {/* <StatCard title="Transactions" value={`₦${stats?.transactions}`} /> */}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
