import React from "react";
import videoFile from "./assets/about_us.webm";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div>
      <div className="w-full px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <video src={videoFile} loop autoPlay muted controls width="500px" />

          <div
            className="flex flex-col mt-5"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h1 className="pt-2 ml-14 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700">
              {" "}
              ABOUT US
            </h1>
            <div className="max-w-[590px] pt-3">
              <p className="ml-[52px] text-white font-sans text-xl font-light">
                We, at American Society of Mechanical Engineers- Manipal Student
                Chapter, participate in competitions - nationally and
                internationally, organise workshops and host events of various
                domains. We strive to promote a learning atmosphere and work
                towards an individual's holistic development.
              </p>
            </div>
          </div>
        </div>
      </div>

        
    </div>
  );
};

export default About;
