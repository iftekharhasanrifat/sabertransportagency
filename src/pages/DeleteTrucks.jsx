// import React, { useState } from 'react';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// // import { useSnackbar } from 'notistack';

// const DeleteTrucks = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   // const { enqueueSnackbar } = useSnackbar();

//   const handleDeleteBook = () => {
//     setLoading(true);
//     axios
//       .delete(`https://saber-traders-backend-d1gm.vercel.app/trucks/${id}`)
//       .then(() => {
//         setLoading(false);
//         // enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
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
//       <h1 className='text-3xl my-4'>Delete Record</h1>
//       {loading ? <Spinner /> : ''}
//       <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
//         <h3 className='text-2xl'>Are You Sure You want to delete this Trcuk?</h3>

//         <button
//           className='p-4 bg-red-600 text-white m-8 w-full'
//           onClick={handleDeleteBook}
//         >
//           Yes, Delete it
//         </button>
//       </div>
//     </div>
//   )
// }

// export default DeleteTrucks;
import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteTrucks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteTruck = () => {
    setLoading(true);
    axios
      .delete(`https://saber-traders-backend-d1gm.vercel.app/trucks/${id}`)
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
      <h1 className="text-3xl my-6 text-center font-semibold text-gray-700">Delete Truck</h1>
      {loading && <div className='flex justify-center min-h-screen'>
          <Spinner />
        </div>}

      <div className="flex flex-col items-center border-2 border-rose-500 bg-white rounded-xl max-w-md mx-auto p-6 shadow-lg">
        <h3 className="text-2xl text-gray-800 font-semibold text-center">
          ⚠️ Are you sure you want to delete this truck?
        </h3>

        <button
          className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-md mt-6 transition duration-200"
          onClick={handleDeleteTruck}
        >
          Yes, Delete It
        </button>
      </div>
    </div>
  );
};

export default DeleteTrucks;
