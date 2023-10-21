import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';

export default function Home() {
  return (
    <div className='bg-white min-h-screen text-black font-sans'>
      <Page1 />
      <Page2 />
    </div>
  );
}
