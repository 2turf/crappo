import React,{useEffect} from "react";
import oBg from "../assets/o.png"
import btcChart from "../assets/Chart.png"
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Market = () => {
   
   useEffect(() => {
      AOS.init({ duration: 1500 })
   }, [])

  return (
    <section className="flex flex-col w-full py-[100px] font-Rubik relative pb-[130px]">
      <div className="container mx-auto lg:max-w-[758px]" data-aos="fade-up" data-aos-delay="500">
        <h2 className="text-center text-white font-bold tracking-wide text-[34px] md:text-[38px]">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-around pt-[100px]">

        <div className="flex flex-col  mb-[100px] lg:mb-20 lg:px-10" data-aos="fade-right" data-aos-delay="500">
           <h2 className="text-white text-[35px] font-semibold mb-7 tracking-wide">Invest Smart</h2>
           <p className="text-dimWhite text-[17px] max-w-[430px] mb-7 font-light tracking-wide">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
            <Button title="Learn more"/>
          </div>  

         <div>
          <img src={btcChart} alt="btc-chart" data-aos="fade-left" data-aos-delay="500" />
         </div>
      </div>

      <img src={oBg} alt="o-bg-cover" className="absolute top-0 left-[170px]" />
    </section>
  );
};

export default Market;
