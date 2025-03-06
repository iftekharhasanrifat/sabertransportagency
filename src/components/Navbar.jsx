// import React, { useState,useContext } from "react";
// import {UserContext } from '../App'
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   const handleLogout = () => {
//     window.location.reload();
//     sessionStorage.clear();
//   }
//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/"  className="text-2xl font-bold">Saber Transport Agency</Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
//           <li><Link to="/traders/create" className="hover:text-gray-300">Create</Link></li>
//           <li><Link to="/trucks/create" className="hover:text-gray-300">Add Truck</Link></li>
//           <li><Link to="/trucks/show" className="hover:text-gray-300">Show Trucks</Link></li>
//           <li><Link to="/showprofit" className="hover:text-gray-300">Show Profit</Link></li>
//           {loggedInUser.username || user ? (
//   <button 
//     onClick={handleLogout} 
//     className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
//   >
//     Logout
//   </button>
// ) : (
//   <Link 
//     to="/signin" 
//     className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
//   >
//     Login
//   </Link>
// )}
//           {/* <li><Link to="/showprofit" className="hover:text-gray-300">Sign out</Link></li> */}
          
//         </ul>

//         {/* Mobile Menu Button */}
//         <button 
//           onClick={() => setIsOpen(!isOpen)} 
//           className="md:hidden text-2xl focus:outline-none"
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden flex flex-col space-y-4 bg-blue-600 text-center py-4">
//           <li><Link to="/" className="block py-2 hover:text-gray-300">Home</Link></li>
//           <li><Link to="/traders/create" className="block py-2 hover:text-gray-300">Create</Link></li>
//           <li><Link to="/trucks/create" className="block py-2 hover:text-gray-300">Add Truck</Link></li>
//           <li><Link to="/trucks/show" className="block py-2 hover:text-gray-300">Show Trucks</Link></li>
//           <li><Link to="/showprofit" className="block py-2 hover:text-gray-300">Show Profit</Link></li>
//           <li><Link to="/showprofit" className="block py-2 hover:text-gray-300">Sign out</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useContext } from "react";
// import { UserContext } from "../App";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const user = JSON.parse(sessionStorage.getItem("user"));

//   const handleLogout = () => {
//     window.location.reload();
//     sessionStorage.clear();
//   };

//   return (
//     <nav className="bg-blue-600 text-white shadow-md fixed w-full z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold tracking-wide">
//           Saber Transport Agency
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li>
//             <Link to="/" className="hover:text-gray-300 transition">Home</Link>
//           </li>
//           <li>
//             <Link to="/traders/create" className="hover:text-gray-300 transition">Create</Link>
//           </li>
//           <li>
//             <Link to="/trucks/create" className="hover:text-gray-300 transition">Add Truck</Link>
//           </li>
//           <li>
//             <Link to="/trucks/show" className="hover:text-gray-300 transition">Show Trucks</Link>
//           </li>
//           <li>
//             <Link to="/showprofit" className="hover:text-gray-300 transition">Show Profit</Link>
//           </li>

//           {loggedInUser.username || user ? (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/signin"
//               className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
//             >
//               Login
//             </Link>
//           )}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-2xl focus:outline-none"
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden flex flex-col bg-blue-600 text-center py-4 space-y-4">
//           <li>
//             <Link to="/" className="block py-2 hover:text-gray-300 transition">Home</Link>
//           </li>
//           <li>
//             <Link to="/traders/create" className="block py-2 hover:text-gray-300 transition">Create</Link>
//           </li>
//           <li>
//             <Link to="/trucks/create" className="block py-2 hover:text-gray-300 transition">Add Truck</Link>
//           </li>
//           <li>
//             <Link to="/trucks/show" className="block py-2 hover:text-gray-300 transition">Show Trucks</Link>
//           </li>
//           <li>
//             <Link to="/showprofit" className="block py-2 hover:text-gray-300 transition">Show Profit</Link>
//           </li>
//           {loggedInUser.username || user ? (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition w-5/6 mx-auto"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/signin"
//               className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition w-5/6 mx-auto"
//             >
//               Login
//             </Link>
//           )}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useContext } from "react";
// import { UserContext } from "../App";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const user = JSON.parse(sessionStorage.getItem("user"));

//   const handleLogout = () => {
//     window.location.reload();
//     sessionStorage.clear();
//   };

//   return (
//     <nav className="bg-gray-800 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold tracking-wide text-emerald-400">
//           Saber Transport Agency
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li>
//             <Link to="/" className="hover:text-gray-300 transition">Home</Link>
//           </li>
//           <li>
//             <Link to="/traders/create" className="hover:text-gray-300 transition">Create</Link>
//           </li>
//           <li>
//             <Link to="/trucks/create" className="hover:text-gray-300 transition">Add Truck</Link>
//           </li>
//           <li>
//             <Link to="/trucks/show" className="hover:text-gray-300 transition">Show Trucks</Link>
//           </li>
//           <li>
//             <Link to="/showprofit" className="hover:text-gray-300 transition">Show Profit</Link>
//           </li>

//           {loggedInUser.username || user ? (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/signin"
//               className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition"
//             >
//               Login
//             </Link>
//           )}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-2xl focus:outline-none"
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden flex flex-col bg-gray-800 text-center py-4 space-y-4">
//           <li>
//             <Link to="/" className="block py-2 hover:text-gray-300 transition">Home</Link>
//           </li>
//           <li>
//             <Link to="/traders/create" className="block py-2 hover:text-gray-300 transition">Create</Link>
//           </li>
//           <li>
//             <Link to="/trucks/create" className="block py-2 hover:text-gray-300 transition">Add Truck</Link>
//           </li>
//           <li>
//             <Link to="/trucks/show" className="block py-2 hover:text-gray-300 transition">Show Trucks</Link>
//           </li>
//           <li>
//             <Link to="/showprofit" className="block py-2 hover:text-gray-300 transition">Show Profit</Link>
//           </li>
//           {loggedInUser.username || user ? (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md transition w-5/6 mx-auto"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/signin"
//               className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition w-5/6 mx-auto"
//             >
//               Login
//             </Link>
//           )}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const user = JSON.parse(sessionStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("user"));


  const handleLogout = () => {
    window.location.reload();
    // sessionStorage.clear();
    localStorage.clear();

  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          {/* Transport Icon */}
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-8 h-8 text-emerald-400"
>
  <path d="M3 16V6a2 2 0 012-2h10a2 2 0 012 2v10m-6 4a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm12-6h4l3 3v3h-3m-4 0h-2m2 0V8h4m-4 0l3 3" />
</svg>



          {/* Brand Name */}
          <span className="text-2xl font-bold tracking-wide text-emerald-400">
            Saber Transport Agency
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/traders/create" className="hover:text-gray-300 transition">Create</Link>
          </li>
          <li>
            <Link to="/trucks/create" className="hover:text-gray-300 transition">Add Truck</Link>
          </li>
          <li>
            <Link to="/trucks/show" className="hover:text-gray-300 transition">Show Trucks</Link>
          </li>
          <li>
            <Link to="/showprofit" className="hover:text-gray-300 transition">Show Profit</Link>
          </li>

          {loggedInUser.username || user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/signin"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition"
            >
              Login
            </Link>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-800 text-center py-4 space-y-4">
          <li>
            <Link to="/" className="block py-2 hover:text-gray-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/traders/create" className="block py-2 hover:text-gray-300 transition">Create</Link>
          </li>
          <li>
            <Link to="/trucks/create" className="block py-2 hover:text-gray-300 transition">Add Truck</Link>
          </li>
          <li>
            <Link to="/trucks/show" className="block py-2 hover:text-gray-300 transition">Show Trucks</Link>
          </li>
          <li>
            <Link to="/showprofit" className="block py-2 hover:text-gray-300 transition">Show Profit</Link>
          </li>
          {loggedInUser.username || user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md transition w-5/6 mx-auto"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/signin"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition w-5/6 mx-auto"
            >
              Login
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
