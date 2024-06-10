"use client"
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Navbar from "../navbar/navbar";
import Welcome from "../effect/Effect";


interface Props {}

function LandingPage(props: Props) {
  const [isWelcomeAnimationComplete, setIsWelcomeAnimationComplete] =
    useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    
    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

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

  return (
    <div>
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
        <Navbar />
      </div>
    </div>
  );
}

export default LandingPage;