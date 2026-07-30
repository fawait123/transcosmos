import Navbar from "@/components/Navbar";
import BenefitCard from "@/components/BenefitCard";
import Footer from "@/components/Footer";

const benefits = [
  {
    title: "Improved Operational Reliability",
    description:
      "Maintains a clean environment to reduce the risk of dust-related equipment issues, airflow obstruction, and potential system disruption.",
  },
  {
    title: "Protection for Mission-Critical Hardware",
    description:
      "Helps preserve the performance and longevity of servers, storage systems, network devices, and other sensitive infrastructure.",
  },
  {
    title: "Optimized Airflow and Cooling Efficiency",
    description:
      "Removes dust and debris that may block airflow, supporting more efficient cooling performance across the facility.",
  },
  {
    title: "Reduced Risk of Downtime",
    description:
      "Minimizes environmental risks that may contribute to overheating, contamination, or hardware failure.",
  },
  {
    title: "Compliance with Data Centre Standards",
    description:
      "Supports best practices in data centre facility management, safety, cleanliness, and operational discipline.",
    divider: "group8" as const,
  },
];

const coverageAreas = [
  "Server rooms and data halls",
  "Raised floor and sub-floor areas",
  "Cable trays and cable pathways",
  "Rack and cabinet exterior surfaces",
  "Cooling equipment surrounding areas",
  "UPS rooms, battery rooms, and electrical rooms",
  "Staging areas and support rooms",
  "Access corridors and technical spaces",
];

export default function DataCentreCleaning() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-[119px] pb-20 px-10 max-w-[1280px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 mb-6">
          <span className="text-[#5d5e66] text-sm font-medium font-[Inter]">Home</span>
          <img src="/assets/15615bedbb41e88f5cc95718def87fecca668249.svg" alt="" className="size-5" />
          <span className="text-[#5d5e66] text-sm font-medium font-[Inter]">Data Center Solution</span>
          <img src="/assets/15615bedbb41e88f5cc95718def87fecca668249.svg" alt="" className="size-5" />
          <span className="text-[#252525] text-sm font-medium font-[Inter]">DATA CENTRE CLEANING</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="bg-[#da2128] rounded-2xl size-14 flex items-center justify-center shrink-0">
            <img
              src="/assets/d94a86ef8820e49da609879597020f1937f3a360.svg"
              alt=""
              className="w-[21.25px] h-[26.25px]"
            />
          </div>
          <h1 className="text-[32px] font-bold text-[#252525] font-[Roboto] leading-[26px]">
            DATA CENTRE CLEANING
          </h1>
        </div>

        {/* Description */}
        <div className="text-[#252525] text-[15px] font-normal font-[Roboto] leading-[26px] mb-8 max-w-full">
          <p className="mb-0">
            Ensuring an Ideal Sterile Environment for Mission-Critical Operations
          </p>
          <p className="mb-0">
            Data Centre Cleaning is a specialized cleaning service designed to maintain a sterile, dust-free, and controlled environment within data centre facilities. This service plays a critical role in protecting mission-critical hardware, improving operational reliability, and extending the lifecycle of IT infrastructure.
          </p>
          <p className="mb-0">
            In a data centre environment, even small particles of dust, debris, or contaminants can affect airflow efficiency, increase the risk of overheating, and potentially disrupt server performance. Through professional cleaning procedures, IndoData helps ensure that every critical area remains clean, safe, and aligned with data centre operational standards.
          </p>
        </div>

        {/* Coverage Areas */}
        <div className="mb-12">
          <h2 className="text-[18px] font-semibold text-black tracking-[0.9px] uppercase font-[Roboto] leading-7 mb-4">
            Our Data Centre Cleaning service covers key operational areas, including:
          </h2>
          <ul className="text-[#252525] text-[15px] font-normal font-[Roboto] leading-[26px] list-disc pl-[22.5px]">
            {coverageAreas.map((area) => (
              <li key={area}>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Benefits */}
        <h2 className="text-[18px] font-bold text-black tracking-[0.9px] uppercase font-[Roboto] leading-7 mb-6">
          Key Benefits
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {benefits.map((b) => (
            <BenefitCard
              key={b.title}
              title={b.title}
              description={b.description}
              divider={b.divider ?? "group7"}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
