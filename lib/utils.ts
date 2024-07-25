import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Claim {
  claim_id: string;
  claim_amount: number;
  claim_date: string;
  claim_status: string;
}

interface ClaimsData {
  [key: string]: Claim;
}

export function convertClaimsDataToArray(claimsData: ClaimsData): Claim[] {
  return Object.values(claimsData);
}
