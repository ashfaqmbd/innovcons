import features from "@/data/features.json";

export default function Featuers() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 mx-10 gap-x-8 gap-y-6">
        <div className="flex flex-start justify-center">
          <div className="w-6 h-6 rounded-full  mt-1 shrink-0 text-[#E04448]">
            {features[0].id}
          </div>
          <div>
            <h4 className="font-semibold text-white">{features[0].heading} </h4>
            <p className="text-sm text-white">{features[0].feature} </p>
          </div>
        </div>

        <div className="flex flex-start justify-center">
          <div className="w-6 h-6 rounded-full  mt-1 shrink-0 text-[#E04448]">
            {features[1].id}
          </div>
          <div>
            <h4 className="font-semibold text-white">{features[1].heading}</h4>
            <p className="text-sm text-white">{features[1].feature}</p>
          </div>
        </div>

        <div className="flex flex-start justify-center">
          <div className="w-6 h-6 rounded-full  mt-1 shrink-0 text-[#E04448]">
            {features[2].id}
          </div>
          <div>
            <h4 className="font-semibold text-white">{features[2].heading}</h4>
            <p className="text-sm text-white">{features[2].feature}</p>
          </div>
        </div>

        <div className="flex flex-start justify-center">
          <div className="w-6 h-6 rounded-full  mt-1 shrink-0 text-[#E04448]">
            {features[3].id}
          </div>
          <div>
            <h4 className="font-semibold text-white">{features[3].heading}</h4>
            <p className="text-sm text-white">{features[3].feature}</p>
          </div>
        </div>

        <div className="flex flex-start justify-center">
          <div className="w-6 h-6 rounded-full  mt-1 shrink-0 text-[#E04448]">
            {features[4].id}
          </div>
          <div>
            <h4 className="font-semibold text-white">{features[4].heading}</h4>
            <p className="text-sm text-white">{features[4].feature}</p>
          </div>
        </div>

        <div className="flex flex-start justify-center">
          <div className="w-6 h-6 rounded-full  mt-1 shrink-0 text-[#E04448]">
            {features[5].id}
          </div>
          <div>
            <h4 className="font-semibold text-white">{features[5].heading}</h4>
            <p className="text-sm text-white">{features[5].feature}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
