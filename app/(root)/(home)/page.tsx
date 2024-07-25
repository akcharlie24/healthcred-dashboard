import { BillRepaymentComparisonBarChart } from "@/components/charts/BillRepaymentComparisonBarChart";
import DisbursalsAndRepayments from "@/components/charts/DisbursalsAndRepayments";
import { RepaymentsOverTimeLineChart } from "@/components/charts/RepaymentsOverTimeLineChart";
import TotalDueBreakdown from "@/components/charts/TotalDueBreakdown";
import HospitalInfo from "@/components/shared/HospitalInfo";
import NextRepayment from "@/components/shared/NextRepayment";
import RepaymentsInfo from "@/components/shared/RepaymentsInfo";
import { data } from "@/Data";

export default function Home() {
  return (
    <div className=" flex flex-col items-center gap-4">
      <div className="flex w-full flex-wrap border border-b-gray-400">
        <div className="flex w-1/2 flex-1 flex-col gap-4 border border-r-gray-400">
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
      <div className="z-10 flex w-full flex-wrap">
        <div className="flex min-h-80 w-1/3 flex-col items-center justify-center border border-r-gray-400">
          <div className="flex justify-between  gap-20 text-lg italic">
            <div>
              <p className="font-semibold">Amount Till Date : </p> Rs.{" "}
              {data.bill_amount_discounted_to_date}
            </div>
            <div>
              <p className="font-semibold">Repaid Amount : </p>
              Rs. {data.amount_repaid_to_date}
            </div>
          </div>
          <BillRepaymentComparisonBarChart
            billAmountDiscountedToDate={data.bill_amount_discounted_to_date}
            amountRepaidToDate={data.amount_repaid_to_date}
          />
        </div>

        <div className=" flex min-h-80 w-1/3 flex-col items-center justify-center border border-r-gray-400 px-2">
          <div className="flex justify-between  gap-10 italic">
            <div>
              <p className="font-semibold">Principal Amount : </p> Rs.{" "}
              {data.total_due}
            </div>
            <div>
              <p className="font-semibold">Interest Amount : </p>
              Rs. {data.total_interest_amount}
            </div>
            <div>
              <p className="font-semibold">Total Interest Paid : </p>
              Rs. {data.interest_paid_on_borrowed_amt_to_date}
            </div>
          </div>
          <div>
            <TotalDueBreakdown
              totalInterestAmount={data.total_interest_amount}
              totalDue={data.total_due}
            />
          </div>
        </div>

        <div className=" flex min-h-80 w-1/3 flex-col items-center justify-center">
          <div className="flex justify-between  gap-10 text-lg italic">
            <div>
              <p className="font-semibold">Disbursals Amount : </p>
              Rs. {data.disbursals_amount}
            </div>
            <div>
              <p className="font-semibold">Repayments Amount : </p>
              Rs. {data.repayments_amount}
            </div>
          </div>
          <div>
            <DisbursalsAndRepayments
              disbursalsAmount={data.disbursals_amount}
              repaymentsAmount={data.repayments_amount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
