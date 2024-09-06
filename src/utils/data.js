export const calculateEMI = ({ loanAmount, interestRate, loanTenure, prepayment = 0 }) => {
  // Convert input values to appropriate types
  loanAmount = parseFloat(loanAmount); // total loan amount 
  interestRate = parseFloat(interestRate); // interest rate  
  loanTenure = parseInt(loanTenure, 10); // tenure in months 
  prepayment = parseFloat(prepayment); // amount of prepayment  

  // calculate the monthly interest rate from the annual interest rate
  const monthlyRate = interestRate / 12 / 100; // Convert annual interest rate to monthly and percentage to decimal

  // Calculate EMI using the formula
  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure) / 
               (Math.pow(1 + monthlyRate, loanTenure) - 1);

  // array and variables for EMI breakdown
  const breakdown = [];
  let remainingBalance = loanAmount; 
  let totalInterest = 0;  

  
  for (let month = 1; month <= loanTenure; month++) {
    const interestPaid = remainingBalance * monthlyRate;  
    const principalPaid = emi - interestPaid;
    totalInterest += interestPaid;  
    remainingBalance -= principalPaid;
 
    breakdown.push({
      emi: emi.toFixed(2),  
      interest: interestPaid.toFixed(2), 
      principal: principalPaid.toFixed(2),  
      balance: remainingBalance.toFixed(2),  
    });
  }

  // object containing the EMI details and the breakdown
  return {
    emi: emi.toFixed(2), 
    totalInterest: totalInterest.toFixed(2), 
    totalAmount: (loanAmount + totalInterest).toFixed(2),  
    breakdown, 
  };
};
