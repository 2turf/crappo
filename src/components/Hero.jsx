import React, { useEffect } from "react";
import arrow from "../assets/Arrow Right.png";
import HeroImage from "../assets/Illustration.png";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../data/styles";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="grid xl:grid-cols-2 items-center justify-items-center xl:justify-items-start xl:gap-x-20 relative font-Rubik">
      <div data-aos="fade-right" data-aos-delay="500" className="xl:mb-8">
        <div className=" flex-1 flex flex-row bg-[#252540] items-center justify-between rounded-[24px] max-w-[345px] h-[35px] ml-[-4px] mt-3">
          <div className="bg-white rounded-[14px] w-[90px] h-[27px] text-center  flex justify-center items-center text-[14px] font-medium ml-1">
            75% SAVE
          </div>
          <p className="text-white  text-[13.5px] tracking-wider mr-5">
            For the Black Friday weekend
          </p>
        </div>

        <h2 className={`${styles.heroHeader}`}>
          Fastest & secure platform to invest in crypto
        </h2>

        <p className={`${styles.heroParagraph}`}>
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </p>

        <button className="flex flex-row bg-blue hover:opacity-[0.85] active:opacity-75 items-center justify-between py-3 px-2.5 rounded-[30px] font-Rubik mt-8">
          <p className="text-white mr-4 ml-2">Try for FREE</p>
          <img src={arrow} alt="arrow-right" />
        </button>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="500"
        className="object-cover mt-10 xl:mt-0"
      >
        <img src={HeroImage} alt="Hero-img" className="w-full" />
      </div>

      <img
        src={bg}
        alt="bg"
        className="absolute bottom-[-250px] left-[130px]"
        data-aos="fade-left"
        data-aos-delay="500"
      />
      <img
        src={bg2}
        alt="bg2"
        className="absolute bottom-[-100px] right-[-150px]"
        data-aos="fade-left"
        data-aos-delay="500"
      />
    </section>
  );
};

export default Hero;
