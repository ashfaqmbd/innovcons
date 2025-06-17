import faq from "@/data/faq.json";

export default function Faq() {
  return (
    <div className="mx-auto pl-[32px] pr-[32px] pt-[96px] pb-[40px] bg-white">
      <div className="rounded-2xl p-8 bg-white text-gray-700 ">
        <div className="text-center mb-16">
          <h6 className="font-bold mb-2 text-[#E04448]">FAQs</h6>
          <h2 className="text-[#122344] font-extrabold text-[30px]">
            <span className=" border-b-3 border-[#E04448]">Frequentl</span>y
            Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="">
            <h4 className="font-semibold mb-2">{faq[0].question}</h4>
            <p className="text-sm">{faq[0].answer}</p>
          </div>
          <div className="">
            <h4 className="font-semibold mb-2">{faq[1].question}</h4>
            <p className="text-sm">{faq[1].answer}</p>
          </div>
          <div className="">
            <h4 className="font-semibold mb-2">{faq[2].question}</h4>
            <p className="text-sm">{faq[2].answer}</p>
          </div>
          <div className="">
            <h4 className="font-semibold mb-2">{faq[3].question}</h4>
            <p className="text-sm">{faq[3].answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
