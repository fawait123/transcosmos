import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string[];
  href?: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const Card = (
    <div className="bg-white border border-[#f1f5f9] rounded-[6px] w-[373.333px] h-[362px] relative shrink-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
      <div className="absolute top-10 left-10 bg-[#f8fafc] rounded-2xl size-14 flex items-center justify-center">
        <img src={icon} alt="" className="w-auto h-auto" />
      </div>
      <div className="absolute top-[116px] left-10 right-10 pt-3">
        <h3 className="text-lg font-bold text-black tracking-[0.9px] uppercase font-[Roboto] leading-7">
          {title}
        </h3>
      </div>
      <div className="absolute top-[176px] left-10 right-10">
        <p className="text-[#64748b] text-base font-normal font-[Roboto] leading-[26px]">
          {description.map((line, i) => (
            <span key={i}>
              {line}
              {i < description.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
      <div className="absolute top-[300px] left-10 right-10 flex items-center gap-2 h-5">
        <span className="text-[#da2128] text-sm font-medium font-[Roboto] leading-5">View Services</span>
        <img src="/assets/3fafdbdd156d0bb42c5482b580944ab463c28d2d.svg" alt="" className="w-[12.25px] h-[10.5px]" />
      </div>
    </div>
  );

  return href ? <Link href={href}>{Card}</Link> : Card;
}
