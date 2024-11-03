import React, {useEffect} from "react";
import FooterLogo from "../assets/NavLogo.png";
import visaImg from "../assets/Visa.png";
import mastercardImg from "../assets/Mastercard.png";
import btcImg from "../assets/Bitcoin.png";
import youtubeImg from "../assets/youtube.png";
import facebookImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";
import linkedinImg from "../assets/linkedin.png";
import instagramImg from "../assets/instagram.png";
import { footerLink1, footerLink2 } from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
   useEffect(() => {
     AOS.init({duration: 1500})
   }, [])

  return (
    <section className="flex flex-col w-full font-Rubik pt-[50px] lg:pt-[100px] pb-[80px]" data-aos="fade-up"
      data-aos-delay="500">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-16 lg:gap-y-0">
        <div className="mr-10 lg:mr-0 mb-5">
          <img src={FooterLogo} alt="footer-logo" className="w-[140px]" />
        </div>

        <div className="flex flex-row justify-evenly basis-1/2">
          <div className="flex flex-col mr-[40px] xmd:mr-[100px] lg:mr-0">
            <h3 className="text-white text-[20px] tracking-wide mb-10">
              Quick Link
            </h3>
            <ul className="text-[#F2F2F2] font-light cursor-pointer flex flex-col gap-y-5">
              {footerLink1.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-[#d2cdcd] active:opacity-75"
                >
                  {link.id}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col ml-[40px] xmd:ml-[100px] lg:ml-0">
            <h3 className="text-white text-[20px]  tracking-wide mb-10">
              Resources
            </h3>
            <ul className="text-[#F2F2F2] font-light cursor-pointer flex flex-col gap-y-5">
              {footerLink2.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-[#d2cdcd] active:opacity-75"
                >
                  {link.id}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col max-w-[360px]">
          <h2 className="text-white text-center lg:text-start font-medium text-[32px] tracking-wider mt-14 lg:mt-0 mb-10">
            We accept following payment systems
          </h2>

          <div className="flex flex-row gap-x-8">
            <img src={visaImg} alt="visa-image" />
            <img src={mastercardImg} alt="mastercard-image" />
            <img src={btcImg} alt="btc-image" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between pt-[150px] px-4">
        <p className="text-white font-light tracking-wide mb-8">
          ©2021 CRAPPO. All rights reserved
        </p>

        <div className="flex flex-row gap-x-8 ">
          <img
            src={facebookImg}
            alt="facebook-logo"
            className="cursor-pointer"
          />
          <img
            src={instagramImg}
            alt="instagram-logo"
            className="cursor-pointer"
          />
          <img src={youtubeImg} alt="youtube-logo" className="cursor-pointer" />
          <img src={twitterImg} alt="twitter-logo" className="cursor-pointer" />
          <img
            src={linkedinImg}
            alt="linkedin-logo"
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;

