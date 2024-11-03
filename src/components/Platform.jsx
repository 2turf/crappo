import React, { useEffect } from "react";
import illustrations from "../assets/Illustrations.png";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import uBg from "../assets/u.png";

const Platform = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="grid lg:grid-cols-2 items-center justify-items-center gap-x-10 py-[100px] relative">
      <div className="order-last lg:order-first">
        <img
          src={illustrations}
          alt="illustrations"
          className=""
          data-aos="fade-right"
          data-aos-delay="500"
        />
      </div>

      <div
        className="lg:ml-20 md:mt-[100px] lg:mt-0 font-Rubik"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <h2 className="text-white text-[40px] leading-[60px]  font-bold tracking-wide mb-5">
          Why you should choose CRAPPO
        </h2>
        <p className="text-dimWhite font-light lg:max-w-[405px] mb-8 leading-8 ">
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>

        <Button title="Learn More" />

        <img
          src={uBg}
          alt="u-background"
          className="absolute bottom-[-125px] right-0"
        />
      </div>
    </section>
  );
};

export default Platform;
