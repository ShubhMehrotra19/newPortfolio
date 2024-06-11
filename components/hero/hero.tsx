"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./hero.css";

interface Props {}

function Hero(props: Props) {
  const {} = props;
  const animationRef = useRef<null | gsap.core.Timeline>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      ".heading1",
      {
        delay: 6,
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
        delay: 0.2,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      },
      "<"
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
      "<"
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
    <section className="flex flex-col mt-24 mb-8 mx-14">
      <div className="mb-16 flex flex-col">
        <div className='heading1 text-[140px] leading-[140px] text-[#121212] font-["Anton"] overflow-hidden'>
          CREATIVE DESIGN AND
        </div>
        <div className='heading2 text-[140px] leading-[140px] text-[#121212] font-["Anton"] overflow-hidden'>
          WEBSITE DEVELOPER.
        </div>
      </div>
      <div className="flex flex-col w-fit">
        <p className="subHeading font-light text-2xl mb-2 pr-5">
          CREATING DESIGNS <br /> THAT RESONATE.
        </p>
        <div className="base h-[2px] bg-black"></div>
      </div>
    </section>
  );
}

export default Hero;
