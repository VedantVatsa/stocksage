import React from 'react';

export default function SuccessDialog({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 bg-opacity-80 backdrop-blur-lg">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 glassmorphism">
        <p className="text-3xl text-green-600 font-extrabold mb-6 text-center">Registration Successful</p>
        <div className="flex justify-center mb-6">
          <span role="img" aria-label="Thumbs Up" style={{ fontSize: '72px' }}>
            👍
          </span>
        </div>
        <button
          onClick={onClose}
          className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-600 focus:outline-none font-bold text-lg w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
