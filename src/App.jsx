import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreateTraders from './pages/CreateTraders'
import EditTraders from './pages/EditTraders'
import DeleteTraders from './pages/DeleteTraders'
import Home from './pages/Home'
import ShowTraders from './pages/ShowTraders'
import Navbar from './components/Navbar.jsx'
import ShowProfit from './pages/ShowProfit'
import CreateTrucks from './pages/CreateTrucks.jsx'
import ShowAllTrucks from './pages/ShowAllTrucks.jsx'
import EditTrucks from './pages/EditTrucks.jsx'
import DeleteTrucks from './pages/DeleteTrucks.jsx'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/traders/create" element={<CreateTraders/>} />
      <Route path="/traders/details/:id" element={<ShowTraders/>} />
      <Route path="/traders/delete/:id" element={<DeleteTraders/>} />
      <Route path="/traders/edit/:id" element={<EditTraders/>} />
      <Route path="/showprofit" element={<ShowProfit/>} />
      <Route path="/trucks/create" element={<CreateTrucks/>} />
      <Route path="/trucks/show" element={<ShowAllTrucks/>} />
      <Route path="/trucks/edit/:id" element={<EditTrucks/>} />
      <Route path="/trucks/delete/:id" element={<DeleteTrucks/>} />
    </Routes>
    </>
    
  )
}

export default App