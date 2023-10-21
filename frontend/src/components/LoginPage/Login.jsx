import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ CloseFun }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error messages

    const auth = getAuth(); // Initialize Firebase Auth

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If the authentication is successful, you can redirect to the dashboard or handle it as needed.
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Authentication failed:', error.message);
      setError('Email or password is incorrect.'); // Set the error message
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-80 backdrop-blur-lg">
      <div className="max-w-md w-full p-8 bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg glassmorphism">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Login</h1>
        <button
          onClick={CloseFun}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-bold text-gray-900 text-xl">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-opacity-80 backdrop-blur-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-xl"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-bold text-gray-900 text-xl">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-opacity-80 backdrop-blur-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-xl"
              placeholder="••••••••"
              required
            />
          </div>
          {error && (
            <div className="text-red-600 text-xl font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className="w-full py-3 border border-gray-900 rounded-lg hover:bg-blue-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none font-bold text-xl"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-xl text-gray-700 text-center">
          Don't have an account?{' '}
          <a href="/Register" className="text-gray-900 hover:underline font-bold">
            Sign Up Here
          </a>
        </p>
      </div>
    </div>
  );
}
