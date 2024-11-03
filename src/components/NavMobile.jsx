import React from "react";
import { CgClose } from "react-icons/cg";
import { navLinks } from "../data/data";

const NavMobile = ({setNavMobile}) => {
  return (
    <nav className="h-full">
      <CgClose className="text-white text-[26px] absolute top-3 left-3 cursor-pointer active:scale-90" onClick={() => setNavMobile(false)}/>

      <ul className="flex flex-col justify-center items-center gap-y-8 h-full">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="text-white font-light cursor-pointer font-Inter hover:opacity-75 active:opacity-50"
          >
            <a href="#">{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
