'use client';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
const Error404: React.FC = () => {


  return (
    <div className="bg-darkgreen text-white p-6 md:p-12 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 pop">404 - Page Not Found</h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 lat">The page you are looking for does not exist or has been moved.</p>
        <Link
          href="/"
          className="text-yellow hover:underline text-lg font-semibold "
        >
          Go to Homepage <IoIosArrowForward className='inline'/>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
