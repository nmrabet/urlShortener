import React from "react";
import HeaderImg from "../assets/illustration-working.svg";

export default function Header() {
  return (
    <div className='xl:flex flex-row-reverse'>
      <img src={HeaderImg} alt='' />
      <div className='text-center space-y-6 px-16 pt-8'>
        <h1 className='font-bold text-5xl'>More than just shorter links</h1>
        <p className='font-semibold'>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button className='bg-primary rounded-full px-4 py-2 text-white font-bold'>
          Get Started
        </button>
      </div>
    </div>
  );
}
