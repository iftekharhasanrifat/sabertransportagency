import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold">Saber Transport Agency</h2>
            <p className="text-gray-400 mt-2">
              Reliable & Efficient Transport Solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400 mt-2">Email: info@sabertransport.com</p>
            <p className="text-gray-400">Phone: +880 1234-567890</p>
            <p className="text-gray-400">Address: Chittagong, Bangladesh</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Saber Transport Agency. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Developed by <span className="text-blue-400">Iftekhar Hasan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
