import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/"  className="text-2xl font-bold">Saber Transport Agency</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/traders/create" className="hover:text-gray-300">Create</Link></li>
          <li><Link to="/trucks/create" className="hover:text-gray-300">Add Truck</Link></li>
          <li><Link to="/trucks/show" className="hover:text-gray-300">Show Trucks</Link></li>
          <li><Link to="/showprofit" className="hover:text-gray-300">Show Profit</Link></li>
          
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
        <ul className="md:hidden flex flex-col space-y-4 bg-blue-600 text-center py-4">
          <li><Link to="/" className="block py-2 hover:text-gray-300">Home</Link></li>
          <li><Link to="/traders/create" className="block py-2 hover:text-gray-300">Create</Link></li>
          <li><Link to="/trucks/create" className="block py-2 hover:text-gray-300">Add Truck</Link></li>
          <li><Link to="/trucks/show" className="block py-2 hover:text-gray-300">Show Trucks</Link></li>
          <li><Link to="/showprofit" className="block py-2 hover:text-gray-300">Show Profit</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
