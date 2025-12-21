import { Link } from "react-router";

export default function RidersTable({ riders, onDeactivate }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {riders?.map((rider) => (
            <tr key={rider._id} className="border-t">
              <Link className="text-customBlue" to={`/admin/rider-details/${rider._id}`}>
                <td className="p-4">{rider.name}</td>
              </Link>
              <td>{rider.email}</td>
              <td>{rider.phone}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    rider.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {rider.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="p-4 space-x-2">
                {!rider.isActive && (
                  <button
                    onClick={() => onApprove(rider._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded text-xs"
                  >
                    Approve
                  </button>
                )}
                {rider.isActive && (
                  <button
                    onClick={() => onDeactivate(rider._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-xs"
                  >
                    Deactivate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
