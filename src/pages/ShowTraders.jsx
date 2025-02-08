import React , {use, useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
const ShowTraders = () => {
  const { id } = useParams();
  const [trader, setTrader] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
    .get(`https://saber-traders-backend-d1gm.vercel.app/traders/${id}`)
    .then((res) => {
      setTrader(res.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  },[id]);
  return (
      <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Tips</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Date</span>
            <span>{trader.date}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Truck No</span>
            <span>{trader.truckNo}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Description</span>
            <span>{trader.description}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Quantity Of Cement Bag Rod</span>
            <span>{trader.quantityOfCementBagRod}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Price Rate</span>
            <span>{trader.priceRate}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Taka</span>
            <span>{trader.taka}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Driver Salary</span>
            <span>{trader.driverSalary}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Fuel Expense</span>
            <span>{trader.fuelExpense}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Labour Gratuity</span>
            <span>{trader.labourGratuity}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Toll</span>
            <span>{trader.toll}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Transport Cost</span>
            <span>{trader.transportCost}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Remaining Taka</span>
            <span>{trader.remainingTaka}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowTraders