import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Calcform from "./Calcform"
const Calcheader = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="pt-[100px] pb-[240px] w-full relative">
      <div
        className="flex flex-col items-center font-Rubik"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h2 className="text-center text-white font-bold tracking-wide text-[38px] sm:text-[40px]">
          Check how much you can earn
        </h2>
        <p className="text-center text-dimWhite tracking-wide font-light pb-14 lg:pb-0 text-[16px] max-w-[500px] mt-6">
          Let’s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div> 

      <Calcform />
   </div>
  );
};

export default Calcheader;
