import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { data, Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai";
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

const ShowAllTrucks = () => {
  const [trucks,setTrucks] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
    .get('https://saber-traders-backend-d1gm.vercel.app/trucks')
    .then((res) => {
      setTrucks(res.data.data);
      
      setLoading(false);
    })
    .catch((error) => {
      console.error(error.message);
      setLoading(false);
    });
  },[]);
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Truck list</h1>
        <Link to='/trucks/create' >
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {
        loading ? (
          <Spinner/>
        ):(
          <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>Sl</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Truck No</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>

              </tr>
            </thead>
            <tbody>
                {
                  trucks.map((truck,index) => (
                    <tr key={truck._id}>
                      <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                      <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{truck.truckNo}</td>

                      <td className='border border-slate-700 rounded-md text-center'>
                        <div className='flex justify-center gap-x-4'>
                        
                        <Link to={`/trucks/edit/${truck._id}`}>
                          <AiOutlineEdit className='text-yellow-800 text-2xl'/>
                        </Link>
                        <Link to={`/trucks/delete/${truck._id}`}>
                          <MdOutlineDelete className='text-red-800 text-2xl'/>
                        </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        )}
    </div>
  )
}

export default ShowAllTrucks