// Interface for the claim data
export interface Claim {
  claim_id: string;
  claim_amount: number;
  claim_date: string;
  claim_status: string;
}

// Interface for the claims_data object
interface ClaimsData {
  [key: string]: Claim;
}

// Main interface for the hospital data
export interface HospitalData {
  hospital_name: string;
  claimbook_uhid: string;
  total_limit_allocated: number;
  subvention_per_claim: number;
  repayment_tenure: string;
  current_limit_utilised_percentage: number;
  current_unutilised_funds_percentage: number;
  current_limit_utilised: number;
  current_unutilised_funds: number;
  bill_amount_discounted_to_date: number;
  amount_repaid_to_date: number;
  interest_paid_on_borrowed_amt_to_date: number;
  upcoming_repayment_date: string;
  disbursals_amount: number;
  repayments_amount: number;
  total_interest_amount: number;
  total_due: number;
  amount_to_be_repaid_on_upcoming_date: number;
  claims_data: ClaimsData;
}

// Initial state to be used with useState
export const initialHospitalData: HospitalData = {
  hospital_name: "",
  claimbook_uhid: "",
  total_limit_allocated: 0,
  subvention_per_claim: 0,
  repayment_tenure: "",
  current_limit_utilised_percentage: 0,
  current_unutilised_funds_percentage: 0,
  current_limit_utilised: 0,
  current_unutilised_funds: 0,
  bill_amount_discounted_to_date: 0,
  amount_repaid_to_date: 0,
  interest_paid_on_borrowed_amt_to_date: 0,
  upcoming_repayment_date: "",
  disbursals_amount: 0,
  repayments_amount: 0,
  total_interest_amount: 0,
  total_due: 0,
  amount_to_be_repaid_on_upcoming_date: 0,
  claims_data: {},
};
