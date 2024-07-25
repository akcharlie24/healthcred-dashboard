import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";

interface ClaimCardProps {
  claimId: string;
  claimAmount: number;
  claimDate: string;
  claimStatus: string;
}

const ClaimCard = ({
  claimId,
  claimAmount,
  claimDate,
  claimStatus,
}: ClaimCardProps) => {
  return (
    <div className="flex min-h-40 w-1/2 flex-col gap-4 rounded-3xl bg-[#4BC0C0] p-5">
      <p className="text-center text-3xl font-semibold italic">{claimId}</p>
      <div className="flex items-center justify-center gap-4">
        <FaCalendarAlt size={30} />
        <p className="text-xl">{claimDate}</p>
      </div>
      <div className="flex gap-4 text-xl">
        <p className="font-semibold">Amount : </p>
        {claimAmount}
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4 text-xl">
          <p className="font-semibold">Status : </p>
          {claimStatus}
        </div>
        {claimStatus === "Pending" ? (
          <MdOutlinePendingActions size={30} />
        ) : (
          <IoIosDoneAll size={34} />
        )}
      </div>
    </div>
  );
};

export default ClaimCard;
