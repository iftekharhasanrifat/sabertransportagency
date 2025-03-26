// import React, { useState,useEffect, useRef  } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import {useReactToPrint } from 'react-to-print';
// import html2pdf from 'html2pdf.js';


// const ShowProfit = () => {
//     const [trucks,setTrucks] = useState([]);
//     const [profits,setProfits] = useState([]);
//   const [truck, setTruck] = useState('');
//   const [date, setSDate] = useState('');
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [fuelExpense, setFuelExpense] = useState('');
//   const [quantityOfCementBagRod, setQuantityOfCementBagRod] = useState('');
//   const [priceRate, setPriceRate] = useState('');
//   const [taka, setTaka] = useState('');
//   const [driverSalary, setDriverSalary] = useState('');
//   const [labourGratuity, setLabourGratuity] = useState('');
//   const [toll, setToll] = useState('');
//   const [transportCost, setTransportCost] = useState('');
//   const [remainingTaka, setRemainingTaka] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [traders,setTraders] = useState([]);
//   const [totalProfit,setTotalProfit] = useState(0);
//   const [totalTransportCost,setTotalTransportCost] = useState(0);
  
//   const navigate = useNavigate();
//   // const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     axios
//     .get('https://saber-traders-backend-d1gm.vercel.app/trucks')
//     .then((res) => {
//       setTrucks(res.data.data);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });

//     // axios
//     // .get('https://saber-traders-backend-d1gm.vercel.app/traders')
//     // .then((res) => {
//     //   setTraders(res.data.data);
      
//     //   setLoading(false);
//     // })
//     // .catch((error) => {
//     //   console.error(error.message);
//     //   setLoading(false);
//     // });
//   },[]);

//   const pdfRef = useRef();

//   const handleDownloadPDF = () => {
//     const element = pdfRef.current;

//     const opt = {
//         margin: 15,
//         filename: "Profit_Report.pdf",
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 3, useCORS: true, scrollX: 0, scrollY: 0 },
//         jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
//     };

//     html2pdf().set(opt).from(element).save();
// };

//   const handleShowProfit = () => {
//     const month = date.split('-')[1];
//     const year = date.split('-')[0];
//     const encodedTruck = encodeURIComponent(truck);
//     const url = `https://saber-traders-backend-d1gm.vercel.app/traders/remainingTaka/${encodedTruck}/${month}/${year}`;
//     // console.log(url);
//     if(truck === '--Select Truck--' || truck === '' && date!==''){
//         axios
//         .get(`https://saber-traders-backend-d1gm.vercel.app/traders/remainingTaka/${month}/${year}`)
//         .then((res) => {
//           setTraders(res.data.data);
//           setTotalProfit(res.data.total);
//           setTotalTransportCost(res.data.transportCost);
//           console.log(res.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error(error.message);
//           setLoading(false);
//         });
      
//     }
//     else{
//         axios
//     .get(`https://saber-traders-backend-d1gm.vercel.app/traders/remainingTaka/${truck}/${month}/${year}`)
//     .then((res) => {
//       setTraders(res.data.data);
//       setTotalProfit(res.data.total);
//       setTotalTransportCost(res.data.transportCost);
//       console.log(res.data);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.error(error.message);
//       setLoading(false);
//     });
//     }
//     // console.log({
//     //     truck,month:date.split('-')[1],year:date.split('-')[0]
//     // });
//   }

//   return (
//     <>
//     <div className='my-2'>
//         <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//       <div className='my-1'>
//           <label className=' mr-4 text-gray-500'>Truck</label>
//           <select onChange={(e) => setTruck(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'  name="cars" id="cars">
//             <option value="--Select Truck--">--Select Truck--</option>
//             {
//               trucks.map((truck) => (
//                   <option key={truck._id} value={truck.truckNo}>{truck.truckNo}</option>
//               ))
//             }
//           </select>
          
//         </div>
//         <div className='my-1'>
//           <label className=' mr-4 text-gray-500'>Date</label>
//           <input
//             type='date'
//             value={date}
//             onChange={(e) => setSDate(e.target.value)}
//             className='border-2 border-gray-400 px-4 py-2 w-full'
//             />
//         </div>
//         <button className='p-2 bg-sky-500 m-8' onClick={handleShowProfit} >
//           Show Profit
//         </button>
//         </div>
//     </div>{
//         traders.length>0 && <>
//         <div ref={pdfRef} className='p-4'>
//         <div className='flex justify-center items-center'>
//             <div>
//             <h1 className='text-3xl my-4'>Saber Transport Agency</h1>
//             </div>
//         </div>
      
      
//       <table  className='w-full border-separate border-spacing-2'>
//         <thead>
//           <tr>
//             <th className='border border-slate-600 rounded-md'>Sl</th>
//             <th className='border border-slate-600 rounded-md'>Date</th>
//             <th className='border border-slate-600 rounded-md '>Truck No</th>
//             <th className='border border-slate-600 rounded-md '>Description</th>
//             <th className='border border-slate-600 rounded-md'>Quantity Of Cement Bag Rod</th>
//             <th className='border border-slate-600 rounded-md'>Price Rate</th>
//             <th className='border border-slate-600 rounded-md '>Taka</th>
//             <th className='border border-slate-600 rounded-md '>Driver Salary</th>
//             <th className='border border-slate-600 rounded-md'>Fuel Expense</th>
//             <th className='border border-slate-600 rounded-md'>Labour Gratuity</th>
//             <th className='border border-slate-600 rounded-md '>Toll</th>
//             <th className='border border-slate-600 rounded-md'>Transport Cost</th>
//             <th className='border border-slate-600 rounded-md '>Remaining Taka</th>
            
//           </tr>
//         </thead>
//         <tbody>
//             {
//               traders.map((trader,index) => (
//                 <tr key={trader._id}>
//                   <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
//                   <td className='border border-slate-700 rounded-md text-center'>{trader.date}</td>
//                   <td className='border border-slate-700 rounded-md text-center '>{trader.truckNo}</td>
//                   <td className='border border-slate-700 rounded-md text-center'>{trader.description}</td>
//                   <td className='border border-slate-700 rounded-md text-center'>{trader.quantityOfCementBagRod}</td>
//                   <td className='border border-slate-700 rounded-md text-center'>{trader.priceRate}</td>
//                   <td className='border border-slate-700 rounded-md text-center '>{trader.taka}</td>
//                   <td className='border border-slate-700 rounded-md text-center '>{trader.driverSalary}</td>
//                   <td className='border border-slate-700 rounded-md text-center'>{trader.fuelExpense}</td>
//                   <td className='border border-slate-700 rounded-md text-center'>{trader.labourGratuity}</td>
//                   <td className='border border-slate-700 rounded-md text-center '>{trader.toll}</td>
//                   <td className='border border-slate-700 rounded-md text-center '>{trader.transportCost}</td>
//                   <td className='border border-slate-700 rounded-md text-center '>{trader.remainingTaka}</td>

//                 </tr>
//               ))
//             }
//         </tbody>
//       </table>
      

//     <div className='flex justify-between items-center'>
//         <h1 className='text-3xl my-8'>Total Ptofit</h1>
//         <div className='flex gap-x-8'>
//         <h2 className='text-sky-800 text-3xl'>{totalTransportCost}Tk/-</h2>
//         <h2 className='text-sky-800 text-3xl'>{totalProfit}Tk/-</h2>
//         </div>
//     </div>
    
// </div>
// <div>
// <button onClick={handleDownloadPDF} className='p-2 bg-green-500 text-white mt-4'>
//                         Download PDF
//                     </button>
// </div>
//         </>

//     }
    
//             </>
    
    
//   )
// }

// export default ShowProfit

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";  // ✅ Import autoTable separately

const ShowProfit = () => {
  const [trucks, setTrucks] = useState([]);
  const [traders, setTraders] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalTransportCost, setTotalTransportCost] = useState(0);
  const [truck, setTruck] = useState('');
  const [sdate, setSDate] = useState('');
  const [tdate, setTDate] = useState('');

  const [loading, setLoading] = useState(false);

  const pdfRef = useRef();

  useEffect(() => {
    axios
      .get('https://saber-traders-backend-d1gm.vercel.app/trucks')
      .then((res) => {
        setTrucks(res.data.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  // const handleDownloadPDF = () => {
  //   const element = pdfRef.current;
  //   const opt = {
  //     margin: 15,
  //     filename: 'Profit_Report.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 3, useCORS: true, scrollX: 0, scrollY: 0 },
  //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
  //   };
  //   html2pdf().set(opt).from(element).save();
  // };

  // const handleDownloadPDF = () => {
  //   const element = pdfRef.current;
  
  //   // Set the configuration for PDF generation
  //   const opt = {
  //     margin: 0,
  //     filename: 'Profit_Report.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },  // Decreased the scale slightly
  //     jsPDF: {
  //       unit: 'mm',
  //       format: 'a4',
  //       orientation: 'landscape',
  //       font: 'helvetica',
  //       textColor: [0, 0, 0],
  //     },
  //   };
  
  //   // Use html2pdf and then adjust font size
  //   html2pdf()
  //     .set(opt)
  //     .from(element)
  //     .toPdf()
  //     .get('pdf')
  //     .then((pdf) => {
  //       pdf.setFontSize(2);  // Set smaller font size
  //       pdf.save('Profit_Report.pdf');  // Trigger the download
  //     })
  //     .catch((error) => {
  //       console.error('Error generating PDF:', error);
  //     });
  // };
  // const handleDownloadPDF = () => {
  //   const doc = new jsPDF("landscape");
  
  //   // Title
  //   doc.setFontSize(18);
  //   doc.text("Saber Transport Agency - Profit Report", 14, 15);
  
  //   // Define the table headers
  //   const headers = [
  //     ["Sl", "Date", "Truck No", "Description", "Quantity", "Price Rate", "Taka", "Driver Salary", "Fuel Expense", "Labour Gratuity", "Toll", "Transport Cost", "Remaining Taka"],
  //   ];
  
  //   // Map traders data into rows
  //   const data = traders.map((trader, index) => [
  //     index + 1,
  //     trader.date,
  //     trader.truckNo,
  //     trader.description,
  //     trader.quantityOfCementBagRod,
  //     trader.priceRate,
  //     trader.taka,
  //     trader.driverSalary,
  //     trader.fuelExpense,
  //     trader.labourGratuity,
  //     trader.toll,
  //     trader.transportCost > 0 && trader.transportCostDescription
  //       ? `${trader.transportCost} (${trader.transportCostDescription})`
  //       : trader.transportCost,
  //     trader.remainingTaka,
  //   ]);
  
  //   // ✅ Use autoTable with correct syntax
  //   autoTable(doc, {
  //     head: headers,
  //     body: data,
  //     startY: 25, // Start position for the table
  //     styles: { fontSize: 8, cellPadding: 2 }, // Adjust font size
  //     theme: "grid", // Table style
  //     margin: { top: 20 },
  //   });
  
  //   // ✅ Get the final Y position of the table
  //   const finalY = doc.lastAutoTable.finalY + 10; // Spacing below the table

  //   // // ✅ Align Total Transport Cost & Total Profit under their respective columns
  //   // const transportCostX = 200; // Adjust X position to match 'Transport Cost' column
  //   // const remainingTakaX = 250;  // Adjust X position to match 'Remaining Taka' column
  
  //   doc.setFontSize(14);
  //   doc.text("Total Transportation Cost:", 14, finalY); // Label on the left side
  //   doc.text("Total Profit:", 14, finalY+10); // Label on the left side
    
  //   doc.setTextColor(30, 144, 255); // Sky blue color for numbers
  
  //   doc.text(`${totalTransportCost} Tk/-`, 260, finalY); // Under Transport Cost column
  //   doc.text(`${totalProfit} Tk/-`, 260, finalY+10); // Under Remaining Taka column
  
  //   // Save the PDF
  //   doc.save("Profit_Report.pdf");
  // };
  const handleDownloadPDF = () => {
    const doc = new jsPDF("landscape");
  
    // ✅ Title Styling
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Saber Transport Agency - Profit Report", 14, 15);
    doc.setFont("helvetica", "normal"); // Reset font


    if (truck !== "--Select Truck--" && truck !== "") {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(`Truck No: `, 14, 23);
      doc.setFont("helvetica", "bold");
      doc.text(`${truck}`, 40, 23); // Dynamic Truck No
  }

    // doc.setFontSize(12);
    // doc.setFont("helvetica", "bold");
    // doc.text("Truck No : ", 14, 23);
    // doc.setFont("helvetica", "bold"); // Reset font
    // doc.text(`${truck}`, 40, 23);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Date : ", 14, 28);
    doc.setFont("helvetica", "bold"); // Reset font
    doc.text(`${sdate} to ${tdate}`, 40, 28);

    const sortedTraders = [...traders].sort((a, b) => new Date(a.date) - new Date(b.date));
    // ✅ Define Table Headers
    const headers = [
      ["Sl", "Date", "Truck No", "Description", "Quantity", "Price Rate", "Taka", "Driver Salary", "Fuel Expense", "Labour Gratuity", "Toll", "Transport Cost", "Remaining Taka"],
    ];
  
    // ✅ Map traders' data into rows
    const data = sortedTraders.map((trader, index) => [
      index + 1,
      trader.date,
      trader.truckNo,
      trader.description,
      trader.quantityOfCementBagRod,
      trader.priceRate,
      trader.taka,
      trader.driverSalary,
      trader.fuelExpense,
      trader.labourGratuity,
      trader.toll,
      trader.transportCost > 0 && trader.transportCostDescription
        ? `${trader.transportCost} (${trader.transportCostDescription})`
        : trader.transportCost,
      trader.remainingTaka,
    ]);
  
    // ✅ Generate Table with Improved Styling
    autoTable(doc, {
      head: headers,
      body: data,
      startY: 32, // Start position for the table
      styles: { fontSize: 8, cellPadding: 3 },
      headStyles: { fillColor: [0, 102, 204], textColor: [255, 255, 255], fontSize: 10, fontStyle: "bold" }, // Blue header
      alternateRowStyles: { fillColor: [240, 240, 240] }, // Light gray alternating rows
      theme: "grid",
      margin: { top: 20 },
    });
  
    // ✅ Get the final Y position of the table
    const finalY = doc.lastAutoTable.finalY + 10; // Spacing below the table
  
    // ✅ Draw a Separator Line
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(14, finalY - 5, 280, finalY - 5); // Horizontal line for separation
  
    // ✅ Column Alignment for Total Transport Cost & Total Profit
    const transportCostX = 255; // Align under 'Transport Cost'
    const remainingTakaX = 255; // Align under 'Remaining Taka'
  
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
  
    // ✅ Labels
    doc.text("Total Transportation Cost:", 14, finalY+5); 
    doc.text("Total Profit:", 14, finalY + 15);
  
    // ✅ Apply a Blue Color for Key Values
    doc.setTextColor(7 ,89 ,133);
    doc.text(`${totalTransportCost} Tk/-`, transportCostX, finalY+5);
    doc.text(`${totalProfit} Tk/-`, remainingTakaX, finalY + 15);
  
    // ✅ Reset Text Color to Black
    doc.setTextColor(0, 0, 0);
  
    // Save the PDF
    doc.save("Profit_Report.pdf");
  };
  

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(traders.map((trader, index) => ({
      Sl: index + 1,
      Date: trader.date,
      "Truck No": trader.truckNo,
      Description: trader.description,
      "Quantity Of Cement Bag Rod": trader.quantityOfCementBagRod,
      "Price Rate": trader.priceRate,
      Taka: trader.taka,
      "Driver Salary": trader.driverSalary,
      "Fuel Expense": trader.fuelExpense,
      "Labour Gratuity": trader.labourGratuity,
      Toll: trader.toll,
      "Transport Cost": trader.transportCost ,
      "Transport Cost Description": trader.transportCostDescription,
      "Remaining Taka": trader.remainingTaka
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Profit Report");
    XLSX.writeFile(wb, "Profit_Report.xlsx");
  };
  

  const handleShowProfit = () => {
    const month = sdate.split('-')[1];
    const year = sdate.split('-')[0];
    const encodedTruck = encodeURIComponent(truck);
    const url = truck === '--Select Truck--' || truck === ''
      ? `https://saber-traders-backend-d1gm.vercel.app/traders/remainingTaka/${sdate}/${tdate}`
      : `https://saber-traders-backend-d1gm.vercel.app/traders/remainingTaka/${encodedTruck}/${sdate}/${tdate}`;

      // console.log(url)
    axios
      .get(url)
      .then((res) => {
        setTraders(res.data.data);
        setTotalProfit(res.data.total);
        setTotalTransportCost(res.data.transportCost);
        setLoading(false);
        // console.log(res.data.data)
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className='my-2'>
        <div className='flex flex-col border-2 border-emerald-400 rounded-xl p-4 mx-auto w-full max-w-md'>
          <div className='my-1'>
            <label className='mr-4 text-gray-500'>Truck</label>
            <select
              onChange={(e) => setTruck(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              name='cars'
              id='cars'
            >
              <option value='--Select Truck--'>--Select Truck--</option>
              {trucks.map((truck) => (
                <option key={truck._id} value={truck.truckNo}>
                  {truck.truckNo}
                </option>
              ))}
            </select>
          </div>
          <div className='my-1'>
            <label className='mr-4 text-gray-500'>From Date</label>
            <input
              type='date'
              value={sdate}
              onChange={(e) => setSDate(e.target.value)}
              className='border-2 border-gray-400 px-4 py-2 w-full'
            />
          </div>
          <div className='my-1'>
            <label className='mr-4 text-gray-500'>To Date</label>
            <input
              type='date'
              value={tdate}
              onChange={(e) => setTDate(e.target.value)}
              className='border-2 border-gray-400 px-4 py-2 w-full'
            />
          </div>
          <button
            className='p-2 bg-emerald-500 hover:bg-emerald-600 m-8 text-white rounded-lg transition-all duration-200'
            onClick={handleShowProfit}
          >
            Show Profit
          </button>
        </div>
      </div>

      {traders.length > 0 && (
        <>
          <div ref={pdfRef} className='p-4'>
            <div className='flex justify-center items-center'>
              <div>
                <h1 className='text-3xl my-4'>Saber Transport Agency</h1>
              </div>
            </div>

            <div className='overflow-x-auto'>
              <table className='min-w-full table-auto border-separate border-spacing-2'>
                <thead>
                  <tr>
                    <th className='border border-slate-600 rounded-md p-2'>Sl</th>
                    <th className='border border-slate-600 rounded-md p-2'>Date</th>
                    <th className='border border-slate-600 rounded-md p-2'>Truck No</th>
                    <th className='border border-slate-600 rounded-md p-2'>Description</th>
                    <th className='border border-slate-600 rounded-md p-2'>Quantity Of Cement Bag Rod</th>
                    <th className='border border-slate-600 rounded-md p-2'>Price Rate</th>
                    <th className='border border-slate-600 rounded-md p-2'>Taka</th>
                    <th className='border border-slate-600 rounded-md p-2'>Driver Salary</th>
                    <th className='border border-slate-600 rounded-md p-2'>Fuel Expense</th>
                    <th className='border border-slate-600 rounded-md p-2'>Labour Gratuity</th>
                    <th className='border border-slate-600 rounded-md p-2'>Toll</th>
                    <th className='border border-slate-600 rounded-md p-2'>Transport Cost</th>
                    {/* <th className='border border-slate-600 rounded-md p-2'>Transport Cost Description</th> */}
                    <th className='border border-slate-600 rounded-md p-2'>Remaining Taka</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {traders.map((trader, index) => (
                    <tr key={trader._id}>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{index + 1}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.date}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.truckNo}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.description}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.quantityOfCementBagRod}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.priceRate}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.taka}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.driverSalary}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.fuelExpense}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.labourGratuity}</td>
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.toll}</td>
                      {
                        trader.transportCost>0 && trader.transportCostDescription!=="" && trader.transportCostDescription !== undefined?
                        <td className='border border-slate-700 rounded-md text-center p-2'>{trader.transportCost} ({trader.transportCostDescription})</td>:
                        <td className='border border-slate-700 rounded-md text-center p-2'>{trader.transportCost}</td>
                      }
                      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.remainingTaka}</td>
                    </tr>
                  ))} */}

{traders
  .slice() // Create a shallow copy to avoid mutating the original array
  .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sorting in ascending order
  .map((trader, index) => (
    <tr key={trader._id}>
      <td className='border border-slate-700 rounded-md text-center p-2'>{index + 1}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.date}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.truckNo}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.description}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.quantityOfCementBagRod}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.priceRate}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.taka}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.driverSalary}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.fuelExpense}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.labourGratuity}</td>
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.toll}</td>
      {trader.transportCost > 0 && trader.transportCostDescription
        ? <td className='border border-slate-700 rounded-md text-center p-2'>
            {trader.transportCost} ({trader.transportCostDescription})
          </td>
        : <td className='border border-slate-700 rounded-md text-center p-2'>{trader.transportCost}</td>}
      <td className='border border-slate-700 rounded-md text-center p-2'>{trader.remainingTaka}</td>
    </tr>
  ))}
                </tbody>
              </table>
            </div>

            <div className='flex justify-between items-center'>
              <h3 className='text-xl my-8'>Total Profit</h3>
              <div className='flex gap-x-8'>
                <h4 className='text-sky-800 text-xl'>{totalTransportCost}Tk/-</h4>
                <h4 className='text-sky-800 text-xl'>{totalProfit}Tk/-</h4>
              </div>
            </div>
          </div>

          <div className='flex justify-center mt-4'>
          <button
  onClick={handleDownloadPDF}
  className="p-2 m-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-200"
>
  Download PDF
</button>
            <button
          onClick={handleExportExcel}
          className='p-2 m-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200'
        >
          Export To Excel
        </button>
          </div>
        </>
      )}
    </>
  );
};

export default ShowProfit;
