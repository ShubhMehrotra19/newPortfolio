"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Comp, { openSans } from "../NavbarComponents/comp";
import gsap from "gsap";

function Navbar({homeRef, aboutRef, workRef}: any) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleAnimation = useCallback(() => {
    const tl = gsap.timeline();

    if (!isClicked) {
      tl.from(".bar", {
        opacity: 0,
        duration: 0.2,
        y: -100,
        ease: "back.out",
      }).to(".bar", {
        opacity: 1,
        duration: 0.2,
        y: 0,
        ease: "back.out",
      });
    } else {
      tl.to(".bar", {
        opacity: 0,
        duration: 0.6,
        y: -100,
        ease: "back.out",
      });
    }
  }, [isClicked]);

  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

  const toggleMenu = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <nav className="md:mx-12 mx-2 mt-3 flex justify-between items-center select-none">
      <Image src="/icons/logoIcon.png" width={160} height={100} className="md:w-[160px] md:h-[100px] h-[80px] w-[140px]" alt="" />
      <div className="bar md:block hidden">
        <Comp homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} />
      </div>
      <div
        ref={menuRef}
        className="menu hidden cursor-pointer md:flex justify-center items-center gap-6 px-3"
      >
        <p className={`font-semibold text-xl ${openSans.className}`}>menu</p>
        <Image
          className="transition-all duration-300 ease-in-out delay-75"
          onClick={toggleMenu}
          src={`/icons/${isClicked ? "menu" : "close"}.png`}
          width={30}
          height={30}
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;