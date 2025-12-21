import React, { useEffect, useState } from "react";
import { useAdminAuth } from "../../Contexts/AdminContext";
import RiderDetails from "../components/RiderDetails";
import { useParams } from "react-router";

export default function RiderDetailsPage() {
  const { api } = useAdminAuth();
  const [rider, setRider] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    const fetchRider = async () => {
      try {
        const res = await api.get(`/admin/rider/${id}`);
        console.log(res);
        setRider(res.data.rider);
      } catch (err) {
        console.error("Failed to fetch rider:", err);
      }
    };

    fetchRider();
  }, [id, api]);

  return <RiderDetails rider={rider} />;
}
