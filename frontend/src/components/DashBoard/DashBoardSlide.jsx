import React, { useState } from 'react';
import LoadFile from '../PageLoad/FileLoad';
import Nav from '../HomePage/Nav';

export default function DashBoardSlide() {
  const [Data, SetData] = useState([]);
  const [Uploading, SetUploading] = useState(false);
  const [File, SetFile] = useState(null);
  const formData = new FormData();

  async function Upload_File(e) {
    e.preventDefault();

    if (File) {
      formData.append("file", File);

      try {
        const response = await fetch("http://localhost:8000/data", {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          const roundedData = data.map((item) => ({
            ...item,
            PredictedQuantity: Math.round(item.PredictedQuantity),
          }));
          SetData(roundedData);
        } else {
          console.error('Failed to upload the file.');
        }
      } catch (error) {
        console.error('An error occurred while uploading the file:', error);
      } finally {
        document.getElementById('file').value = '';
      }
    } else {
      console.error('No file selected.');
    }
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 min-h-screen text-white font-sans flex">
      <Nav />
      <div className="flex-1 p-4 mt-0">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Welcome To the AI World</h1>
        <div className="flex flex-col items-center mb-8">
          <p className="text-lg text-gray-300 text-center mb-4">
            Upload your past sales data with StockCode, TotalPrice, and UnitPrice columns to discover the top 10 selling products.
          </p>
          <form onSubmit={Upload_File} className="flex flex-col items-center space-y-4 w-full">
            <input
              onChange={(e) => SetFile(e.target.files[0])}
              type="file"
              id="file"
              className="bg-white border border-gray-300 text-gray-800 text-lg rounded-lg py-3 px-4 focus:ring-4 focus:border-yellow-500 w-full focus:outline-none"
              placeholder="Select File"
              required
            />
            {Uploading ? (
              <LoadFile />
            ) : (
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-lg py-3 px-4 focus:ring-2 focus:ring-gray-200 w-full focus:outline-none"
              >
                Upload Now
              </button>
            )}
          </form>
        </div>

        <div className="text-center text-gray-300">
          <h2 className="text-4xl font-semibold mb-4 text-yellow-400">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-left text-gray-300">
            <div className="flex items-center">
              <span className="mr-2 text-yellow-600 text-2xl">1.</span> Upload a CSV file containing sales data with StockCode, TotalPrice, and UnitPrice columns.
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-yellow-600 text-2xl">2.</span> The data is preprocessed and transformed using a machine learning model.
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-yellow-600 text-2xl">3.</span> Predictions are made to estimate the quantity and revenue of each product sold.
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-yellow-600 text-2xl">4.</span> The system identifies the top 10 selling products based on these predictions.
            </div>
          </div>
          <p className="mt-8 text-lg text-gray-300">
            Our AI model has been trained with real data to make these predictions as accurate as possible.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Our model has achieved an accuracy rate of over 90% in identifying the top-selling products, making it a reliable tool for your business.
          </p>
        </div>

        {Array.isArray(Data) && Data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {Data.map((item, index) => (
              <div key={index} className="p-4 bg-white text-lg text-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="text-yellow-600 text-lg font-semibold">
                  StockCode - {item.StockCode}
                </div>
                <div className="text-blue-600 text-lg font-semibold mt-2">
                  Predicted Quantity - {item.PredictedQuantity}
                </div>
                <div className="text-green-600 text-lg font-semibold mt-2">
                  Predicted Revenue - {item.PredictedRevenue}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center text-lg">
            No data available. Please upload a CSV file to get the top 10 products.
          </div>
        )}

      </div>
    </div>
  );
}
