import { useEffect, useState } from "react";
import TransactionsTable from "../components/TransactionsTable";
import { useAdminAuth } from "../../Contexts/AdminContext";

export default function Transactions() {
  const { api } = useAdminAuth();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/ecom/transactions");
      console.log(res);
      setTransactions(res.data.transactions);
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Transactions</h1>

      {loading ? (
        <p className="text-sm text-gray-500">Loading transactions...</p>
      ) : (
        <TransactionsTable transactions={transactions} />
      )}
    </div>
  );
}
