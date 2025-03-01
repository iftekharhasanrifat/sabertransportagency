// import React, { useState, useEffect } from 'react';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// // import { useSnackbar } from 'notistack';

// const EditTrucks = () => {
//   const [trucks,setTrucks] = useState([]);
//     const [truck, setTruck] = useState('');
//     const [date, setDate] = useState('');
//     const [from, setFrom] = useState('');
//     const [to, setTo] = useState('');
//     const [fuelExpense, setFuelExpense] = useState('');
//     const [quantityOfCementBagRod, setQuantityOfCementBagRod] = useState('');
//     const [priceRate, setPriceRate] = useState('');
//     const [taka, setTaka] = useState('');
//     const [driverSalary, setDriverSalary] = useState('');
//     const [labourGratuity, setLabourGratuity] = useState('');
//     const [toll, setToll] = useState('');

//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const {id} = useParams();
//     // const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     setLoading(true);
//     axios.get(`https://saber-traders-backend-d1gm.vercel.app/trucks/${id}`)
//     .then((response) => {
//       setTruck(response.data.truckNo);
//       setLoading(false);
//       }).catch((error) => {
//         setLoading(false);
//         alert('An error happened. Please Chack console');
//         console.log(error);
//       });
//   }, [id])
  
//   const handleEditTruck = () => {
//     const data = {
//       truckNo:truck,
//     };  
//     setLoading(true);
//     axios
//       .put(`https://saber-traders-backend-d1gm.vercel.app/trucks/${id}`, data)
//       .then(() => {
//         setLoading(false);
//         // enqueueSnackbar('Book Edited successfully', { variant: 'success' });
//         navigate('/trucks/show');
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
//       <h1 className='text-3xl my-4'>Edit Book</h1>
//       {loading ? <Spinner /> : ''}
//       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Truck No</label>
//           <input
//             type='text'
//             value={truck}
//             onChange={(e) => setTruck(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'
//           />
//         </div>
    

//         <button className='p-2 bg-sky-300 m-8' onClick={handleEditTruck}>
//           Save
//         </button>
//       </div>
//     </div>
//   )
// }

// export default EditTrucks
import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTrucks = () => {
  const [truck, setTruck] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://saber-traders-backend-d1gm.vercel.app/trucks/${id}`)
      .then((response) => {
        setTruck(response.data.truckNo);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, [id]);

  const handleEditTruck = () => {
    const data = {
      truckNo: truck,
    };
    setLoading(true);
    axios
      .put(`https://saber-traders-backend-d1gm.vercel.app/trucks/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/trucks/show');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="p-6">
      <BackButton />
      <h1 className="text-3xl my-6 text-center font-semibold text-gray-700">Edit Truck</h1>
      {loading && <div className='flex justify-center  min-h-screen'>
          <Spinner />
        </div>}

      <div className="flex flex-col border-2 border-emerald-400 rounded-xl max-w-lg mx-auto p-6 bg-white shadow-lg">
        {/* Truck Number Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-lg mb-2">Truck No</label>
          <input
            type="text"
            value={truck}
            onChange={(e) => setTruck(e.target.value)}
            className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-sky-500"
          />
        </div>

        {/* Save Button */}
        <button
          className=" text-white py-2 rounded-md mt-4 bg-emerald-500 hover:bg-emerald-600 transition duration-200"
          onClick={handleEditTruck}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTrucks;
