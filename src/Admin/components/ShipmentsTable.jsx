export default function ShipmentsTable({ shipments }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4">Tracking</th>
            <th>Sender</th>
            <th>Rider</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {shipments?.map((s) => (
            <tr key={s._id} className="border-t">
              <td className="p-4 font-medium">{s.trackingNumber}</td>
              <td>{s.senderName}</td>
              <td>{s.Rider?.name || "Unassigned"}</td>
              <td>
                <span className="px-2 py-1 text-xs rounded bg-gray-100">
                  {s.status.replace("_", " ")}
                </span>
              </td>
              <td>{new Date(s.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
