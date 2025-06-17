import react from "react";
import icons from "@/data/services.json";
import {
  LuBuilding,
  LuFileText,
  LuAward,
  LuHandshake,
  LuBookOpen,
  LuGraduationCap,
} from "react-icons/lu";

export default function Block(props) {
  return (
    <div className="bg-white flex flex-col rounded-lg">
      <div className="text-gray-700 text-2xl mb-4 bg-gray-100 rounded-full w-12 h-12 mt-6 ml-8 px-3 py-3">
        {props.icon}
      </div>
      <div className="p-5">
        <h3 className="text-[#0A2342] text-lg font-bold">{props.title}</h3>
        <p className="text-[#333333B3] p-3">{props.desc}</p>
      </div>
    </div>
  );
}
