import React from 'react'
// import AOS from 'aos';
import 'aos/dist/aos.css';
import "@lottiefiles/lottie-player";

const Vission = () => {
  return (
    <div className='max-w-[1280px] mx-auto grid grid-cols-3 gap-5 mt-32' data-aos="zoom-in-up" data-aos-duration="1500">

    <div className='text-center'>
        <h3 className='text-4xl p-2 font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700'>VISSION</h3>
        <p className='text-white text-2xl p-5'>To be the premier resource for Manipal's student community.</p>
    </div>

    <div className='text-center'>
        <h3 className='text-4xl p-2 font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700'>MISSION</h3>
        <p className='text-white text-2xl pt-5'>To establish an engineering fraternity for the benefit of Manipal’s student community.</p>
    </div>

    <div className='ml-12 mt-[-25px]'>
    <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_ofa3xwo7.json"
          style={{ width: 80 + "%" }}
        ></lottie-player>
    </div>

    </div>
  )
}

export default Vission