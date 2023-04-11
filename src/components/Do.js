import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Do = () => {
  return (
    <div className='p-2 border-dashed border-2 border-sky-500 rounded-2xl max-w-[840px] mx-auto flex justify-center mt-14' data-aos="zoom-in-down" data-aos-duration="1500">


    <div className='flex flex-col'>

    <h2 className='text-7xl italic text-white'>So, what do we <span className='font-bold p-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700'>DO?</span></h2>

    <div className='text-green-300 italic text-4xl pt-8 text-center'>

    <TypeAnimation
      sequence={[
        'bots', // Types 'One'
        1000, // Waits 1s
        'drones', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'hpvc',
        1000,
        'reboat', 1000 
        // () => {
        //   console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        // }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />

    </div>

    
    </div>

    </div>
  )
}

export default Do