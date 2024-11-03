import React, { useEffect, useState } from "react";
import { Cards } from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonImg from "../assets/Button.png";
import arrow from "../assets/Arrow Right.png"

const Trade = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [itemsName, setItemsName] = useState("Bitcoin");

  return (
    <section className="pt-[350px] pb-[100px] flex flex-col items-center font-Rubik">
      <div
        className="w-full max-w-[744px] mb-20 mt-10 md:mt-4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h2 className="text-[34px] text-darkBlue md:text-[42px] font-semibold text-center">
          Trade securely and market the high growth cryptocurrencies.
        </h2>
      </div>

      <div
        className="flex flex-wrap items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {Cards.map((card, index) => (
          <div
            key={index}
            onClick={() => console.log(setItemsName(card.title))}
            className={`flex flex-col px-8 py-12 rounded-2xl cursor-pointer transition duration-300 items-center max-w-[370px] mb-8  ${
              Cards.length - 1 === index ? "mr-0" : "md:mr-12"
            } ${
              card.title === itemsName
                ? "bg-secondary text-white "
                : "bg-white text-darkBlue "
            } `}
          >
            <img src={card.img} alt="card-img" className="w-[80px] mb-10" />

            <div className="flex flex-row items-center mb-6">
              <div className="tracking-wide font-semibold text-[32px] mr-3">
                {card.title}
              </div>
              <div className="text-[#BDBDBD] mt-2">{card.abbr}</div>
            </div>

            <p
              className={`font-light text-center max-w-[322px] mb-8 tracking-wide ${
                card.title === itemsName ? "text-white" : "text-[#828282]"
              } `}
            >
              {card.subTitle}
            </p>

            {card.title === itemsName ? (
              <button className="flex flex-row bg-blue rounded-[32px] px-3 py-3.5 items-center justify-between font-Rubik  hover:opacity-[0.85] active:opacity-75">
                <p className="mr-5 ml-2 ">Start Mining</p>
                <img src={arrow} alt="arrow-right" className="w-[24px]"/>
              </button>
            ) : (
              <img src={card.btn} alt="arrow-btn" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trade;
