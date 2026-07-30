interface BenefitCardProps {
  title: string;
  description: string;
  divider?: "group7" | "group8";
}

export default function BenefitCard({ title, description, divider = "group7" }: BenefitCardProps) {
  const dividerSrc =
    divider === "group8"
      ? "/assets/b3d5d5e1aeccc7c17860362e632508d24f8cee86.svg"
      : "/assets/05c915e1399cac0f67d078b082d318e1477a00b3.svg";

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-6 items-start">
        <img
          src="/assets/d74b1a93598c377b4bdd6934d5e37d2251890308.svg"
          alt=""
          className="size-5 shrink-0 mt-0.5"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-[15px] font-semibold font-[Inter] text-black leading-[1.5]">
            {title}
          </h4>
          <p className="text-[14px] font-normal font-[Inter] text-black leading-[1.5]">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full h-0 relative">
        <img src={dividerSrc} alt="" className="w-full block" />
      </div>
    </div>
  );
}
