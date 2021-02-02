import React from "react";
import STAT from '../assets/icon-brand-recognition.svg';
import COUNT from '../assets/icon-detailed-records.svg';
import PAINT from '../assets/icon-fully-customizable.svg';

export default function Main() {
  const statData = [
    {
      id: 1,
      url: STAT,
      title: "Brand Recongnition",
      text:
        "Boost your brand recognition with each click. Generic links do not mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 2,
      url: COUNT,
      title: "Detailed Records",
      text:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      url: PAINT,
      title: "Fully Customizable",
      text:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <div className='my-12'>
      <div className=' mx-auto py-16 w-11/12 border rounded-lg flex flex-col justify-center items-center space-y-2'>
        <input
          type='text'
          placeholder='Shorten a link here'
          className='border rounded-lg py-2 w-11/12'
        />
        <button className='bg-primary rounded-lg py-2 w-11/12 font-bold'>
          Shorten It!
        </button>
      </div>
      <div className='bg-gray-200 space-y-6 text-center px-4 mt-20'>
        <h1 className='font-bold text-4xl'>Advanced Statistics</h1>
        <p className='text-gray-500'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className='mt-8 mx-4 text-center'>
          {statData.map(item => {
              return <div key={item.id} className='flex flex-col justify-center items-center space-y-4 mt-4'>
                    <img src={item.url} alt="" className='border rounded-full py-2 px-2 bg-blue-500'/>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
              </div>
          })}
      </div>
    </div>
  );
}
