"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Navbar from "../navbar/navbar";
import Welcome from "../effect/Effect";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

function LandingPage(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWelcomeAnimationComplete, setIsWelcomeAnimationComplete] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 800);
    });

    gsap.ticker.lagSmoothing(0);

    const welcomeAnimation = gsap.timeline();
    welcomeAnimation
      .fromTo(
        "#welcome",
        { y: 0 },
        { y: -2000, duration: 1.5, delay: 3, ease: "power4.in" }
      )
      .set("#welcome", { display: "none" })
      .set("#content", { opacity: 0, display: "block" })
      .to("#content", {
        opacity: 1,
        duration: 1,
        onComplete: () => setIsWelcomeAnimationComplete(true),
      });
  }, []);

  const handleMouseEnter = () => {
    const cursor = document.querySelector(".cursorCustom");
    gsap.to(cursor, {
      scale: 6,
      backgroundColor: "white",
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector(".cursorCustom");
    gsap.to(cursor, {
      scale: 1,
      backgroundColor: "black",
      delay: 0.5,
      duration: 0.2,
    });
  };

  useEffect(() => {
    const cursor = document.querySelector(".cursorCustom");

    const handleMouseMove = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX - 3,
        y: event.clientY - 145,
        duration: 1,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="welcome"
        style={{ display: isWelcomeAnimationComplete ? "none" : "block" }}
      >
        <Welcome />
      </div>
      <div
        id="content"
        style={{
          opacity: isWelcomeAnimationComplete ? 1 : 0,
          display: isWelcomeAnimationComplete ? "block" : "none",
        }}
      >
        <Navbar
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="cursorCustom h-3 w-3 bg-black rounded-full fixed"></div>
      </div>
    </>
  );
}

export default LandingPage;
