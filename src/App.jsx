import React, { useState,useRef } from 'react';
import EMIForm from './components/EMIForm';
import EMIResult from './components/EMIResult';
import { calculateEMI } from './utils/data';
import PrintFile from './components/PrintFile';
import Button from './components/Button';
import { BsArrowDown } from 'react-icons/bs';
import Header from './components/Header';

function App() {
  const [emiData, setEmiData] = useState(null);
  const resultsRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Calling the EMI calculation function
  const handleEMICalculation = (data) => {
    const result = calculateEMI(data);
    setEmiData(result);
    setShowScrollButton(true);
  };

  const handlePrint = () => {
    if (emiData) {
      // Trigger the PrintView
      PrintFile({ emiData });
    }
  };

  // Scroll to EMI results
  const scrollToResults = () => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      setShowScrollButton(false); // Hide the scroll button after scrolling
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f4f4f5] dark:bg-[#1C1A27] p-4">
    <Header />
      <main className="pt-[80px] flex flex-col items-center w-full">
        <EMIForm calculateEMI={handleEMICalculation} />
        <div className='w-full flex flex-col gap-2 items-center justify-center' ref={resultsRef}>
          {emiData && (
            <div className='w-full flex flex-col gap-2 items-center justify-center'>
              <Button onClick={handlePrint} name={"Print"} />
              <EMIResult {...emiData} />
            </div>
          )}
        </div>
      </main>
      {showScrollButton && emiData && (
        <button
          onClick={scrollToResults}
          className="fixed bottom-4 right-4 p-3 animate-bounce dark:bg-[#a695d0] bg-[#625B71] text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          <BsArrowDown />
        </button>
      )}
    </div>
  );
}

export default App;
