import React from 'react';
import Login from '../LoginPage/Login';

export default function Page1() {
  function Close() {
    const loginModel = document.getElementById('LoginModel');
    loginModel.close();
  }

  return (
    <div className="flex flex-col md:flex-row items-center p-4 mt-8 bg-indigo-100 min-h-screen">
      <div className="w-full md:w-1/2 p-5 text-center ml-0 mr-0">
        <img
          className="w-full max-w-[400px] rounded-lg"
          src="/Slide1.webp"
          alt="Slide1"
        />
      </div>
      <div className="w-full md:w-1/2 p-5 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-800">
          Enter the <span className="text-indigo-600">Metaverse</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-indigo-700 my-4 tracking-wide">
          Unlock the potential of data-driven insights for smarter decisions in the digital realm.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-indigo-700 tracking-wide">
          Join us on this immersive journey to revolutionize your retail experience.
        </p>
        <p className="text-indigo-700 mt-4 text-base md:text-lg lg:text-xl tracking-tighter">
          Ready to get started? Dive into the Metaverse by signing in below.
        </p>
        <dialog id="LoginModel" className="w-auto p-5 opacity-100 fixed top-1 rounded-md">
          <Login CloseFun={Close} />
        </dialog>
        <button
          onClick={() => {
            const loginModel = document.getElementById('LoginModel');
            loginModel.showModal();
          }}
          className="mt-6 px-6 py-3 text-base text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
            />
          </svg>
          Enter the Metaverse
        </button>
      </div>
    </div>
  );
}
