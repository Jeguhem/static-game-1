"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./NavBar";
import chevronLeft from "@public/images/chevron left.svg";
import chevronRight from "@public/images/chevron right.svg";

// Character Images
import frost from "@public/images/Frost.svg";
import skarlet from "@public/images/Skarlet.svg";
import shangT from "@public/images/Shang Tsung.svg";
import kitana from "@public/images/Kitana 1.svg";
import SpinMotion from "./SpinMotion";

const characters = [
  {
    name: "FROST",
    image: frost,
    gradient: "gradient-bg",
    logo: "/images/frost logo.svg",
    color: "#0F92F0",
    width: 480,
    height: 650,
    textColor: "text-white",
    hoverColor: "hover:bg-[#0C78C2]",
  },
  {
    name: "SKARLET",
    image: skarlet,
    gradient: "red-gradient-bg",
    logo: "/images/red logo.svg",
    color: "#A72424",
    width: 710,
    height: 650,
    textColor: "text-white",
    hoverColor: "hover:bg-[#8E1E1E]",
  },
  {
    name: "SHANG T",
    image: shangT,
    gradient: "yellow-gradient-bg",
    logo: "/images/yellow logo.svg",
    color: "#C7BA44",
    width: 560,
    height: 650,
    textColor: "text-white",
    hoverColor: "hover:bg-[#AFA23A]",
  },
  {
    name: "KITANA",
    image: kitana,
    gradient: "blue-gradient-bg",
    logo: "/images/blue logo.svg",
    color: "#0F92F0",
    width: 540,
    height: 650,
    textColor: "text-white",
    hoverColor: "hover:bg-[#0C78C2]",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + characters.length) % characters.length
    );
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence>
        {characters.map((char, index) => (
          <motion.div
            key={char.name}
            initial={{
              x: index === currentIndex ? 0 : "100%",
              zIndex: index === currentIndex ? 10 : 1,
            }}
            animate={{
              x:
                index === currentIndex
                  ? 0
                  : index < currentIndex
                  ? "-200px"
                  : "100%",
              zIndex: index === currentIndex ? 10 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 50,
            }}
            className={`absolute inset-0 ${char.gradient} h-screen`}
          >
            <NavBar logo={char.logo} />
            <div className="relative flex flex-col items-center">
              <Image
                src={char.image}
                alt={char.name}
                width={char.width}
                height={char.height}
                className="absolute z-[2]"
              />
              <SpinMotion>
                <p
                  className={`text-[200px] ${char.textColor} text-center font-extrabold`}
                >
                  {char.name}
                </p>
              </SpinMotion>
              <div className="flex justify-between w-full max-w-[400px] lg:max-w-[1000px]">
                <div
                  className={`w-[40px] h-[40px] rounded-full bg-[${char.color}] ${char.hoverColor} active:opacity-55 flex items-center justify-center`}
                  onClick={handlePrev}
                >
                  <Image
                    src={chevronLeft}
                    alt="Previous"
                    width={10}
                    height={10}
                  />
                </div>
                <div
                  className={`w-[40px] h-[40px] rounded-full bg-[${char.color}] ${char.hoverColor} active:opacity-55 flex items-center justify-center`}
                  onClick={handleNext}
                >
                  <Image src={chevronRight} alt="Next" width={10} height={10} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
