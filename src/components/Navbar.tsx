import React from "react";
import Logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <div className='my-0 mx-auto max-w-5xl py-7 px-4'>
      <div className='flex justify-between w-full'>
        <img src={Logo} alt=""/>
        <button>Menu</button>
      </div>
    </div>
  );
}
