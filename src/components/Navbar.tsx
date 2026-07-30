import Link from "next/link";

const navLinks = ["Partner", "Solutions", "Why Choose US", "Core Value", "Principles", "News", "About Us"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[1440px] max-w-full bg-[#f9f9fa] border-b border-[#cfc4c5] px-10 pt-4 pb-[17px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[60px]">
          <div className="w-[165.292px] h-[51.94px] relative overflow-hidden shrink-0">
            <img
              src="/assets/37135ea316fab8a90eca68829fee9c9b0c0bc109.png"
              alt="Indodata"
              className="absolute w-[110.45%] h-[248.6%] top-[-76.35%] left-[-5.89%] max-w-none"
            />
          </div>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="px-2 py-1 text-sm font-medium text-[#5d5e66] font-[Inter] whitespace-nowrap"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 h-6 cursor-pointer">
            <img src="/assets/c5cfcf03adc1c323fced0768d3ccec14fcf8b4f6.svg" alt="" className="size-6" />
            <span className="text-[#da2128] text-sm font-medium font-[Inter]">EN</span>
          </button>
          <Link
            href="#"
            className="bg-[#da2128] text-white text-sm font-medium px-6 py-2 font-[Inter]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
