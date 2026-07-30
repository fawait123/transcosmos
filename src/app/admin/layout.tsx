import Link from "next/link";

const sidebar = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Services", href: "#", icon: "🔧" },
  { label: "Content", href: "#", icon: "📝" },
  { label: "Contacts", href: "#", icon: "📬" },
  { label: "Users", href: "#", icon: "👥" },
  { label: "Settings", href: "#", icon: "⚙️" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-lg font-bold font-[Inter]">INDODATA</h1>
          <p className="text-xs text-white/50 font-[Inter] mt-0.5">Backoffice</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebar.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors font-[Inter]"
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-2 text-sm text-white/50 hover:text-white font-[Inter]">
            ← Back to Site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shrink-0">
          <h2 className="text-lg font-semibold text-gray-800 font-[Inter]">Backoffice Dashboard</h2>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#da2128] rounded-full flex items-center justify-center text-white text-sm font-bold font-[Inter]">
              A
            </div>
          </div>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
