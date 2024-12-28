"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center xl:py-3 xl:px-6 py-1 px-0 outline-none; ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
