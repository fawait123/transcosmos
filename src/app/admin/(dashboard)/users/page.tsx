const users = [
  { id: 1, name: "Budi Santoso", email: "budi@indodata.com", role: "Admin", status: "Active", joined: "2024-01-15" },
  { id: 2, name: "Siti Rahayu", email: "siti@indodata.com", role: "Editor", status: "Active", joined: "2024-03-22" },
  { id: 3, name: "Ahmad Hidayat", email: "ahmad@indodata.com", role: "Viewer", status: "Active", joined: "2024-06-10" },
  { id: 4, name: "Dewi Lestari", email: "dewi@indodata.com", role: "Editor", status: "Inactive", joined: "2024-02-08" },
  { id: 5, name: "Rudi Hermawan", email: "rudi@indodata.com", role: "Viewer", status: "Active", joined: "2024-08-01" },
  { id: 6, name: "Ani Wulandari", email: "ani@indodata.com", role: "Admin", status: "Active", joined: "2023-11-05" },
  { id: 7, name: "Doni Prasetyo", email: "doni@indodata.com", role: "Editor", status: "Inactive", joined: "2024-04-18" },
  { id: 8, name: "Rina Marlina", email: "rina@indodata.com", role: "Viewer", status: "Active", joined: "2024-09-12" },
];

export default function UsersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900 font-[Inter]">Users</h1>
        <button className="bg-[#da2128] text-white px-4 py-2 rounded-lg text-sm font-medium font-[Inter] hover:bg-red-700 transition-colors cursor-pointer">
          + Add User
        </button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Name</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Email</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Role</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Status</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Joined</th>
              <th className="text-right px-6 py-3 font-medium text-gray-500 font-[Inter]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 font-[Inter]">{u.name}</td>
                <td className="px-6 py-4 text-gray-600 font-[Inter]">{u.email}</td>
                <td className="px-6 py-4">
                  <span className="text-gray-600 font-[Inter]">{u.role}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium font-[Inter] ${
                      u.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        u.status === "Active" ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                    {u.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600 font-[Inter]">{u.joined}</td>
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

      <p className="text-xs text-gray-400 font-[Inter] mt-4">
        Showing {users.length} users
      </p>
    </div>
  );
}
