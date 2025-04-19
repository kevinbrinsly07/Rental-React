import React from "react";
import "./hero.css";
import img2 from "../../assets/img2.png";
import CarBrandsList from "../carBrandsList";

const Hero = () => {
  return (
    <div id="home">
      <div className="h-screen">
        <div className="wrapper relative w-full h-[80px] 2xl:mt-20">
          <h1 className="absolute top-15 left-18 md:left-40 2xl:left-40 2xl:text-[80px] text-8xl md:text-[100px] z-50">
            Best <br/>Vehicles<br/>for
            <span className="text-8xl md:text-[100px] font-extrabold text-red-500">
              {" "}
              Rent
            </span>
          </h1>
        </div>
        <div className="wrapper relative w-full h-[400px]">
          <img
            className="absolute top-13 right-40 md:w-[400px] md:top-0 lg:right-40 2xl:right-100 2xl:top-10 z-20"
            src={img2}
            alt="car"
            width={500}
          />
          <img
            className="hidden absolute top-13 right-40 2xl:right-170 2xl:top-13 2xl:block z-30"
            src={img2}
            alt="car"
            width={500}
          />
          <img
            className="hidden absolute top-13 right-40 md:w-[400px] md:top-0 lg:right-40 2xl:right-45 2xl:top-5 2xl:block z-10"
            src={img2}
            alt="car"
            width={500}
          />
        </div>
        <p className="hidden 2xl:block 2xl:text-2xl text-white max-w-4xl mx-auto text-center leading-relaxed mt-20">
        Discover the best selection of high-performance vehicles from trusted brands like Benz, Toyota, Nissan, BMW, and more. Whether you're looking for a luxury ride or a reliable car for daily use, we’ve got the perfect vehicle waiting for you. Rent with ease, ride in style.
        </p>
        <div className="2xl:mt-50">
        <CarBrandsList/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
