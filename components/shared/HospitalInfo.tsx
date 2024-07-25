"use client";
import { fetchHospitalData } from "@/lib/actions/user.action";
import { HospitalData, initialHospitalData } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const HospitalInfo = () => {
  const [data, setData] = useState<HospitalData>(initialHospitalData);

  const fetchData = async () => {
    try {
      const fetchedData = await fetchHospitalData();
      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
