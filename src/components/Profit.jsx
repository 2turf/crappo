import React,{useEffect} from 'react'
import Button from './Button'
import tableImg from "../assets/Table.png"
import oBg from "../assets/o2.png"
import AOS from "aos";
import "aos/dist/aos.css";


const Profit = () => { 

    useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])


  return (
    <section className='flex flex-col lg:flex-row py-[150px] items-center justify-between font-Rubik relative'>

        <div className='max-w-[500px] mb-20 lg:mb-0' data-aos="fade-right" data-aos-delay="500">
          <h2 className='text-white text-[32px] font-semibold tracking-wide mb-8'>Grow your profit and track your investments</h2>
          <p className='text-[#E0E0E0] font-light  max-w-[420px] tracking-wide mb-8'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
          <Button title="Learn more"/>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <img src={tableImg} alt="Table-img" />
        </div>

        <img src={oBg} alt="o-bg-cover" className='absolute right-[-110px] bottom-[-0px]' />
    </section>
  )
}

export default Profit
