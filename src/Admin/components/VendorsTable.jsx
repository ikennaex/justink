export default function VendorsTable({ vendors, onDeactivate }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-4">Business Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor._id} className="border-t">
              <td className="p-4 font-medium">
                {vendor.businessName || vendor.fullName}
              </td>
              <td>{vendor.email}</td>
              <td>{vendor.phone}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    vendor.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {vendor.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="p-4">
                {vendor.isActive && (
                  <button
                    onClick={() => onDeactivate(vendor._id)}
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
