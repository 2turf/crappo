import React from "react";

const Button = ({title}) => {
  return (
    <button type="button" className="bg-[#3671E9] font-Rubik text-white text-[0.95em] hover:opacity-[0.85] rounded-[30px] w-[124px] h-[48px] tracking-wide active:opacity-75 ">
       {title}
    </button>
  );
};

export default Button;

