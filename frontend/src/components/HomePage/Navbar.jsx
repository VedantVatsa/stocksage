import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function Close() {
    const loginModel = document.getElementById('LoginModel');
    loginModel.close();
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-purple-900 via-indigo-800 to-indigo-700 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="block text-white md:hidden p-3 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 cursor-pointer ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
          <span className="hidden md:block text-2xl text-white font-semibold">StockSage</span>
        </div>

        <div className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:justify-between text-lg text-white font-Inter space-x-4 md:space-x-0 md:pt-0 md:m-0">
            <li>
              <a
                className="block py-2 px-4 hover:text-indigo-300"
                href="/#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-4 hover:text-indigo-300"
                href="/About"
              >
                About
              </a>
            </li>
            <li>
              <button
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md cursor-pointer" 
                onClick={() => {
                  const loginModel = document.getElementById('LoginModel');
                  loginModel.showModal();
                }}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
