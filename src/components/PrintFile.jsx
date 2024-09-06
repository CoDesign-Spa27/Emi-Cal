import React from 'react';
import ReactDOMServer from 'react-dom/server';
import EMIResult from './EMIResult';


//component which will print only the generated calculation and emi break down
const PrintFile = ({ emiData }) => {
  const printContent = ReactDOMServer.renderToString(<EMIResult {...emiData} />);
  
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>EMI Details</title>
        <style>
          /* Add your styles here to match the page styling */
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
};

export default PrintFile;
