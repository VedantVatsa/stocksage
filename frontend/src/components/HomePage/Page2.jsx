import React from 'react';

export default function Slide2() {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 mt-0 bg-gradient-to-b from-purple-900 via-indigo-700 to-indigo-500 min-h-screen">
      <div className="w-full md:w-1/2 p-5 text-center ml-0 mr-0">
        <img
          className="w-full max-w-[400px] rounded-lg"
          src="/Slide2.webp"
          alt="Slide2"
        />
      </div>
      <div className="w-full md:w-1/2 p-5 flex flex-col items-center justify-center bg-indigo-100 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-800">
          Unlock the Future with <span className="text-indigo-600">AI</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-indigo-700 mt-4 tracking-wide">
          Discover how AI can optimize your business operations, boost efficiency, and drive growth in the Metaverse.
        </p>
        <p className="text-indigo-700 text-lg mt-4 tracking-wide">
          Harness the power of artificial intelligence to revolutionize your success story in the digital realm.
        </p>
        <p className="text-indigo-700 mt-4 text-base md:text-lg lg:text-xl tracking-tighter">
          Ready to explore? Continue to learn more about our AI-driven solutions.
        </p>
      </div>
    </div>
  );
}
