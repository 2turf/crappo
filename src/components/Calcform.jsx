import React, { useEffect } from "react";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Calcform = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section
      className="bg-white max-w-[942px] mx-auto p-12 w-full rounded-2xl font-Rubik z-[1] absolute lg:bottom-[-200px] right-0 left-0"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <form className="flex flex-col lg:flex-row justify-between lg:items-center space-y-12 lg:space-y-0">
        <input
          type="text"
          placeholder="Enter your hash rate"
          className=" text-[18px] p-3 outline-none placeholder-[#0D0D2B] "
        />

        <select className="lg:max-w-[200px] cursor-pointer outline-none  text-[#0D0D2B]">
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">kH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>

        <Button title="Calculate" />
      </form>

      <div className="flex flex-col mt-24">
        <p className="text-blue text-[15px] mb-4">ESTIMATED 24 HOUR REVENUE:</p>
        <div className="text-[32px] font-bold mb-3">
          0.055 130 59 ETH{" "}
          <span className="text-blue font-semibold">($1275)</span>{" "}
        </div>
        <p className=" text-[#828282] tracking-[1%] ">
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
    </section>
  );
};

export default Calcform;
