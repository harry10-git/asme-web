import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Vission = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid grid-cols-2 gap-12 mt-32' data-aos="zoom-in-up" data-aos-duration="1500">

    <div className='text-center'>
        <h3 className='text-4xl p-2 font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700'>VISSION</h3>
        <p className='text-white text-2xl p-5'>To be the premier resource for Manipal's student community.</p>
    </div>

    <div className='text-center'>
        <h3 className='text-4xl p-2 font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700'>MISSION</h3>
        <p className='text-white text-2xl pt-5'>To establish an engineering fraternity for the benefit of Manipal’s student community.</p>
    </div>

    </div>
  )
}

export default Vission