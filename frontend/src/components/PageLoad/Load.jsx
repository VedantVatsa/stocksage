import React, { useState, useEffect } from 'react';

export default function Load() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const showLoading = () => {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Set the timeout to 5 seconds
    };

    // Initial call to show loading
    showLoading();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-screen flex flex-col justify-center items-center text-white">
          <div className="text-4xl font-extrabold hover:bg-yellow-500 p-4 rounded-lg cursor-pointer">
            Embrace the Metaverse Adventure!
          </div>

          <div className="mt-16 flex justify-center items-center">
            <div className="flex-row justify-center items-center flow-root bg-white border border-gray-300 rounded-lg shadow-md md:max-w-xl dark:border-gray-700 dark-bg-gray-800 dark-hover-bg-gray-700">
              <div className="flex justify-center animate-bounce">
                {/* Add an image or animation representing the metaverse adventure */}
                {/* <img
                  className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-60 md-rounded-none md-rounded-l-lg"
                  src="/path/to/metaverse-image.jpg"
                  alt="Metaverse Adventure"
                /> */}

              </div>
            </div>
          </div>

          <div className="text-4xl font-extrabold hover:bg-yellow-500 mt-12 p-4 rounded-lg cursor-pointer">
            Uniting You with Our Virtual World
          </div>

          <div className="flex justify-center items-center p-2 mt-8 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 animate-spin">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

            <h5 className="text-3xl">Loading the Metaverse...</h5>
          </div>
        </div>
      )}
    </>
  );
}
