import React from "react";
import Logo from "../assets/logo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div className='text-center py-6 space-y-4'>
        <h1 className='text-2xl font-bold'>Boost your links today</h1>
        <button className='bg-primary rounded-full py-2 px-4 text-white font-bold'>
          Get Started
        </button>
      </div>
      <div className='bg-fourth flex flex-col justify-center items-center text-text text-center py-12 space-y-8'>
        <img src={Logo} alt='' />
        <div>
          <h3 className='font-bold pb-4'>Features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div>
          <h3 className='font-bold pb-4'>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div>
          <h3 className='font-bold pb-4'>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className='flex space-x-4'>
          <AiFillFacebook size='30' />
          <AiOutlineTwitter size='30' />
          <FaPinterest size='30' />
          <AiOutlineInstagram size='30' />
        </div>
      </div>
    </div>
  );
}
