import React from "react";
import "@lottiefiles/lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  AOS.init();

  return (
    <div className="flex justify-between items-center px-10">
      <div
        className="flex flex-col w-full mx-auto p-4 max-w-[1240px] ml-16 px-16"
        data-aos="zoom-in-right"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <h1 className="flex flex-row font-medium font-sans text-8xl text-white">
          we are
        </h1>

        <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700">
          asme manipal
        </h2>

        <p className="mt-5 text-white w-[450px] font-sans text-2xl font-light">
          We are a Premier Interdisciplinary Technical Club of MIT, Manipal.
          Experience of over half a decade and a pedigree of more than 140 years
          comes into fruition here.
        </p>
      </div>

      <div
        className="flex flex-col mr-16 mt-8 mx-auto"
        data-aos="zoom-in-left"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets1.lottiefiles.com/packages/lf20_tffkxdae.json"
          style={{ width: 40 + "rem" }}
        ></lottie-player>
      </div>
    </div>
  );
};

export default Intro;
