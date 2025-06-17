import react from "react";
import Features from "@/components/Features";

export default function Whyus() {
  return (
    <div className="bg-[#122344] py-20">
      <div className="mx-10">
        <h6 className="text-[#E04448] text-[16px] font-bold mb=[8px]">
          WHY CHOOSE US
        </h6>
      </div>
      <div className="mx-10 py-3">
        <h2 className="text-2xl md:text-3xl mb-6 font-bold text-white">
         Discover the Innovative Difference
        </h2>
      </div>

      <Features />
      <div className="mt-8">
        <button className="bg-[#E04448] p-3 mx-10 rounded-lg text-sm font-semibold">
          <a href="">Start Your Journey</a>
        </button>
      </div>
    </div>
  );
}
