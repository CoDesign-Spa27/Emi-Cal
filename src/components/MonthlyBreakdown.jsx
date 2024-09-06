import React from 'react';


//monthly breakdown list
const MonthlyBreakdown = ({ breakdown }) => {
  return (
    <div className="mt-4">
      {breakdown.map((month, index) => (
        <div key={index} className="border-b py-2 bg-[#FBFAFE] dark:bg-[#4b4660]   text-gray-700 dark:text-gray-300">
          <p className='font-bold'>Month {index + 1}:</p>
          <ul className="ml-4 font-medium">
            <li >EMI Paid: ₹{month.emi}</li>
            <li>Interest Paid: ₹{month.interest}</li>
            <li>Principal Paid: ₹{month.principal}</li>
            <li>Remaining Balance: ₹{month.balance}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MonthlyBreakdown;
