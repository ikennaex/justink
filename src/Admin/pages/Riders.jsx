import { useEffect, useState } from "react";
import RidersTable from "../components/RidersTable";
import { useAdminAuth } from "../../Contexts/AdminContext";

export default function Riders() {
  const { api } = useAdminAuth();

  const [riders, setRiders] = useState([]);

  const fetchRiders = async () => {
    try {
      const res = await api.get("/admin/riders");
      console.log(res);
      setRiders(res.data.riders);
    } catch (err) {
      console.log("Failed to fetch riders:", err);
    }
  };

  const handleDeactivate = async (riderId) => {
    try {
      const res = await api.patch(`/admin/deactivate/${riderId}`);
      console.log(res);
      fetchRiders();
      alert(res.data.message)
    } catch (err) {
      console.log("Failed to deactivate rider:", err);
    }
  };

  useEffect(() => {
    fetchRiders();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Riders</h1>

      <RidersTable riders={riders} onDeactivate={handleDeactivate} />
    </div>
  );
}
