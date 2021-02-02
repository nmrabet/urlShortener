import React from "react";
import HeaderImg from "../assets/illustration-working.svg";

export default function Header() {
  return (
    <div className='xl:flex flex-row-reverse'>
      <img src={HeaderImg} alt='' />
      <div>
        <h1 className='font-extrabold text-4xl'>
          More than just shorter links
        </h1>
        <p className='font-semibold'>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button className='bg-primary rounded-full px-4 py-2 text-white'>
          Get Started
        </button>
      </div>
    </div>
  );
}
