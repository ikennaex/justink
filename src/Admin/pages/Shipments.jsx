import { useEffect, useState } from "react";
import ShipmentsTable from "../components/ShipmentsTable";
import { useAdminAuth } from "../../Contexts/AdminContext";

export default function Shipments() {
  const { api } = useAdminAuth();

  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchShipments = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/shipments");
      console.log(res);
      setShipments(res.data.shipments);
    } catch (err) {
      console.error("Failed to fetch shipments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Shipments</h1>

      {loading ? (
        <p className="text-sm text-gray-500">Loading shipments...</p>
      ) : (
        <ShipmentsTable shipments={shipments} />
      )}
    </div>
  );
}
