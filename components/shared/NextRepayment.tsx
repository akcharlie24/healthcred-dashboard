"use client";
import { FiDollarSign } from "react-icons/fi";
import { FaCalendarCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HospitalData, initialHospitalData } from "@/types/types";
import { fetchHospitalData } from "@/lib/actions/user.action";

const NextRepayment = () => {
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
    <div className="flex">
      <div className="m-4 ml-8 flex min-h-16 w-1/4 items-center justify-center gap-10 rounded-3xl bg-[#5AB1EE] p-1">
        <div className="flex flex-col items-center justify-center font-serif text-2xl font-semibold italic text-zinc-800">
          <p className="text-center">
            Repayment Tenure : <br /> {data.repayment_tenure}
          </p>
        </div>
      </div>
      <div className="flex w-3/4 flex-col items-center justify-center gap-3">
        <div className="flex min-h-16 w-2/3 items-center justify-center gap-10 rounded-3xl bg-[#5AB1EE] p-1">
          <FaCalendarCheck size={38} />
          <div className="font-serif text-2xl font-semibold italic text-zinc-800">
            <p className=""> Next Repayment On</p>{" "}
            {data.upcoming_repayment_date}{" "}
          </div>
        </div>
        <div className="flex min-h-16 w-2/3 items-center justify-center gap-10 rounded-3xl bg-[#FF829D] p-1">
          <FiDollarSign size={38} />
          <div className="font-serif text-2xl font-semibold italic text-zinc-800">
            <p className=""> Due Amount</p> Rs.{" "}
            {data.amount_to_be_repaid_on_upcoming_date}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextRepayment;
