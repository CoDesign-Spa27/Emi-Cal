import React from 'react';
import MonthlyBreakdown from './MonthlyBreakdown';


//rendering emi calculation with monthly breakdown
const EMIResult = ({ emi, totalInterest, totalAmount, breakdown }) => {
  return (
    <div className="bg-[#FBFAFE] dark:bg-[#282536]  p-8 rounded-lg shadow-lg w-full max-w-2xl mt-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        EMI Details
      </h2>
      <div className="space-y-4">
        <p className="text-gray-800 dark:text-gray-300 text-lg">
          <span className="font-semibold">Monthly EMI:</span> ₹{emi}
        </p>
        <p className="text-gray-800 dark:text-gray-300 text-lg">
          <span className="font-semibold">Total Interest:</span> ₹{totalInterest}
        </p>
        <p className="text-gray-800 dark:text-gray-300 text-lg">
          <span className="font-semibold">Total Payment:</span> ₹{totalAmount}
        </p>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Month-wise Breakdown
      </h3>
      <div className="bg-[#FBFAFE] dark:bg-[#4b4660]  p-4 rounded-lg shadow-inner">
        <MonthlyBreakdown breakdown={breakdown} />
      </div>
    </div>
  );
};

export default EMIResult;
