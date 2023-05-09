import React from 'react';
import Astro from '../../assets/AiAstroImage.jpg'
import purpleEclipse from '../../assets/purpleEclipse.jpg'
import Moon from '../../assets/Moon.jpg'
import CyberMoon from '../../assets/CyberMoon.jpg'
import { motion } from "framer-motion";


export default function BackgroundComponent() {
    return (
        <>
    <div className="relative w-full h-[180px] 
                    sm:h-[260px] 
                    md:h-[280px] 
                    lg:h-[380px] 
                    xl:h-[450px]">
      <div className="rounded-md w-full h-full animate-pulse absolute"></div>
      <motion.img
        src='https://unsplash.com/photos/5-GNa303REg/download?force=true&w=1920'
        alt="Astro"
        className="w-full h-full object-cover shadow-2xl rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: .8}}
        transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
      />
    </div>

        </>
    )
}
