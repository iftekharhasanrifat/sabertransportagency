import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

const CreateTrucks = () => {
    const [truck, setTruck] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { enqueueSnackbar } = useSnackbar();

  const handleSaveTruck = () => {
    const data = {
        truckNo:truck,
    };
    setLoading(true);
    axios
      .post('https://saber-traders-backend-d1gm.vercel.app/trucks', data)
      .then(() => {
        setLoading(false);
        // enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/trucks/show');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        // enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Add Truck</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Truck No</label>
          <input
            type='text'
            value={truck}
            onChange={(e) => setTruck(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
    
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveTruck}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateTrucks