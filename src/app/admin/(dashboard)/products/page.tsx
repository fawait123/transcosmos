const products = [
  { id: 1, name: "Data Centre Cleaning Package", category: "Cleaning", price: "Rp 5.000.000", stock: 12, status: "Active", added: "2024-05-14" },
  { id: 2, name: "Server Room Maintenance", category: "Maintenance", price: "Rp 8.500.000", stock: 8, status: "Active", added: "2024-06-02" },
  { id: 3, name: "Cable Management Service", category: "Infrastructure", price: "Rp 2.750.000", stock: 0, status: "Inactive", added: "2024-07-19" },
  { id: 4, name: "AC & Cooling Unit Cleaning", category: "Cleaning", price: "Rp 3.200.000", stock: 20, status: "Active", added: "2024-08-05" },
  { id: 5, name: "Raised Floor Cleaning", category: "Cleaning", price: "Rp 4.100.000", stock: 15, status: "Active", added: "2024-09-11" },
  { id: 6, name: "Rack & Cabinet Setup", category: "Infrastructure", price: "Rp 6.900.000", stock: 6, status: "Active", added: "2024-10-23" },
  { id: 7, name: "UPS Battery Replacement", category: "Maintenance", price: "Rp 12.000.000", stock: 0, status: "Inactive", added: "2024-11-08" },
  { id: 8, name: "Annual Cleaning Contract", category: "Contract", price: "Rp 45.000.000", stock: 3, status: "Active", added: "2025-01-20" },
];

export default function ProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900 font-[Inter]">Products</h1>
        <button className="bg-[#da2128] text-white px-4 py-2 rounded-lg text-sm font-medium font-[Inter] hover:bg-red-700 transition-colors cursor-pointer">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Name</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Category</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Price</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Stock</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Status</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500 font-[Inter]">Added</th>
              <th className="text-right px-6 py-3 font-medium text-gray-500 font-[Inter]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 font-[Inter]">{p.name}</td>
                <td className="px-6 py-4 text-gray-600 font-[Inter]">{p.category}</td>
                <td className="px-6 py-4 text-gray-600 font-[Inter]">{p.price}</td>
                <td className="px-6 py-4">
                  <span className={`font-[Inter] ${p.stock === 0 ? "text-red-500" : "text-gray-600"}`}>
                    {p.stock}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium font-[Inter] ${
                      p.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        p.status === "Active" ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600 font-[Inter]">{p.added}</td>
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
        Showing {products.length} products
      </p>
    </div>
  );
}
