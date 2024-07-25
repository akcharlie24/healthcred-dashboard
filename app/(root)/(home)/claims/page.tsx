"use client";
import ClaimsDataChart from "@/components/charts/claimCharts/ClaimsDataChart";
import { ClaimsStatusPieChart } from "@/components/charts/claimCharts/ClaimStatusPieChart";
import ClaimCard from "@/components/shared/ClaimCard";
import { fetchHospitalData } from "@/lib/actions/user.action";
import { convertClaimsDataToArray } from "@/lib/utils";
import { Claim, HospitalData, initialHospitalData } from "@/types/types";
import { useEffect, useState } from "react";

const ClaimsPage = () => {
  const [data, setData] = useState<HospitalData>(initialHospitalData);
  const [claims, setClaims] = useState<Claim[]>([]);

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

  useEffect(() => {
    const convertedClaims = convertClaimsDataToArray(data.claims_data);
    // @ts-ignore
    setClaims(convertedClaims);
  }, [data.claims_data]);

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
      <div className="z-10 flex w-1/3 flex-col items-center justify-center gap-4">
        <ClaimsDataChart claims={claims} />
        <div className="max-h-96">
          <ClaimsStatusPieChart claims={claims} />
        </div>
      </div>
    </div>
  );
};

export default ClaimsPage;
