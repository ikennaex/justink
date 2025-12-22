export default function LogisticsTransactionsTable({ transactions }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Reference</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-6 text-center text-gray-500">
                No transactions found
              </td>
            </tr>
          ) : (
            transactions?.map((tx) => (
              <tr key={tx._id} className="border-t">
                <td className="p-4 font-medium">{tx.reference}</td>
                <td>{tx.userId?.fullName || "N/A"}</td>
                <td>₦{tx.amount.toLocaleString()}</td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      tx.status === "success"
                        ? "bg-green-100 text-green-700"
                        : tx.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td>{new Date(tx.createdAt).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
