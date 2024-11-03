import React, {useEffect} from 'react';
import StatisticImg from "../assets/Statistic.png";
import Button from './Button';
import AOS from "aos";
import "aos/dist/aos.css";


const Statistics = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])


  return (
    <section className='font-Rubik flex flex-col-reverse lg:flex-row items-center justify-around relative'>
      <div>
        <img src={StatisticImg} alt="Statistic-img" className='relative lg:left-[-70px]' data-aos="fade-right" data-aos-delay="500" />
      </div>

      <div className='mb-[100px] lg:mb-0 lg:ml-10' data-aos="fade-left" data-aos-delay="500">
        <h2 className='text-white font-semibold text-[35px] tracking-wide mb-8'>Detailed Statistics</h2>
        <p className='text-[#E0E0E0] max-w-[410px] tracking-wide mb-8 '>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
        
        <Button title="Learn more"/>
      </div>
    </section>
  )
}

export default Statistics
