import React, { useEffect } from "react";
import Vector1 from "../assets/Vector2.png";
import Vector2 from "../assets/Vector.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Mining = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <section className="font-Rubik py-[80px] lg:container mx-auto">
      <div
        className="bg-blue p-10 flex flex-col lg:flex-row items-center justify-between rounded-2xl relative"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="flex-1 w-full mb-8 lg:pr-4">
          <h3 className="text-[33px] text-white font-semibold tracking-wide lg:mt-3 mb-8 lg:mb-5">
            Start mining now
          </h3>
          <p className="text-white font-light tracking-wide lg:max-w-[360px]">
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>

        <form className="flex-1 flex z-[1] flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10 font-Rubik ">
          <input
            type="text"
            placeholder="Enter your email"
            className="input outline-none w-full font-light tracking-wide border-b border-gray text-white h-[38px] text-xl lg:min-w-[374px] placeholder:text-white text-base font-Rubik tracking-wide"
          />

          <button
            type="button"
            className="bg-white h-[52px] px-7 rounded-[28px] hover:bg-blue-hover transition flex items-center text-lg tracking-wide outline-none text-darkBlue hover:opacity-[0.85] active:opacity-65 cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        <img
          src={Vector1}
          alt="ethereum-bg"
          className="absolute top-0 left-[20px]"
        />
        <img
          src={Vector2}
          alt="bitcoin-bg"
          className="absolute bottom-0 right-[15px] z-[0]"
        />
      </div>
    </section>
  );
};

export default Mining;
