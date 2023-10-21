import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SuccessDialog from './SuccessDialog';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setShowSuccessDialog(true);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.error('Registration error: This email is already in use.');
        // You can display this error to the user.
      } else {
        console.error('Registration error:', error.message);
      }
    }
  }

  const closeSuccessDialog = () => {
    setShowSuccessDialog(false);
    navigate('/');
  }

  return (
    <section className="bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg glassmorphism">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Create an Account</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:border-indigo-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:border-indigo-600"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none font-extrabold text-lg"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline font-semibold">
            Log in here
          </a>
        </p>
      </div>
      {showSuccessDialog && (
        <SuccessDialog onClose={closeSuccessDialog} />
      )}
    </section>
  );
}
