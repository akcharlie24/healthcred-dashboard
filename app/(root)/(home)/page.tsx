import { BillRepaymentComparisonBarChart } from "@/components/charts/BillRepaymentComparisonBarChart";
import { RepaymentsOverTimeLineChart } from "@/components/charts/RepaymentsOverTimeLineChart";
import HospitalInfo from "@/components/shared/HospitalInfo";
import NextRepayment from "@/components/shared/NextRepayment";
import RepaymentsInfo from "@/components/shared/RepaymentsInfo";
import { data } from "@/Data";

export default function Home() {
  return (
    <div className=" flex flex-col items-center">
      <div className="flex w-full flex-wrap">
        <div className="flex w-1/2 flex-1 flex-col gap-4">
          <HospitalInfo />
          <RepaymentsInfo />
        </div>
        <div className="z-10 w-1/2 flex-1 flex-col p-4">
          <NextRepayment />
          <div className="mt-6 flex h-80 items-center justify-center">
            <RepaymentsOverTimeLineChart
              amountRepaidToDate={data.amount_repaid_to_date}
              amountToBeRepaidOnUpcomingDate={
                data.amount_to_be_repaid_on_upcoming_date
              }
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap">
        <div>
          <BillRepaymentComparisonBarChart
            billAmountDiscountedToDate={data.bill_amount_discounted_to_date}
            amountRepaidToDate={data.amount_repaid_to_date}
          />
        </div>
      </div>
    </div>
  );
}
