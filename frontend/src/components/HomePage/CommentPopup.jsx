import React, { useState } from 'react';

export default function CommentPopup({ onClose }) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    // You can send the comment to a server or update the UI as needed
    console.log('Comment submitted:', comment);
    onClose(); // Close the comment pop-up
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          <img src="/x.svg" alt="Close" className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Add a Comment</h2>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your comment here"
            rows="4"
            required
          />
          <div className="text-right mt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
