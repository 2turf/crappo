import React, {useEffect} from 'react'
import { Stat } from '../data/data'
import AOS from "aos";
import "aos/dist/aos.css";
import bg3 from "../assets/bg3.png"

const Stats = () => {
  
   useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
 
  return (
    <section className='mt-[230px] flex flex-wrap justify-around items-center font-Rubik' data-aos="fade-up" data-aos-delay="500" >

       {Stat.map((stat, index) => (

         <div key={index} className='flex flex-row mb-12 mr-4' >

           <img src={stat.img} alt="img" className='mr-5' />

           <div>
            <h2 className='text-[30px]  md:text-[32px] text-white  font-semibold'>{stat.title}</h2>
            <p className='text-[14px] text-dimWhite  font-light '>{stat.subTitle}</p>
           </div>

         </div> 

       ))}

        <img src={bg3} alt="bg3" className='absolute right-[-50px] bottom-[-80px] z-[-1]' />
    </section>
  )
}

export default Stats
