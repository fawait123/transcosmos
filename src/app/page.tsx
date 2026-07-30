import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "/assets/8abb9e86d4daa980e5dde5e244d12b930d582d0e.svg",
    title: "DATA CENTRE CLEANING",
    description: [
      "Ensuring an ideal sterile environment",
      "for the operational integrity and",
      "longevity of your mission-critical",
      "hardware.",
    ],
    href: "/cleaning-data-center",
  },
  {
    icon: "/assets/d70119cca7115c489125a95e1d57203e921a19d8.svg",
    title: "CUSTOMER SUPPORT",
    description: [
      "Providing comprehensive technical",
      "and logistical support 24 hours a day,",
      "7 days a week, ensuring your",
      "operations never pause.",
    ],
  },
  {
    icon: "/assets/eef1d2120b94c9fb693f736a7e1ba598016a6171.svg",
    title: "COMPREHENSIVE MAINTENANCE",
    description: [
      "Protecting your vital assets and",
      "operations through our rigorous,",
      "scheduled preventive maintenance",
    ],
  },
  {
    icon: "/assets/370d4f245c8e2e4664793a06f6f9c90b9f30e174.svg",
    title: "REMOTE HANDS SERVICES",
    description: [
      "Your extended on-site technical team",
      "for routine tasks, troubleshooting, and",
      "hardware deployments within the data",
      "centre.",
    ],
  },
  {
    icon: "/assets/9c63471abe168c0aead9d21bb821dd79f0784677.svg",
    title: "EXTENSIVE CONNECTIVITY",
    description: [
      "Reliable carrier-neutral facilities",
      "featuring ultra-low latency pathways",
      "and high-performance throughput for",
      "global reach.",
    ],
  },
  {
    icon: "/assets/f009c7e7835f7718e8549e13e86ca407ef08860c.svg",
    title: "SECURITY",
    description: [
      "Safeguard your physical and digital",
      "assets with our comprehensive, multi-",
      "layered security systems and",
      "biometric access controls.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {/* Services Grid Section */}
      <section className="pt-[119px] pb-20 px-10 max-w-[1280px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 mb-6">
          <span className="text-[#5d5e66] text-sm font-medium font-[Inter]">Home</span>
          <img
            src="/assets/15615bedbb41e88f5cc95718def87fecca668249.svg"
            alt=""
            className="size-5"
          />
          <span className="text-[#252525] text-sm font-medium font-[Inter]">Data Center Solution</span>
        </div>

        {/* Hero */}
        <div className="mb-[60px]">
          <h1 className="text-5xl font-extrabold text-black tracking-[-2.88px] uppercase font-[Inter] leading-[72px]">
            Data Center Solution
          </h1>
          <div className="max-w-[672px] pt-[7.4px]">
            <p className="text-[#64748b] text-base font-normal font-[Inter] leading-[28.8px] tracking-[-0.4px]">
              Precision-driven operational excellence for mission-critical digital infrastructure. We provide
              <br />
              the stability, security, and connectivity required for global enterprise operations.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="flex gap-10">
            {services.slice(3).map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
