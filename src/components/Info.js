import React from "react";
import eventPng from "./assets/events.png";
import compPng from "./assets/competitions.png";
import "aos/dist/aos.css";


const Info = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto pt-5">
      <div
        className="flex flex-row items-center justify-center gap-5 px-5"
        data-aos="fade-right"
        ata-aos-delay="1000"
        data-aos-duration="1000"
      >
        <div className="basis-1/2">
          <h3 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700">
            Events
          </h3>
          <p className="text-white text-2xl pt-4 font-light leading-8">
            Throughout the year, we organize several events that allow the
            student community to expand their knowledge. These include Minerva,
            Providentia and Stick Hero amongst others. We also conduct multiple
            Cleanliness Drives, offering community service hours as reward and
            Industrial Visits for providing practical insights into various
            engineering fields.
          </p>
        </div>
        <div className="basis-1/2 items-center justify-center">
          <img
            className="h-[300px] object-contain px-8 mx-auto"
            src={eventPng}
            alt=""
          />
        </div>
      </div>

      <div
        className="flex flex-row-reverse items-center justify-center gap-5 px-5 mt-10"
        data-aos="fade-left"
        ata-aos-delay="1000"
        data-aos-duration="1000"
      >
        <div className="basis-1/2">
          <h3 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700">
            Competitions
          </h3>
          <p className="text-white text-2xl pt-4 font-light leading-8">
            Crucial to enhancing technical skills, gaining practical knowledge
            and building a team spirit, the various competitions we take part
            in, at the national level are BITS Quark, IIT Bombay Techfest, ASME
            EFx while at the international level, the ASME Asia-Pacific E-Fest.
          </p>
        </div>
        <div className="basis-1/2 items-center justify-center">
          <img
            className="h-[300px] object-contain px-8 mx-auto"
            src={compPng}
            alt=""
          />
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-center gap-5 px-5 mt-10"
        data-aos="fade-right"
        ata-aos-delay="1000"
        data-aos-duration="1000"
      >
        <div className="basis-1/2">
          <h3 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700">
            Workshops
          </h3>
          <p className="text-white text-2xl pt-4 font-light leading-8">
            Ranging from technical workshops of 3D Modelling Software and
            Arduino to non-technical ones like Graphic Design and Video Editing,
            we provide opportunities to learn various software like Fusion 360,
            AutoCAD, Photoshop, Premier Pro and so on. Some of our external
            workshops include 3D Printing Automation, Pneumatics, Tribology,
            ‘Fuse It Up’ etc.
          </p>
        </div>
        <div className="basis-1/2 items-center justify-center">
          <img
            className="h-[300px] object-contain px-8 mx-auto"
            src={eventPng}
            alt=""
          />
        </div>
      </div>

      <div
        className="flex flex-row-reverse items-center justify-center gap-5 px-5 mt-10"
        data-aos="fade-left"
        ata-aos-delay="1000"
        data-aos-duration="1000"
      >
        <div className="basis-1/2">
          <h3 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700">
            Webinars
          </h3>
          <p className="text-white text-2xl pt-4 font-light leading-8">
            Covering a variety of technical fields while collaborating with
            leading institutions and intellectuals to provide the best in-depth
            information possible. With topics covering Motorsports and
            Biomimicry to Publishing Research and Higher Education Abroad, we
            try our best to cover just about everything!
          </p>
        </div>
        <div className="basis-1/2 items-center justify-center">
          <img
            className="h-[300px] object-contain px-8 mx-auto"
            src={compPng}
            alt=""
          />
        </div>
      </div>


      {/* <div className="mt-10 h-2 border-dashed border-b-2 border-sky-500 w-[50%] mx-auto">

      </div> */}

    </div>
  );
};

export default Info;
