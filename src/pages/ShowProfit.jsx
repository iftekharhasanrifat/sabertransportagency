import React, { useState,useEffect, useRef  } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import {useReactToPrint } from 'react-to-print';
import html2pdf from 'html2pdf.js';


const ShowProfit = () => {
    const [trucks,setTrucks] = useState([]);
    const [profits,setProfits] = useState([]);
  const [truck, setTruck] = useState('');
  const [date, setDate] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fuelExpense, setFuelExpense] = useState('');
  const [quantityOfCementBagRod, setQuantityOfCementBagRod] = useState('');
  const [priceRate, setPriceRate] = useState('');
  const [taka, setTaka] = useState('');
  const [driverSalary, setDriverSalary] = useState('');
  const [labourGratuity, setLabourGratuity] = useState('');
  const [toll, setToll] = useState('');
  const [transportCost, setTransportCost] = useState('');
  const [remainingTaka, setRemainingTaka] = useState('');
  const [loading, setLoading] = useState(false);
  const [traders,setTraders] = useState([]);
  const [totalProfit,setTotalProfit] = useState(0);
  const [totalTransportCost,setTotalTransportCost] = useState(0);
  
  const navigate = useNavigate();
  // const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
    .get('https://saber-traders-backend-d1gm.vercel.app/trucks')
    .then((res) => {
      setTrucks(res.data.data);
    })
    .catch((error) => {
      console.error(error.message);
    });

    // axios
    // .get('https://saber-traders-backend-d1gm.vercel.app/traders')
    // .then((res) => {
    //   setTraders(res.data.data);
      
    //   setLoading(false);
    // })
    // .catch((error) => {
    //   console.error(error.message);
    //   setLoading(false);
    // });
  },[]);

  const pdfRef = useRef();

  const handleDownloadPDF = () => {
    const element = pdfRef.current;

    const opt = {
        margin: 15,
        filename: "Profit_Report.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    };

    html2pdf().set(opt).from(element).save();
};

  const handleShowProfit = () => {
    const month = date.split('-')[1];
    const year = date.split('-')[0];
    const encodedTruck = encodeURIComponent(truck);
    const url = `https://saber-traders-backend-d1gm.vercel.app/traders/remainingTaka/${encodedTruck}/${month}/${year}`;
    // console.log(url);
    if(truck === '--Select Truck--' || truck === '' && date!==''){
        axios
        .get(`https://saber-traders-backend-d1gm.vercel.app/traders/remainingTaka/${month}/${year}`)
        .then((res) => {
          setTraders(res.data.data);
          setTotalProfit(res.data.total);
          setTotalTransportCost(res.data.transportCost);
          console.log(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
          setLoading(false);
        });
      
    }
    else{
        axios
    .get(`https://saber-traders-backend-d1gm.vercel.app/traders/remainingTaka/${truck}/${month}/${year}`)
    .then((res) => {
      setTraders(res.data.data);
      setTotalProfit(res.data.total);
      setTotalTransportCost(res.data.transportCost);
      console.log(res.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error.message);
      setLoading(false);
    });
    }
    // console.log({
    //     truck,month:date.split('-')[1],year:date.split('-')[0]
    // });
  }

  return (
    <>
    <div className='my-2'>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-1'>
          <label className=' mr-4 text-gray-500'>Truck</label>
          <select onChange={(e) => setTruck(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'  name="cars" id="cars">
            <option value="--Select Truck--">--Select Truck--</option>
            {
              trucks.map((truck) => (
                  <option key={truck._id} value={truck.truckNo}>{truck.truckNo}</option>
              ))
            }
          </select>
          
        </div>
        <div className='my-1'>
          <label className=' mr-4 text-gray-500'>Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-gray-400 px-4 py-2 w-full'
            />
        </div>
        <button className='p-2 bg-sky-500 m-8' onClick={handleShowProfit} >
          Show Profit
        </button>
        </div>
    </div>{
        traders.length>0 && <>
        <div ref={pdfRef} className='p-4'>
        <div className='flex justify-center items-center'>
            <div>
            <h1 className='text-3xl my-4'>Saber Transport Agency</h1>
            </div>
        </div>
      
      
      <table  className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>Sl</th>
            <th className='border border-slate-600 rounded-md'>Date</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Truck No</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Description</th>
            <th className='border border-slate-600 rounded-md'>Quantity Of Cement Bag Rod</th>
            <th className='border border-slate-600 rounded-md'>Price Rate</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Taka</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Driver Salary</th>
            <th className='border border-slate-600 rounded-md'>Fuel Expense</th>
            <th className='border border-slate-600 rounded-md'>Labour Gratuity</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Toll</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Transport Cost</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Remaining Taka</th>
            
          </tr>
        </thead>
        <tbody>
            {
              traders.map((trader,index) => (
                <tr key={trader._id}>
                  <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{trader.date}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{trader.truckNo}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{trader.description}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{trader.quantityOfCementBagRod}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{trader.priceRate}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{trader.taka}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{trader.driverSalary}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{trader.fuelExpense}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{trader.labourGratuity}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{trader.toll}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{trader.transportCost}</td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{trader.remainingTaka}</td>

                </tr>
              ))
            }
        </tbody>
      </table>
      

    <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Total Ptofit</h1>
        <div className='flex gap-x-8'>
        <h2 className='text-sky-800 text-3xl'>{totalTransportCost}Tk/-</h2>
        <h2 className='text-sky-800 text-3xl'>{totalProfit}Tk/-</h2>
        </div>
    </div>
    
</div>
<div>
<button onClick={handleDownloadPDF} className='p-2 bg-green-500 text-white mt-4'>
                        Download PDF
                    </button>
</div>
        </>

    }
    
            </>
    
    
  )
}

export default ShowProfit