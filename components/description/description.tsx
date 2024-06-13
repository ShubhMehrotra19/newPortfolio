/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import { Anton, Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["300", "800"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

interface Props {
  aboutRef: React.RefObject<HTMLElement>;
}

function Description(props: Props) {
  const { aboutRef } = props;
  const talkRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <section
      ref={aboutRef}
      className="mb-32 mx-14 flex flex-col justify-center items-center"
    >
      <div className="flex justify-between items-start w-full">
        <ul
          className={`text-base ${openSans.className} font-normal flex justify-start items-center gap-2`}
        >
          <div className="h-5 w-5 rounded-full bg-[#B2D12E]"></div> DEPLOYING
          PRODUCTS FROM KANPUR & DELHI, INDIA.
        </ul>
        <div className="flex flex-col justify-start items-start text-left">
          <p
            className={`font-medium text-4xl ${anton.className} leading-snug mb-5`}
          >
            A MULTIDISCIPLINARY DEVELOPER HARNESSING <br /> THE POWER OF DESIGN
            AND CREATIVITY <br /> TO ACHIEVE ONLINE GOALS.
          </p>
          <Link href="/contact">
            <div
              ref={talkRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`talking px-8 py-4 text-base rounded-full text-white bg-black hover:bg-[#B2D12E] text-center ${openSans.className} hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out flex justify-center items-center gap-2`}
            >
              LET'S TALK
              <Image
                src={
                  isHovering
                    ? "/icons/arrow_black.png"
                    : "/icons/arrow_green.png"
                }
                alt=""
                height={30}
                width={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Description;
