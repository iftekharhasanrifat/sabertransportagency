// // import React, { useState, useEffect } from 'react';
// // import BackButton from '../components/BackButton';
// // import Spinner from '../components/Spinner';
// // import axios from 'axios';
// // import { useNavigate, useParams } from 'react-router-dom';

// // // import { useSnackbar } from 'notistack';

// // const EditTraders = () => {
// //   const [trucks,setTrucks] = useState([]);
// //     const [truck, setTruck] = useState('');
// //     const [date, setDate] = useState('');
// //     const [from, setFrom] = useState('');
// //     const [to, setTo] = useState('');
// //     const [fuelExpense, setFuelExpense] = useState('');
// //     const [quantityOfCementBagRod, setQuantityOfCementBagRod] = useState('');
// //     const [priceRate, setPriceRate] = useState('');
// //     const [taka, setTaka] = useState('');
// //     const [driverSalary, setDriverSalary] = useState('');
// //     const [labourGratuity, setLabourGratuity] = useState('');
// //     const [toll, setToll] = useState('');
// //     const [transportCost, setTransportCost] = useState('');
// //     const [remainingTaka, setRemainingTaka] = useState('');
// //     const [loading, setLoading] = useState(false);
// //     const navigate = useNavigate();
// //     const {id} = useParams();
// //     // const { enqueueSnackbar } = useSnackbar();

// //   useEffect(() => {
// //     setLoading(true);
// //     axios
// //     .get('https://saber-traders-backend-d1gm.vercel.app/trucks')
// //     .then((res) => {
// //       setTrucks(res.data.data);
// //     })
// //     .catch((error) => {
// //       console.error(error.message);
// //     });
// //     axios.get(`https://saber-traders-backend-d1gm.vercel.app/traders/${id}`)
// //     .then((response) => {
// //       setTruck(response.data.truckNo);
// //       setDate(response.data.date)
// //       setFrom(response.data.description.split('to')[0]);
// //       setTo(response.data.description.split('to')[1]);
// //       setQuantityOfCementBagRod(response.data.quantityOfCementBagRod);
// //       setPriceRate(response.data.priceRate);
// //       setTaka(response.data.taka);
// //       setDriverSalary(response.data.driverSalary);
// //       setFuelExpense(response.data.fuelExpense);
// //       setLabourGratuity(response.data.labourGratuity);
// //       setToll(response.data.toll);
// //       setTransportCost(response.data.transportCost);
// //       setRemainingTaka(response.data.remainingTaka);

// //       setLoading(false);
// //       }).catch((error) => {
// //         setLoading(false);
// //         alert('An error happened. Please Chack console');
// //         console.log(error);
// //       });
// //   }, [id])
  
// //   const handleEditTrader = () => {
// //     const data = {
// //       truckNo:truck,
// //       date,
// //       description: `${from} to ${to}`,
// //       quantityOfCementBagRod,
// //       priceRate,
// //       taka,
// //       driverSalary,
// //       fuelExpense,
// //       labourGratuity,
// //       toll,
// //       transportCost,
// //       remainingTaka
// //     };  
// //     setLoading(true);
// //     axios
// //       .put(`https://saber-traders-backend-d1gm.vercel.app/traders/${id}`, data)
// //       .then(() => {
// //         setLoading(false);
// //         // enqueueSnackbar('Book Edited successfully', { variant: 'success' });
// //         navigate('/');
// //       })
// //       .catch((error) => {
// //         setLoading(false);
// //         // alert('An error happened. Please Chack console');
// //         // enqueueSnackbar('Error', { variant: 'error' });
// //         console.log(error);
// //       });
// //   };

// //   return (
// //     <div className='p-4'>
// //       <BackButton />
// //       <h1 className='text-3xl my-4'>Edit Book</h1>
// //       {loading ? <Spinner /> : ''}
// //       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
// //       <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Truck</label>
// //           <select onChange={(e) => setTruck(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'  name="cars" id="cars">
// //             <option value="--Select Truck--">--Select Truck--</option>
// //             {
// //               trucks.map((truck) => (
// //                 <option key={truck._id} value={truck.truckNo}>{truck.truckNo}</option>
// //               ))
// //             }
// //           </select>
          
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Date</label>
// //           <input
// //             type='date'
// //             value={date}
// //             onChange={(e) => setDate(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2 w-full'
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>From</label>
// //           <input
// //             type='text'
// //             value={from}
// //             onChange={(e) => setFrom(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2  w-full '
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>To</label>
// //           <input
// //             type='text'
// //             value={to}
// //             onChange={(e) => setTo(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2  w-full '
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Quantity</label>
// //           <input
// //             type='number'
// //             value={quantityOfCementBagRod}
// //             onChange={(e) => setQuantityOfCementBagRod(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2 w-full '
// //             style={{appearance:'textfield'}}
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Price Rate</label>
// //           <input
// //             type='number'
// //             value={priceRate}
// //             onChange={(e) => setPriceRate(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2  w-full '
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Taka</label>
// //           <input
// //             type='number'
// //             value={taka}
// //             onChange={(e) => setTaka(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2  w-full '
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Driver Salary</label>
// //           <input
// //             type='number'
// //             value={driverSalary}
// //             onChange={(e) => setDriverSalary(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2 w-full'
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Fuel Expeses</label>
// //           <input
// //             type='number'
// //             value={fuelExpense}
// //             onChange={(e) => setFuelExpense(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2  w-full '
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Labour Gratuity</label>
// //           <input
// //             type='number'
// //             value={labourGratuity}
// //             onChange={(e) => setLabourGratuity(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2  w-full '
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Toll</label>
// //           <input
// //             type='number'
// //             value={toll}
// //             onChange={(e) => setToll(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2  w-full '
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Transport Cost</label>
// //           <input
// //             type='number'
// //             value={transportCost}
// //             onChange={(e) => setTransportCost(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2 w-full'
// //           />
// //         </div>
// //         <div className='my-1'>
// //           <label className='text-xl mr-4 text-gray-500'>Remaining Taka</label>
// //           <input
// //             type='number'
// //             value={remainingTaka}
// //             onChange={(e) => setRemainingTaka(e.target.value)}
// //             className='border-2 border-gray-500 px-4 py-2  w-full '
// //           />
// //         </div>
      
// //         <button className='p-2 bg-sky-300 m-8' onClick={handleEditTrader}>
// //           Save
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default EditTraders
// import React, { useState, useEffect } from 'react';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditTraders = () => {
//   const [trucks, setTrucks] = useState([]);
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
//   const { id } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('https://saber-traders-backend-d1gm.vercel.app/trucks')
//       .then((res) => setTrucks(res.data.data))
//       .catch((error) => console.error(error.message));

//     axios
//       .get(`https://saber-traders-backend-d1gm.vercel.app/traders/${id}`)
//       .then((response) => {
//         setTruck(response.data.truckNo);
//         setDate(response.data.date);
//         setFrom(response.data.description.split('to')[0]);
//         setTo(response.data.description.split('to')[1]);
//         setQuantityOfCementBagRod(response.data.quantityOfCementBagRod);
//         setPriceRate(response.data.priceRate);
//         setTaka(response.data.taka);
//         setDriverSalary(response.data.driverSalary);
//         setFuelExpense(response.data.fuelExpense);
//         setLabourGratuity(response.data.labourGratuity);
//         setToll(response.data.toll);
//         setTransportCost(response.data.transportCost);
//         setRemainingTaka(response.data.remainingTaka);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//         alert('An error happened. Please check console');
//         console.log(error);
//       });
//   }, [id]);

//   const handleEditTrader = () => {
//     const data = {
//       truckNo: truck,
//       date,
//       description: `${from} to ${to}`,
//       quantityOfCementBagRod,
//       priceRate,
//       taka,
//       driverSalary,
//       fuelExpense,
//       labourGratuity,
//       toll,
//       transportCost,
//       remainingTaka,
//     };
//     setLoading(true);
//     axios
//       .put(`https://saber-traders-backend-d1gm.vercel.app/traders/${id}`, data)
//       .then(() => {
//         setLoading(false);
//         navigate('/');
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.log(error);
//       });
//   };

//   return (
//     <div className="p-4">
//       <BackButton />
//       <h1 className="text-3xl my-4 text-center font-semibold text-gray-700">Edit Trader</h1>
//       {loading && <Spinner />}

//       <div className="flex flex-col border-2 border-sky-400 rounded-xl max-w-2xl mx-auto p-6 bg-white shadow-lg">
//         {/* Truck Selection */}
//         <div className="mb-3">
//           <label className="block text-gray-500 text-lg mb-1">Truck</label>
//           <select
//             onChange={(e) => setTruck(e.target.value)}
//             className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-sky-500"
//           >
//             <option value="--Select Truck--">--Select Truck--</option>
//             {trucks.map((truck) => (
//               <option key={truck._id} value={truck.truckNo}>
//                 {truck.truckNo}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Input Fields */}
//         {[
//           { label: 'Date', type: 'date', value: date, setter: setDate },
//           { label: 'From', type: 'text', value: from, setter: setFrom },
//           { label: 'To', type: 'text', value: to, setter: setTo },
//           { label: 'Quantity', type: 'number', value: quantityOfCementBagRod, setter: setQuantityOfCementBagRod },
//           { label: 'Price Rate', type: 'number', value: priceRate, setter: setPriceRate },
//           { label: 'Taka', type: 'number', value: taka, setter: setTaka },
//           { label: 'Driver Salary', type: 'number', value: driverSalary, setter: setDriverSalary },
//           { label: 'Fuel Expenses', type: 'number', value: fuelExpense, setter: setFuelExpense },
//           { label: 'Labour Gratuity', type: 'number', value: labourGratuity, setter: setLabourGratuity },
//           { label: 'Toll', type: 'number', value: toll, setter: setToll },
//           { label: 'Transport Cost', type: 'number', value: transportCost, setter: setTransportCost },
//           { label: 'Remaining Taka', type: 'number', value: remainingTaka, setter: setRemainingTaka },
//         ].map((field, index) => (
//           <div key={index} className="mb-3">
//             <label className="block text-gray-500 text-lg mb-1">{field.label}</label>
//             <input
//               type={field.type}
//               value={field.value}
//               onChange={(e) => field.setter(e.target.value)}
//               className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-sky-500"
//             />
//           </div>
//         ))}

//         {/* Save Button */}
//         <button
//           className="bg-sky-500 text-white py-2 rounded-md mt-4 hover:bg-sky-600 transition duration-200"
//           onClick={handleEditTrader}
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditTraders;

import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTraders = () => {
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    // Fetch all trucks
    axios
      .get('https://saber-traders-backend-d1gm.vercel.app/trucks')
      .then((res) => setTrucks(res.data.data))
      .catch((error) => console.error(error.message));

    // Fetch specific trader's data
    axios
      .get(`https://saber-traders-backend-d1gm.vercel.app/traders/${id}`)
      .then((response) => {
        setTruck(response.data.truckNo); // Set selected truck
        setDate(response.data.date);
        setFrom(response.data.description.split('to')[0].trim());
        setTo(response.data.description.split('to')[1].trim());
        setQuantityOfCementBagRod(response.data.quantityOfCementBagRod);
        setPriceRate(response.data.priceRate);
        setTaka(response.data.taka);
        setDriverSalary(response.data.driverSalary);
        setFuelExpense(response.data.fuelExpense);
        setLabourGratuity(response.data.labourGratuity);
        setToll(response.data.toll);
        setTransportCost(response.data.transportCost);
        setRemainingTaka(response.data.remainingTaka);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [id]);

  const handleEditTrader = () => {
    const data = {
      truckNo: truck,
      date,
      description: `${from} to ${to}`,
      quantityOfCementBagRod,
      priceRate,
      taka,
      driverSalary,
      fuelExpense,
      labourGratuity,
      toll,
      transportCost,
      remainingTaka,
    };
    setLoading(true);
    axios
      .put(`https://saber-traders-backend-d1gm.vercel.app/traders/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center font-semibold text-gray-700">Edit Trader</h1>
      {loading && <Spinner />}

      <div className="flex flex-col border-2 border-sky-400 rounded-xl max-w-2xl mx-auto p-6 bg-white shadow-lg">
        {/* Truck Selection */}
        <div className="mb-3">
          <label className="block text-gray-500 text-lg mb-1">Truck</label>
          <select
            value={truck} // Ensure selected truck is displayed
            onChange={(e) => setTruck(e.target.value)}
            className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-sky-500"
          >
            <option value="">-- Select Truck --</option>
            {trucks.map((t) => (
              <option key={t._id} value={t.truckNo}>
                {t.truckNo}
              </option>
            ))}
          </select>
        </div>

        {/* Input Fields */}
        {[
          { label: 'Date', type: 'date', value: date, setter: setDate },
          { label: 'From', type: 'text', value: from, setter: setFrom },
          { label: 'To', type: 'text', value: to, setter: setTo },
          { label: 'Quantity', type: 'number', value: quantityOfCementBagRod, setter: setQuantityOfCementBagRod },
          { label: 'Price Rate', type: 'number', value: priceRate, setter: setPriceRate },
          { label: 'Taka', type: 'number', value: taka, setter: setTaka },
          { label: 'Driver Salary', type: 'number', value: driverSalary, setter: setDriverSalary },
          { label: 'Fuel Expenses', type: 'number', value: fuelExpense, setter: setFuelExpense },
          { label: 'Labour Gratuity', type: 'number', value: labourGratuity, setter: setLabourGratuity },
          { label: 'Toll', type: 'number', value: toll, setter: setToll },
          { label: 'Transport Cost', type: 'number', value: transportCost, setter: setTransportCost },
          { label: 'Remaining Taka', type: 'number', value: remainingTaka, setter: setRemainingTaka },
        ].map((field, index) => (
          <div key={index} className="mb-3">
            <label className="block text-gray-500 text-lg mb-1">{field.label}</label>
            <input
              type={field.type}
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-sky-500"
            />
          </div>
        ))}

        {/* Save Button */}
        <button
          className="bg-sky-500 text-white py-2 rounded-md mt-4 hover:bg-sky-600 transition duration-200"
          onClick={handleEditTrader}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTraders;
