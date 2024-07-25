import { data } from "@/Data";
import Image from "next/image";

const HospitalInfo = () => {
  return (
    <div className="z-10 flex justify-center gap-24 rounded-3xl bg-white p-2 ">
      <div className="flex flex-col items-center justify-center gap-4 font-serif ">
        <h1 className="text-5xl font-semibold">{data.hospital_name}</h1>
        <h2 className="text-xl text-gray-700">{data.claimbook_uhid}</h2>
      </div>
      <Image
        src="/assets/girl.png"
        alt="girl_with_ipad"
        width={250}
        height={2500}
        className="z-10"
      />
    </div>
  );
};

export default HospitalInfo;
