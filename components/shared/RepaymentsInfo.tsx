"use client";
import { FiDollarSign } from "react-icons/fi";
import { LimitUtilizationPieChart } from "../charts/LimitUtilizationPieChart";
import { useEffect, useState } from "react";
import { HospitalData, initialHospitalData } from "@/types/types";
import { fetchHospitalData } from "@/lib/actions/user.action";

const RepaymentsInfo = () => {
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
    <div className="z-10 flex items-center justify-center gap-4 rounded-3xl bg-white p-2 ">
      <div className="flex max-h-48 min-h-52 w-1/2 flex-col items-center gap-8 rounded-3xl bg-[#5AB1EE] p-4 font-serif text-2xl  text-black ">
        <div className="flex justify-between gap-24">
          <p className="pt-1 text-2xl italic">Limit Utilization</p>
          <div className="rounded-full bg-white p-2">
            <FiDollarSign size={40} />
          </div>
        </div>
        <div className=" flex w-full flex-col items-start px-4">
          <p className="text-4xl font-semibold">
            ₹{data.current_limit_utilised}
          </p>
          <p className="text-xl text-gray-700">/{data.total_limit_allocated}</p>
        </div>
      </div>
      <div className="flex h-48 min-h-72 w-1/2 items-center justify-center gap-8 rounded-3xl bg-white p-4 font-serif text-2xl text-black ">
        <LimitUtilizationPieChart
          currentLimitUtilisedPercentage={
            data.current_limit_utilised_percentage
          }
          currentUnutilisedFundsPercentage={
            data.current_unutilised_funds_percentage
          }
        />
      </div>
    </div>
  );
};

export default RepaymentsInfo;
