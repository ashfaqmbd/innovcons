import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import ukflag from "../images/uk-flag.svg";
import usflag from "../images/usa-flag.svg";
import canflag from "../images/can-flag.svg";
import ausflag from "../images/aus-flag.svg";
import eurflag from "../images/eur-flag.svg";
export default function Hero() {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="text-center pb-20 tracking-0 md:tracking-[1rem] hover:scale-125 duration-1000 pt-5 md:pt-15">
          <h1 className="text-red-600 text-3xl font-bold">
            INNOVATE
            <span className="text-[#32435E] text-3xl font-bold"> CONSULTING
            </span>
          </h1>
          <hr className="border-red-500 border-1"/>
        </div>

        <h1 className="text-[#32435E] text-[3rem] md:text-[5rem] font-bold text-center">
          Your Gateway to
          <span className="text-red-600 text-[3rem] md:text-[5rem] font-bold"> DREAM</span>
        </h1>
        <h1 className="text-red-600 text-[3rem] md:text-[5rem] font-bold text-center">Education</h1>
        <p className="text-center text-gray-600 text-lg md:text-xl px-5 py-8 w-1/2">
          Fast, personalized guidance for students seeking admission to top
          universities in the UK, USA, Canada, Ireland, Australia, Europe
        </p>
        <button className="md:bg-[#32435E] bg-red-500 py-2 md:py-3  px-4 md:px-6 text-white font-bold rounded">
          Start Your Journey{" "}
          <BsArrowRight className=" mx-2 inline font-bold text-xl" />
        </button>

        <div className="flex gap-2 md:gap-3 pt-10 pb-10 md:pb-15">
          <Image
            className="rounded-lg w-10 hover:scale-125 duration-1000"
            src={ukflag}
            alt="uk"
          />
          <Image
            className="rounded-lg w-15 hover:scale-125 duration-1000"
            src={usflag}
            alt="usa"
          />
          <Image
            className="rounded-lg w-15 hover:scale-125 duration-1000"
            src={canflag}
            alt="can"
          />
          <Image
            className="rounded-lg w-15 hover:scale-125 duration-1000"
            src={ausflag}
            alt="aus"
          />
          <Image
            className="rounded-lg w-10 hover:scale-125 duration-1000"
            src={eurflag}
            alt="eur"
          />
        </div>
      </div>
    </>
  );
}
