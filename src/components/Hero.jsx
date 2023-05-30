import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Nishanth</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Software Engineer with experience in <br className="sm:block hiddent" />Application Development (Python, JavaScript, Rust). <br className="sm:block hiddent" />Cybersecurity Enthusiast. TryHackMe Top 1%</p>
        </div> 
      </div>
    <ComputersCanvas />
    </section>
  )
}

export default Hero