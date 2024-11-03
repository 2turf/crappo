import React, { useEffect, useState } from "react";
import navlogo from "../assets/NavLogo.png"
import divider from "../assets/Divider.png";
import { navLinks } from "../data/data";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgMenuRight } from "react-icons/cg";

const Navbar = ({setNavMobile}) => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <nav
      className="md:py-10 py-7 flex items-center justify-between fade"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      <div className="flex items-center">
        <img
          src={navlogo}
          alt="nav-logo"
           className="w-full"
        />
      </div>

      <ul className="hidden md:flex items-center">
        {navLinks.map((link, index) => (
          <a href="#" key={index} className="relative">
            <li
              id={link.id}
              className="text-white hover:text-[#d2cdcd] active:opacity-75 text-[0.95em] mr-12 custom-underline font-light tracking-wide"
            >
              {link.title}
            </li>
          </a>
        ))}
        <div className="flex items-center mr-3">
          <a href="#">
            <p className="text-white mr-4 text-[0.95em] tracking-wide hover:text-[#717eb4] active:opacity-75">
              Login
            </p>
          </a>
          <img src={divider} alt="divider" className="h-[20px]" />
        </div>

        <Button title="Register" />
      </ul>

        <CgMenuRight className="text-white text-[25px] md:hidden active:scale-90 cursor-pointer" onClick={() => setNavMobile(true)} />
        
    </nav>
  );
};
export default Navbar;
