import { FiFacebook } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { SlPhone } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import Image from "next/image";
import Logo from "../images/Innovate-Logo-png.png";
export default function Footer() {
  return (
    <div>
      <div className="space-y-10 grid lg:grid-cols-4 bg-[#132244] md:grid-cols-2 sm:grid-cols-1 gap-x-10 pt-10 pl-5 pr-5 mx-auto">
        {/* col-1 */}
        <div className="">
          <Image className="w-35 h-35 mb-5" src={Logo} alt="logo" />
        
        
          <h2 className="">
            <span className="text-red-600 font-bold text-2xl">Innovate</span>{" "}
            <span className="text-white font-extrabold text-2xl">
              Consulting
            </span>
          </h2>
          <p className="pt-5 text-gray-400">
            Your trusted partner for study abroad guidance, helping students
            achieve their international education dreams.
          </p>
          <div className="gap-x-5 pt-5 text-2xl font-bold flex items-center">
            <FiFacebook className="text-gray-400 hover:text-red-500 " />
            <RxInstagramLogo className="text-gray-400 hover:text-red-500 " />
          </div>
        </div>
        {/* <col-2> */}
        <div className="">
          <h2 className="pb-5 text-xl font-semibold text-white">Quick Links</h2>
          <div className="text-gray-400">
            <a href="" className="block pb-3 hover:text-red-500">
              Our Services
            </a>
            <a href="" className="block pb-3 hover:text-red-500">
              About Us
            </a>
            <a href="" className="block pb-3 hover:text-red-500">
              Success Stories
            </a>
            <a href="" className="block pb-3 hover:text-red-500">
              Book Consultation
            </a>
            <a href="" className="block hover:text-red-500">
              Privacy Policy
            </a>
          </div>
        </div>
        {/* col-3 */}
        <div className="">
          <h2 className="pb-5 text-xl font-semibold text-white">
            Our Services
          </h2>
          <div className="text-gray-400">
            <a href="" className="block pb-3 hover:text-red-500">
              Personalized Course & University Selection
            </a>
            <a href="" className="block pb-3 hover:text-red-500">
              Location & Budget Suitability Guidance
            </a>
            <a href="" className="block pb-3 hover:text-red-500">
              Statement of Purpose Writing
            </a>
            <a href="" className="block pb-3 hover:text-red-500">
              Application & Admission Process Support
            </a>
            <a href="" className="block pb-3 hover:text-red-500">
              Interview Preparation & Training
            </a>
            <a href="" className="block hover:text-red-500">
              Visa Facilitation & Documentation
            </a>
          </div>
        </div>
        {/* col-4 */}
        <div className="">
          <h2 className="pb-5 text-xl font-semibold text-white">Contact Us</h2>
          <div className="space-y-3 text-gray-400">
            <div className="flex gap-x-3">
              <div>
                <SlLocationPin className="text-red-500 font-semibold text-lg" />
              </div>
              <div>
                <p>Lahore, Lahore, Lahore, Lahore</p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div>
                <SlPhone className="text-red-500 font-semibold text-lg" />
              </div>
              <div>
                <p>+92 000 000 0000</p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div>
                <MdOutlineEmail className="text-red-500 font-semibold text-lg" />
              </div>
              <div>
                <p>info@innovateconsults.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#132244]">
        <p className="p-10 text-sm text-gray-400 text-center">
          © 2025 Innovate Consulting. Powered by{" "}
          <a href="" className="hover:text-red-500">
            NexusBerry Pvt. Ltd.
          </a>{" "}
          All rights reserved.
        </p>
      </div>
      <div className="bottom-6 right-6 flex flex-col items-end gap-y-10 fixed">
        <div className="shadow-xl rounded-full p-4 text-black text-2xl text-center bg-white">
          <FiMessageSquare />
        </div>
        <div className="rounded-full p-4 text-white text- border text-2xl border-white/10 text-center bg-[#132244]">
          <SlPhone />
        </div>
      </div>
    </div>
  );
}
