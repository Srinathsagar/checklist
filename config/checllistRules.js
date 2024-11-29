module.exports = [
  {
    id: "valuationFeePaid",
    description: "Valuation Fee Paid",
    validate: (data) => data.isValuationFeePaid === true,
  },
  {
    id: "ukResident",
    description: "UK Resident",
    validate: (data) => data.isUkResident === true,
  },
  {
    id: "riskRatingMedium",
    description: "Risk Rating Medium",
    validate: (data) => data.riskRating === "Medium",
  },
  {
    id: "ltvBelow60",
    description: "LTV Below 60%",
    validate: (data) => {
      const ltv = (data.loanRequired / data.purchasePrice) * 100;
      return ltv < 60;
    },
  },
];
