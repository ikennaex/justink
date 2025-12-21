import { Outlet, Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-6 font-bold text-xl text-green-700">
          JustLink Admin
        </div>

        <nav className="space-y-2 px-4">
          <Link to="/admin" className="block px-4 py-2 rounded hover:bg-gray-100">
            Dashboard
          </Link>
          <Link to="/admin/riders" className="block px-4 py-2 rounded hover:bg-gray-100">
            Riders
          </Link>
          <Link to="/admin/shipments" className="block px-4 py-2 rounded hover:bg-gray-100">
            Shipments
          </Link>
          <Link to="/admin/transactions" className="block px-4 py-2 rounded hover:bg-gray-100">
            Transactions
          </Link>
          <Link to="/admin/approve-riders" className="block px-4 py-2 rounded hover:bg-gray-100">
            Approve Riders
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
