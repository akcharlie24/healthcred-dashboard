import {
  BillRepaymentComparisonBarChart,
  RepaymentsOverTimeLineChart,
} from "@/components/shared/charts-enhanced";
import HospitalInfo from "@/components/shared/HospitalInfo";
import RepaymentsInfo from "@/components/shared/RepaymentsInfo";
import { data } from "@/Data";

export default function Home() {
  return (
    <div className=" flex flex-col items-center">
      <div className="flex w-full flex-wrap">
        <div className="flex w-1/2 flex-1 flex-col">
          <HospitalInfo />
          <RepaymentsInfo />
        </div>
        <div className=" z-10 w-1/2 flex-1">
          <BillRepaymentComparisonBarChart />
        </div>
      </div>
    </div>
  );
}
