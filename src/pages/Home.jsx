import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { data, Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai";
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

const Home = () => {
  const [traders,setTraders] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
    .get('https://saber-traders-backend-d1gm.vercel.app/traders')
    .then((res) => {
      setTraders(res.data.data);
      
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
        <h1 className='text-3xl my-8'>Tip list</h1>
        <Link to='/traders/create' >
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
                <th className='border border-slate-600 rounded-md'>Operations</th>

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

                      <td className='border border-slate-700 rounded-md text-center'>
                        <div className='flex justify-center gap-x-4'>
                        <Link to={`/traders/details/${trader._id}`}>
                          <BsInfoCircle className='text-green-800 text-2xl'/>
                        </Link>
                        <Link to={`/traders/edit/${trader._id}`}>
                          <AiOutlineEdit className='text-yellow-800 text-2xl'/>
                        </Link>
                        <Link to={`/traders/delete/${trader._id}`}>
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

export default Home