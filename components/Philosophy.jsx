import { LiaBuilding } from "react-icons/lia";
import { LuGlobe, LuAward, LuBookOpen, LuTarget } from "react-icons/lu";
import philosophy from "@/data/philosophy.json";

export default function Philosophy() {
  return (
    <div className="bg-[#122344] py-20">
      <h2 className="text-center text-[#E04448] py-3 ">OUR PHILOSOPHY</h2>
      <h1 className="text-center text-white text-4xl font-extrabold">
        Empowering Your Academic Journey
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mx-10 mb-20 mt-15">
        {/* card starts */}
        <div className="bg-[#2a3957] text-gray-100 rounded-lg text-center border border-[#fff3]">
          <div className="flex justify-center mb-2 text-3xl mt-4 text-[#E04448]">
            <LuTarget />
          </div>
          <h1 className="text-lg font-bold">{philosophy[0].head}</h1>
          <p className="p-4 text-[#FFFFFFCC]">{philosophy[0].desc}</p>
        </div>
        {/* card ends */}
        {/* card starts */}
        <div className="bg-[#2a3957] text-gray-100 rounded-lg text-center border border-[#fff3]">
          <div className="flex justify-center mb-2 text-3xl mt-4 text-[#E04448]">
            <LuGlobe />
          </div>
          <h1 className="text-lg font-bold">{philosophy[1].head}</h1>
          <p className="p-4 text-[#FFFFFFCC]">{philosophy[1].desc}</p>
        </div>
        {/* card ends */}
        {/* card starts */}
        <div className="bg-[#2a3957] text-gray-100 rounded-lg text-center border border-[#fff3]">
          <div className="flex justify-center mb-2 text-3xl mt-4 text-[#E04448]">
            <LuAward />
          </div>
          <h1 className="text-lg font-bold">{philosophy[2].head}</h1>
          <p className="p-4 text-[#FFFFFFCC]">{philosophy[2].desc}</p>
        </div>
        {/* card ends */}
        {/* card starts */}
        <div className="bg-[#2a3957] text-gray-100 rounded-lg text-center border border-[#fff3]">
          <div className="flex justify-center mb-2 text-3xl mt-4 text-[#E04448]">
            <LuBookOpen />
          </div>
          <h1 className="text-lg font-bold ">{philosophy[3].head}</h1>
          <p className="p-4 text-[#FFFFFFCC]">{philosophy[3].desc}</p>
        </div>
        {/* card ends */}
      </div>
    </div>
  );
}
