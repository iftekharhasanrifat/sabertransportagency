import React,{ createContext,useState } from 'react'
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
import LoginPage from './pages/LoginPage.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Footer from './components/Footer.jsx'

export const UserContext = createContext();
export const ErrorContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <ErrorContext.Provider value={[errorMessage, setErrorMessage]}>
    <div className="flex flex-col min-h-screen">
    
    <Navbar/>
    <div className="flex-grow">
    <Routes>
    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/signin" element={<LoginPage/>} /> 
      <Route path="/traders/create" element={<PrivateRoute><CreateTraders /></PrivateRoute>} />
      <Route path="/traders/details/:id" element={<PrivateRoute><ShowTraders /></PrivateRoute>} />
      <Route path="/traders/delete/:id" element={<PrivateRoute><DeleteTraders /></PrivateRoute>} />
      <Route path="/traders/edit/:id" element={<PrivateRoute><EditTraders /></PrivateRoute>} />
      <Route path="/showprofit" element={<PrivateRoute><ShowProfit /></PrivateRoute>} />
      <Route path="/trucks/create" element={<PrivateRoute><CreateTrucks /></PrivateRoute>} />
      <Route path="/trucks/show" element={<PrivateRoute><ShowAllTrucks /></PrivateRoute>} />
      <Route path="/trucks/edit/:id" element={<PrivateRoute><EditTrucks /></PrivateRoute>} />
      <Route path="/trucks/delete/:id" element={<PrivateRoute><DeleteTrucks /></PrivateRoute>} />
    </Routes>
    </div>
    <Footer/>
    </div>
    </ErrorContext.Provider>
    </UserContext.Provider>
  )
}

export default App