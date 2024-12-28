"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {};

  const carVariants = {
    initial: { x: 100, opacity: 0 }, // Starts slightly off-screen
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring", // Smooth spring motion
        stiffness: 50,
        damping: 10,
        duration: 1,
      },
    },
    hover: {
      scale: 1.05, // Slightly enlarges on hover
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-full mx-auto overflow-hidden">
      <div className="flex-1 xl:pt-36 pt-28 xl:px-20 px-9">
        <h1 className=" 2xl:text-7xl xl:w-1/3 w-full text-4xl font-extrabold">
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p className="xl:text-xl text-lg xl:w-1/3 w-full text-black-100 font-light xl:mt-6 mt-4">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full xl:text-sm xl:mt-10 mt-5"
          handleClick={handleScroll}
          btnType="button"
        />
      </div>

      <div>
        <div className="absolute xl:-top-12 xl:-right-40">
          <Image
            src="/hero-bg.png"
            alt="hero-bg"
            width={900}
            height={600}
            className="translate-x-28"
          />
        </div>

        <motion.div
          className="xl:absolute xl:top-48 xl:right-40 right-0 relative z-10"
          variants={carVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Image
            src="/hero.png"
            alt="hero"
            width={700}
            height={208}
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
