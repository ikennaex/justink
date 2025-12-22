import { useEffect, useState } from "react";
import VendorsTable from "../components/VendorsTable";
import { useAdminAuth } from "../../Contexts/AdminContext";

export default function Vendors() {
  const { api } = useAdminAuth();

  const [vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    try {
      const res = await api.get("/admin/vendors");
      console.log(res.data);
      setVendors(res.data.vendors);
    } catch (err) {
      console.log("Failed to fetch vendors:", err);
    }
  };

  const handleDeactivate = async (vendorId) => {
    try {
      const res = await api.patch(`/admin/deactivate-vendor/${vendorId}`);
      alert(res.data.message);
      fetchVendors();
    } catch (err) {
      console.log("Failed to deactivate vendor:", err);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Vendors</h1>

      <VendorsTable
        vendors={vendors}
        onDeactivate={handleDeactivate}
      />
    </div>
  );
}
