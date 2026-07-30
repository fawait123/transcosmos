const roles = [
  { id: 1, name: "Super Admin", description: "Full access to all modules and settings", users: 2, permissions: "All" },
  { id: 2, name: "Admin", description: "Manage content, users, and services", users: 1, permissions: "Read/Write" },
  { id: 3, name: "Editor", description: "Create and edit content only", users: 3, permissions: "Read/Write (content)" },
  { id: 4, name: "Viewer", description: "Read-only access to dashboards", users: 2, permissions: "Read-only" },
];

export default function RolesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900 font-[Inter]">Roles</h1>
        <button className="bg-[#da2128] text-white px-4 py-2 rounded-lg text-sm font-medium font-[Inter] hover:bg-red-700 transition-colors cursor-pointer">
          + Add Role
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {roles.map((r) => (
          <div key={r.id} className="bg-white rounded-xl border shadow-sm p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-gray-900 font-[Inter]">{r.name}</h3>
              <span className="text-xs text-gray-400 font-[Inter]">{r.users} users</span>
            </div>
            <p className="text-sm text-gray-500 font-[Inter] mb-4">{r.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-[Inter]">
                {r.permissions}
              </span>
              <button className="text-xs text-[#da2128] hover:text-red-700 font-medium font-[Inter] cursor-pointer">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Role</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Description</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Users</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Permissions</th>
              <th className="text-right px-6 py-3 font-medium text-gray-500 font-[Inter]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((r) => (
              <tr key={r.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 font-[Inter]">{r.name}</td>
                <td className="px-6 py-4 text-gray-600 font-[Inter]">{r.description}</td>
                <td className="px-6 py-4 text-gray-600 font-[Inter]">{r.users}</td>
                <td className="px-6 py-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-[Inter]">
                    {r.permissions}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600 text-xs font-medium font-[Inter] cursor-pointer">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}