import React, { useState } from "react";

const EMIForm = ({ calculateEMI }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [prepayment, setPrepayment] = useState("");
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  
  const validateInputs = () => {
    const errors = {};
    let hasError = false;

    // Check if input fields are valid
    if (loanAmount.trim() === "" || Number(loanAmount) <= 0) {
      errors.loanAmount = "Loan Amount must be a positive number.";
      hasError = true;
    }
    if (interestRate.trim() === "" || Number(interestRate) <= 0) {
      errors.interestRate = "Interest Rate must be a positive number.";
      hasError = true;
    }
    if (loanTenure.trim() === "" || Number(loanTenure) <= 0) {
      errors.loanTenure = "Loan Tenure must be a positive number.";
      hasError = true;
    }

    // Check if all required fields are empty
    if (
      (loanAmount.trim() === "" || Number(loanAmount) <= 0) &&
      (interestRate.trim() === "" || Number(interestRate) <= 0) &&
      (loanTenure.trim() === "" || Number(loanTenure) <= 0)
    ) {
      setGeneralError("Please provide the required fields.");
    } else {
      setGeneralError("");
    }

    setErrors(errors);
    return !hasError;   
  };

  //handle inputs
  const handleChange = (e, setter) => {
    setter(e.target.value);
    validateInputs();  
  };

//handling submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      calculateEMI({ loanAmount, interestRate, loanTenure, prepayment });
      setLoanAmount("");
      setInterestRate("");
      setLoanTenure("");
      setPrepayment("");
      setErrors({});
      setGeneralError("");
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FBFAFE] dark:bg-[#282536] p-10 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <div className="mb-4 py-2">
          <Input
            label="Loan Amount"
            name="loanAmount"
            value={loanAmount}
            onChange={(e) => handleChange(e, setLoanAmount)}
            placeholder=""
            type="number"
            error={errors.loanAmount}
          />
        </div>

        <div className="mb-4 py-2">
          <Input
            label="Interest Rate (%)"
            name="interestRate"
            value={interestRate}
            onChange={(e) => handleChange(e, setInterestRate)}
            placeholder=""
            type="number"
            error={errors.interestRate}
          />
        </div>

        <div className="mb-4 py-2">
          <Input
            label="Loan Tenure (months)"
            name="loanTenure"
            value={loanTenure}
            onChange={(e) => handleChange(e, setLoanTenure)}
            placeholder=""
            type="number"
            error={errors.loanTenure}
          />
        </div>

        <div className="mb-4 py-2">
          <Input
            label="Prepayment (Optional)"
            name="prepayment"
            value={prepayment}
            onChange={(e) => setPrepayment(e.target.value)}
            placeholder=""
            type="number"
          />
        </div>

        {generalError && (
          <p className="text-red-500 text-xs mb-4">{generalError}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-[#625B71] dark:text-black text-white p-2 rounded-md hover:bg-[#4a4458] dark:bg-[#D0BCFF] dark:hover:bg-[#a695d0]"
        >
          Calculate EMI
        </button>
      </form>
    </div>
  );
};

export default EMIForm;

//input styling
function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled,
  error,
}) {
  return (
    <div className="relative flex flex-col-reverse w-full">
      <label
        htmlFor={name}
        className="relative font-medium block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#CCC2DC]"
      >
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          aria-label={label}
          className={`peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-black dark:text-white sm:text-sm ${
            disabled ? "bg-gray-200" : ""
          } ${error ? "border-red-500" : ""}`}
          disabled={disabled}
        />
        <span
          className="absolute start-0 top-2 -translate-y-1/2 font-medium text-xs text-[#6750A4] dark:text-[#F2B8B5] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          {label}
        </span>
      </label>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
