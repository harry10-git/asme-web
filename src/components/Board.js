import React from 'react'
import boardPic from './assets/board.jpg'
import { TypeAnimation } from 'react-type-animation';

const Board = () => {
  return (
    <div className='max-w-[1240px] mx-auto mt-[10rem]'
         data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="200"
    >

        <div className='flex flex-row'>

            <div className='basis-1/2'>
            <img className='w-[900px] rounded-xl' src={boardPic} alt="" />
            </div>

            <div className='basis-1/2 flex flex-col items-center justify-center'>
                <h3 className='text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500'>Meet the board</h3>
                <div className='text-blue-300 text-5xl'>
                <TypeAnimation
      sequence={[
        '2022', // Types 2022
        1000, // Waits 1s
        'to', // 
        500, // Waits .5s
        '2023',
        1000,
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

        <h5 className='p-10 text-5xl text-white'>This section needs updates.......</h5>
    </div>
  )
}

export default Board