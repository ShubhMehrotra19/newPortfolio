"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Comp from "../NavbarComponents/comp";
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
    <nav className="mx-12 mt-3 flex justify-between items-center select-none">
      <Image src="/icons/logoIcon.png" width={160} height={100} alt="" />
      <div className="bar">
        <Comp homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} />
      </div>
      <div
        ref={menuRef}
        className="menu cursor-pointer flex justify-center items-center gap-6 px-3"
      >
        <p className="font-light text-lg">menu</p>
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