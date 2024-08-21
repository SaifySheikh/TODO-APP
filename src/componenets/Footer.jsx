import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Task<span className="text-blue-500">X</span>. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact Me
          </a>
        </div>
        <div>
            <h5>Made With 💓 - Mohammad Saify Sheikh</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
