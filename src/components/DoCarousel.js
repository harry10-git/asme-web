import React from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import videoCosmo from "./assets/cosmo_900p.webm";
import videoDrone from "./assets/drone_900p.webm";
import "aos/dist/aos.css";

const DoCarousel = () => {
  return (
    <div
      className="max-w-[1240px] mx-auto mt-5 "
      data-aos="zoom-in-up"
      ata-aos-delay="1000"
      data-aos-duration="3000"
    >
      <Carousel autoPlay infiniteLoop stopOnHover>
        <div className="flex flex-row items-center justify-center gap-5 px-5">
          <div className="basis-1/2">
            <video
              className="w-[600px] h-auto object-contain"
              src={videoCosmo}
              loop
              autoPlay
              muted
            />
          </div>
          <div className="basis-1/2 mt-16">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700 text-5xl ">
              bots
            </h3>
            <p className="text-gray-300 text-2xl font-light text-left px-10 mt-2">
              The CozmoClench bot is a gripper bot, that can pick up objects,
              run on a given circuit and drop the objects in the target zone.
              The Bot is primarily made of 3D printed parts and wood. The Bot is
              manually controlled. It can either be wired or wirelessly
              controlled using Bluetooth, Dual Frequency Remote or WiFi.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-center gap-5 px-5">
          <div className="basis-1/2">
            <video
              className="w-[600px] h-auto object-contain"
              src={videoDrone}
              loop
              autoPlay
              muted
            />
          </div>
          <div className="basis-1/2 mt-16">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700 text-5xl ">
              drones
            </h3>
            <p className="text-gray-300 text-2xl font-light text-left px-10 mt-2">
              The A.S.M.E. Innovative Additive Manufacturing 3D (IAM3D)
              challenge involves 3D printing an Unmanned Aerial Racing Cargo
              (U.A.R.C.) capable of picking up and dropping off the payloads.
              This competition has every bit of Drone manufacturing involved,
              from choosing the right electronic components to tons of
              re-engineering existing products and creating new designs.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-5 px-5">
          <div className="basis-1/2">
            <video
              className="w-[600px] h-auto object-contain"
              src={videoCosmo}
              loop
              autoPlay
              muted
            />
          </div>
          <div className="basis-1/2 mt-16">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-700 text-5xl ">
              reboat
            </h3>
            <p className="text-gray-300 text-2xl font-light text-left px-10 mt-2">
              Solar powered, fast, agile, and most importantly, floating on
              water. Your competition entry must have the above characteristics.
              If you wish exposure to the technology of harnessing solar power
              and implementation of fluid mechanics, hop on. Bonus points for
              payload delivery, the heavier the better.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DoCarousel;
