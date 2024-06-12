"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Navbar from "../navbar/navbar";
import Welcome from "../effect/Effect";
import Hero from "../hero/hero";
import VideoPlaying from "../video/VideoPlaying";
import Description from "../description/description";
import MarqueeMix from "../marqueeMixed/marqueeMix";

gsap.registerPlugin(ScrollTrigger);

function LandingPage(props: any) {
  const [isWelcomeAnimationComplete, setIsWelcomeAnimationComplete] = useState(false);
  const [isMenu, setIsMenu] = useState(false); 
  const [isVideo, setIsVideo] = useState(false);
  const [isButton, setIsButton] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 6,
        y: e.clientY - 10,
        duration: 0.8,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
  
    if (!cursor) return;
  
    const menu = document.querySelector(".menu");
    const videoElement = document.querySelectorAll(".video");
    const btnHovering = document.querySelectorAll(".viewBtn");

  
    if (!menu) return;
    if (!videoElement.length) return;
    if (!btnHovering) return;
  
    const handleMenuEnter = () => {
      setIsMenu(true);
      gsap.to(cursor, { scale: 6 });
    };
  
    const handleMenuLeave = () => {
      setIsMenu(false);
      gsap.to(cursor, { scale: 1 });
    };
  
    const handleVideoEnter = () => {
      setIsVideo(true);
      gsap.to(cursor, { scale: 6 });
    };
  
    const handleVideoLeave = () => {
      setIsVideo(false);
      gsap.to(cursor, { scale: 1 });
    };

    const handleButtonEnter = () => {
      setIsButton(true);
      gsap.to(cursor, { scale: 6 });
    };

    const handleButtonLeave = () => {
      setIsButton(false);
      gsap.to(cursor, { scale: 1 });
    };
  
    menu.addEventListener("mouseenter", handleMenuEnter);
    menu.addEventListener("mouseleave", handleMenuLeave);
  
    videoElement.forEach((element) => {
      element.addEventListener("mouseenter", handleVideoEnter);
      element.addEventListener("mouseleave", handleVideoLeave);
    });

    btnHovering.forEach((element) => {
      element.addEventListener("mouseenter", handleButtonEnter);
      element.addEventListener("mouseleave", handleButtonLeave);
    });
  
    return () => {
      menu.removeEventListener("mouseenter", handleMenuEnter);
      menu.removeEventListener("mouseleave", handleMenuLeave);
  
      videoElement.forEach((element) => {
        element.removeEventListener("mouseenter", handleVideoEnter);
        element.removeEventListener("mouseleave", handleVideoLeave);
      });
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
        className=" select-none"
        style={{
          opacity: isWelcomeAnimationComplete ? 1 : 0,
          display: isWelcomeAnimationComplete ? "block" : "none",
        }}
      >
        <Navbar />
        <Hero />
        <VideoPlaying />
        <Description />
        <MarqueeMix />
        <div
          ref={cursorRef}
          style={{
            backdropFilter: isButton ? `blur(0.5px)` : `blur(0px)`,
          }}
          className={`cursorCustom h-3 w-3 fixed top-0 left-0 pointer-events-none z-[500] rounded-full text-white font-light overflow-hidden flex justify-center items-center text-center ${
            isMenu ? `text-[2.5px] bg-black` : `text-[0px] bg-black`
          } ${isVideo ? `text-[5px] bg-white` : `text-[0px] bg-black`}
          ${isButton ? `bg-transparent text-[5px]` : `text-[0px] bg-black`}`}
        >
          {`${isMenu ? "click me" : ""}`}
          {`${isVideo ? "📽️" : ""}`}
          {`${isButton ? "🤙🏽" : ""}`}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
