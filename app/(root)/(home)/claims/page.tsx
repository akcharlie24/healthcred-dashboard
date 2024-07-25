import ClaimsDataChart from "@/components/charts/claimCharts/ClaimsDataChart";
import { ClaimsStatusPieChart } from "@/components/charts/claimCharts/ClaimStatusPieChart";
import ClaimCard from "@/components/shared/ClaimCard";
import { data } from "@/Data";
import { convertClaimsDataToArray } from "@/lib/utils";

const claims = convertClaimsDataToArray(data.claims_data);

const ClaimsPage = () => {
  return (
    <div className=" flex items-center gap-4 pt-5">
      <div className=" z-10 flex w-2/3 flex-col items-center justify-center gap-6">
        {claims.map((claim) => {
          return (
            <ClaimCard
              key={claim.claim_id}
              claimId={claim.claim_id}
              claimDate={claim.claim_date}
              claimAmount={claim.claim_amount}
              claimStatus={claim.claim_status}
            />
          );
        })}
      </div>
      <div className="z-10 flex w-1/3 flex-col items-center justify-center">
        <div className="min-h-72">
          <ClaimsDataChart claims={claims} />
        </div>
        <div className="max-h-96">
          <ClaimsStatusPieChart claims={claims} />
        </div>
      </div>
    </div>
  );
};

export default ClaimsPage;
