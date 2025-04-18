// import React, { useState,useEffect } from 'react';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// import axios from 'axios';
// import dayjs from 'dayjs';

// import { useNavigate } from 'react-router-dom';
// // import { useSnackbar } from 'notistack';

// const CreateTraders = () => {
//   const [trucks,setTrucks] = useState([]);
//   const [truck, setTruck] = useState('');
//   const [date, setDate] = useState('');
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
//   },[]);

//   const handleSaveTraders= () => {
//     const data = {
//             truckNo:truck,
//             date,
//             description: `${from} to ${to}`,
//             quantityOfCementBagRod,
//             priceRate,
//             taka,
//             driverSalary,
//             fuelExpense,
//             labourGratuity,
//             toll,
//             transportCost,
//             remainingTaka
//     };
//     console.log(data);
//     setLoading(true);
//     axios
//       .post('https://saber-traders-backend-d1gm.vercel.app/traders', data)
//       .then(() => {
//         setLoading(false);
//         // enqueueSnackbar('Book Created successfully', { variant: 'success' });
//         navigate('/');
//       })
//       .catch((error) => {
//         setLoading(false);
//         // alert('An error happened. Please Chack console');
//         // enqueueSnackbar('Error', { variant: 'error' });
//         console.log(error); 
//       });
//   };

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl my-1'>Create Record</h1>
//       {loading ? <Spinner /> : ''}
//       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//       <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Truck</label>
//           <select onChange={(e) => setTruck(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'  name="cars" id="cars">
//             <option value="--Select Truck--">--Select Truck--</option>
//             {
//               trucks.map((truck) => (
//                 <option key={truck._id} value={truck.truckNo}>{truck.truckNo}</option>
//               ))
//             }
//           </select>
          
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Date</label>
//           <input
//             type='date'
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>From</label>
//           <input
//             type='text'
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>To</label>
//           <input
//             type='text'
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Quantity</label>
//           <input
//             type='number'
//             value={quantityOfCementBagRod}
//             onChange={(e) => setQuantityOfCementBagRod(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full '
//             style={{appearance:'textfield'}}
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Price Rate</label>
//           <input
//             type='number'
//             value={priceRate}
//             onChange={(e) => setPriceRate(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Taka</label>
//           <input
//             type='number'
//             value={taka}
//             onChange={(e) => setTaka(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Driver Salary</label>
//           <input
//             type='number'
//             value={driverSalary}
//             onChange={(e) => setDriverSalary(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Fuel Expeses</label>
//           <input
//             type='number'
//             value={fuelExpense}
//             onChange={(e) => setFuelExpense(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Labour Gratuity</label>
//           <input
//             type='number'
//             value={labourGratuity}
//             onChange={(e) => setLabourGratuity(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Toll</label>
//           <input
//             type='number'
//             value={toll}
//             onChange={(e) => setToll(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Transport Cost</label>
//           <input
//             type='number'
//             value={transportCost}
//             onChange={(e) => setTransportCost(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'
//           />
//         </div>
//         <div className='my-1'>
//           <label className='text-xl mr-4 text-gray-500'>Remaining Taka</label>
//           <input
//             type='number'
//             value={remainingTaka}
//             onChange={(e) => setRemainingTaka(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2  w-full '
//           />
//         </div>
      
//         <button className='p-2 bg-sky-300 m-8' onClick={handleSaveTraders}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CreateTraders;

import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTraders = () => {
  const [trucks, setTrucks] = useState([]);
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
  const [transportCostDescription, setTransportCostDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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


  const handleSaveTraders = () => {
    const quantity = Number(quantityOfCementBagRod);
    const rate = Number(priceRate);
    const totalTaka = quantity * rate;
  
    const driver = Number(driverSalary);
    const fuel = Number(fuelExpense);
    const labour = Number(labourGratuity);
    const tollFee = Number(toll);
    const transport = Number(transportCost);
  
    const remaining = totalTaka - (driver + fuel + labour + tollFee + transport);
  
    const data = {
      truckNo: truck,
      date,
      description: `${from} to ${to}`,
      quantityOfCementBagRod: quantity,
      priceRate: rate,
      taka: totalTaka,
      driverSalary: driver,
      fuelExpense: fuel,
      labourGratuity: labour,
      toll: tollFee,
      transportCost: transport,
      transportCostDescription: transportCostDescription,
      remainingTaka: remaining,
    };
  
    // console.log(data);
    setLoading(true);
    axios
      .post('https://saber-traders-backend-d1gm.vercel.app/traders', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  

  // const handleSaveTraders = () => {
  //   const data = {
  //     truckNo: truck,
  //     date,
  //     description: `${from} to ${to}`,
  //     quantityOfCementBagRod,
  //     priceRate,
  //     taka: priceRate*quantityOfCementBagRod,
  //     driverSalary,
  //     fuelExpense,
  //     labourGratuity,
  //     toll,
  //     transportCost,
  //     remainingTaka: taka - (driverSalary+fuelExpense+labourGratuity+toll+transportCost),
  //   };
  //   console.log(data)
  //   // setLoading(true);
  //   // axios
  //   //   .post('https://saber-traders-backend-d1gm.vercel.app/traders', data)
  //   //   .then(() => {
  //   //     setLoading(false);
  //   //     navigate('/');
  //   //   })
  //   //   .catch((error) => {
  //   //     setLoading(false);
  //   //     console.log(error);
  //   //   });
  // };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center'>Create Record</h1>
      {loading && <div className='flex justify-center min-h-screen'>
          <Spinner />
        </div>}
      <div className='flex flex-col border-2 border-emerald-400 rounded-xl w-full max-w-lg p-4 mx-auto bg-white shadow-lg'>
        <div className='my-2'>
          <label className='text-lg text-gray-700'>Truck</label>
          <select
            onChange={(e) => setTruck(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          >
            <option value='--Select Truck--'>--Select Truck--</option>
            {trucks.map((truck) => (
              <option key={truck._id} value={truck.truckNo}>
                {truck.truckNo}
              </option>
            ))}
          </select>
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>From</label>
          <input
            type='text'
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>To</label>
          <input
            type='text'
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>Quantity</label>
          <input
            type='number'
            value={quantityOfCementBagRod}
            onChange={(e) => setQuantityOfCementBagRod(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>Price Rate</label>
          <input
            type='number'
            value={priceRate}
            onChange={(e) => setPriceRate(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        {/* <div className='my-2'>
          <label className='text-lg text-gray-700'>Taka</label>
          <input
            type='number'
            value={taka}
            onChange={(e) => setTaka(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div> */}

        <div className='my-2'>
          <label className='text-lg text-gray-700'>Driver Salary</label>
          <input
            type='number'
            value={driverSalary}
            onChange={(e) => setDriverSalary(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>Fuel Expense</label>
          <input
            type='number'
            value={fuelExpense}
            onChange={(e) => setFuelExpense(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>Labour Gratuity</label>
          <input
            type='number'
            value={labourGratuity}
            onChange={(e) => setLabourGratuity(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>Toll</label>
          <input
            type='number'
            value={toll}
            onChange={(e) => setToll(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        <div className='my-2'>
          <label className='text-lg text-gray-700'>Transport Cost</label>
          <input
            type='number'
            value={transportCost}
            onChange={(e) => setTransportCost(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>
        <div className='my-2'>
          <label className='text-lg text-gray-700'>Transport Cost Description</label>
          <input
            type='text'
            value={transportCostDescription}
            onChange={(e) => setTransportCostDescription(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div>

        {/* <div className='my-2'>
          <label className='text-lg text-gray-700'>Remaining Taka</label>
          <input
            type='number'
            value={remainingTaka}
            onChange={(e) => setRemainingTaka(e.target.value)}
            className='border-2 border-gray-300 p-3 w-full rounded-lg'
          />
        </div> */}

        <button
          onClick={handleSaveTraders}
          className='w-full py-3 mt-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-lg transition duration-200'
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateTraders;
