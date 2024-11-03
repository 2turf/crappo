import React, { useState } from "react";
import styles from "./data/styles";
import Navbar from "./components/Navbar";
import NavMobile from "./components/NavMobile";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Platform from "./components/Platform";
import Calcheader from "./components/Calcheader";
import Trade from "./components/Trade";
import Market from "./components/Market";
import Statistics from "./components/Statistics";
import Profit from "./components/Profit";
import Mining from "./components/Mining";
import Footer from "./components/Footer";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className="w-[100%] bg-primary overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar setNavMobile={setNavMobile} />

          <div
            className={`${
              navMobile ? "right-0" : "-right-[120%]"
            } fixed z-10 md:hidden top-0 bottom-0 bg-[#2B076E] w-80 transition-all duration-200`}
          >
            <NavMobile setNavMobile={setNavMobile} />
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Stats />
          <Platform />
          <Calcheader />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-white`}>
        <div className={`${styles.boxWidth}`}>
          <Trade />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-secondary`}>
        <div className={`${styles.boxWidth}`}>
          <Market />
          <Statistics />
          <Profit />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-gradient-to-b from-dark-blue to-navy-blue`}>
        <div className={`${styles.boxWidth}`}>
          <Mining />
        </div>
      </div>

        <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>

    </div>
  );
};

export default App;
