import React from 'react';
import Astro from '../../assets/AiAstroImage.jpg'
import { motion } from "framer-motion";


export default function BackgroundComponent() {
    return (
        <>
    <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[450]">
      <div className="rounded-md w-full h-full animate-pulse absolute"></div>
      <motion.img
        src={Astro}
        alt="Astro"
        className="w-full h-full object-scaledown"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
      />
    </div>

        </>
    )
}
