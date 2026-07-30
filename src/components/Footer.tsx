export default function Footer() {
  return (
    <footer className="bg-[#da2128] w-full px-[60px] pt-[52px] pb-px">
      {/* CTA Section */}
      <div className="flex gap-8 items-center mb-[38px]">
        <div className="w-[480px] shrink-0">
          <h2 className="text-white text-[40px] font-semibold font-[Inter] leading-[1.5]">
            {"We're here to assist you  "}
            <br />
            with anything you need.
          </h2>
          <p className="text-white text-base font-[Inter] leading-[1.5] w-[416px] mt-4">
            Join the ecosystem of global cloud leaders and local enterprises who have made Indodata their home.
          </p>
        </div>
        <div className="flex-1 min-w-px">
          <div className="bg-white/10 rounded-[18px] p-6 flex flex-col gap-[13px]">
            {["Full Name", "Email", "Mobile Phone", "Company"].map((label) => (
              <div
                key={label}
                className="bg-white/15 rounded-[6px] p-[10px] text-[rgba(255,255,255,0.5)] text-base font-[Inter] cursor-pointer"
              >
                {label}
              </div>
            ))}
            <div className="bg-white/15 rounded-[6px] p-[10px] h-[102px] text-[rgba(255,255,255,0.5)] text-base font-[Inter] cursor-pointer">
              Write your message here
            </div>
            <div className="bg-white/65 rounded-[12px] p-[10px] flex items-center justify-center h-[52px] cursor-pointer">
              <span className="text-[#da2128] text-xl font-semibold font-[Inter]">Contact Our Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex gap-[254px] pt-8">
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xl font-bold font-[Helvetica]">About Us</h4>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-white text-base font-[Helvetica]">Sub Section</span>
              <div className="size-3 flex items-center justify-center">
                <img
                  src="/assets/fc01df7e0daad34f582818da80aa8b91073b8aa5.svg"
                  alt=""
                  className="size-full -rotate-90"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xl font-bold font-[Helvetica]">Our Solution</h4>
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-white text-base font-[Helvetica]">Sub Section</span>
              <div className="size-3 flex items-center justify-center">
                <img
                  src="/assets/fc01df7e0daad34f582818da80aa8b91073b8aa5.svg"
                  alt=""
                  className="size-full -rotate-90"
                />
              </div>
            </div>
          ))}
          <h4 className="text-white text-xl font-bold font-[Helvetica] mt-4">{`News & Articles`}</h4>
        </div>
        <div className="flex flex-col gap-4 w-[198px]">
          <h4 className="text-white text-xl font-bold font-[Helvetica]">Site Location</h4>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-white text-base font-[Helvetica]">Sub Section</span>
              <div className="size-3 flex items-center justify-center">
                <img
                  src="/assets/cde7bf2bed99dc345abf68e4bc42cde8f7efdf3e.svg"
                  alt=""
                  className="size-full -rotate-90"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-[198px]">
          <h4 className="text-white text-xl font-bold font-[Helvetica]">Why Us</h4>
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-white text-base font-[Helvetica]">Sub Section</span>
              <div className="size-3 flex items-center justify-center">
                <img
                  src="/assets/cde7bf2bed99dc345abf68e4bc42cde8f7efdf3e.svg"
                  alt=""
                  className="size-full -rotate-90"
                />
              </div>
            </div>
          ))}
          <h4 className="text-white text-xl font-bold font-[Helvetica] mt-4">Follow Us</h4>
          <div className="flex gap-[19px]">
            <img src="/assets/d00bb17a792be5862ed4b897fceb67692ea0a267.svg" alt="" className="size-6" />
            <img src="/assets/0fce96b9ca69aa31cc821a614176dd9313ec9229.svg" alt="" className="size-6" />
            <img src="/assets/77c79caa2c23e59210c88231f3fcb39544f33278.svg" alt="" className="size-6" />
            <img src="/assets/ac5a120f413f7dfe927f20326a82c3eb24757066.svg" alt="" className="size-6" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-0 relative mt-8">
        <img src="/assets/c712b2b0fe1daef0ab3df0dab4e10ef353971fdd.svg" alt="" className="w-full block" />
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center py-8">
        <p className="text-white text-base font-[Helvetica]">Copyright Indodata &copy; 2025.</p>
      </div>
    </footer>
  );
}
