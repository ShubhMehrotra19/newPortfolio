"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Anton, Open_Sans } from 'next/font/google';

export const anton = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin-ext', 'latin', 'vietnamese'],
  display: 'swap',
}) 

export const openSans = Open_Sans({
  weight: ["300","400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});


interface Props {
  homeRef: React.RefObject<HTMLElement>;
}

function Hero(props: Props) {
  const { homeRef } = props;
  const animationRef = useRef<null | gsap.core.Timeline>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      ".heading1",
      {
        delay: 4.5,
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      },
      "<"
    );

    tl.from(".heading2", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });

    tl.to(
      ".heading1",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      },
      "<"
    );

    tl.to(
      ".heading2",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      },
    );

    tl.from(".subHeading", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power4.out",
    });

    tl.to(
      ".subHeading",
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
      },
    );

    tl.from(".base", {
      opacity: 0,
      width: "0%",
      duration: 0.6,
      ease: "power4.out",
    });

    tl.to(".base", {
      opacity: 1,
      width: "100%",
      duration: 0.6,
      ease: "power4.out",
    });

    animationRef.current = tl;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <section ref={homeRef} className="flex flex-col md:mt-52 mt-36 mb-20 md:mx-14 mx-4">
      <div className="md:mb-16 mb-6 flex flex-col">
        <div className={`heading1 md:text-[140px] text-[40px] md:leading-[140px] leading-[1] text-[#121212] ${anton.className} overflow-hidden`}>
          CREATIVE DESIGN AND
        </div>
        <div className={`heading2 md:text-[140px] text-[40px] md:leading-[140px] leading-[1] text-[#121212] ${anton.className} overflow-hidden`}>
          WEBSITE DEVELOPER.
        </div>
      </div>
      <div className="flex flex-col w-fit">
        <p className={`subHeading font-medium ${openSans.className} md:text-2xl text-base mb-2 pr-5`}>
          CREATING DESIGNS <br /> THAT RESONATE.
        </p>
        <div className="base md:h-[2px] h-[1px] bg-black"></div>
      </div>
    </section>
  );
}

export default Hero;
