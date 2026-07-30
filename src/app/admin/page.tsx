const stats = [
  { label: "Total Services", value: "6", change: "+2 this month", positive: true },
  { label: "Contact Submissions", value: "24", change: "+8 this week", positive: true },
  { label: "Active Pages", value: "3", change: "2 published", positive: true },
  { label: "Visitors (est.)", value: "1,234", change: "+12% vs last month", positive: true },
];

const recentActivity = [
  { action: "Page updated", detail: "Homepage hero section", time: "2 hours ago" },
  { action: "Service added", detail: "Data Centre Cleaning", time: "1 day ago" },
  { action: "Contact form submission", detail: "From: john@example.com", time: "3 days ago" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-6 border shadow-sm">
            <p className="text-sm text-gray-500 font-[Inter]">{s.label}</p>
            <p className="text-3xl font-bold text-gray-900 font-[Inter] mt-1">{s.value}</p>
            <p className={`text-sm mt-2 font-[Inter] ${s.positive ? "text-green-600" : "text-red-500"}`}>
              {s.change}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 font-[Inter] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#da2128] shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 font-[Inter]">{a.action}</p>
                  <p className="text-xs text-gray-500 font-[Inter]">{a.detail}</p>
                  <p className="text-xs text-gray-400 font-[Inter] mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 font-[Inter] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Add Service", icon: "➕" },
              { label: "Edit Homepage", icon: "✏️" },
              { label: "View Contacts", icon: "📬" },
              { label: "Site Settings", icon: "⚙️" },
            ].map((a) => (
              <button
                key={a.label}
                className="flex items-center justify-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-[#da2128] hover:text-[#da2128] transition-colors text-sm font-medium text-gray-700 font-[Inter] cursor-pointer"
              >
                <span>{a.icon}</span>
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
