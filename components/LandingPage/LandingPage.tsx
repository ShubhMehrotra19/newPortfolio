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
import Projects from "../projects/projects";
import Contacts from "../contacts/contacts";
import Footer from "../footer/footer";

gsap.registerPlugin(ScrollTrigger);

function LandingPage(props: any) {
  const [isWelcomeAnimationComplete, setIsWelcomeAnimationComplete] =
    useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isLinked, setIsLinked] = useState(false);
  const [isMailing, setIsMailing] = useState(false);
  const [isFooter, setIsFooter] = useState(false);
  const [isThanking, setIsThanking] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 900);
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
    const talkHovering = document.querySelectorAll(".talking");
    const linkedHovering = document.querySelectorAll(".linked");
    const projectHovering = document.querySelectorAll(".projectImage");
    const mailHovering = document.querySelectorAll(".mailing");
    const footerHovering = document.querySelectorAll(".footer");
    const thanking = document.querySelectorAll(".thanku");

    if (!menu) return;
    if (!videoElement.length) return;
    if (!btnHovering) return;
    if (!talkHovering) return;
    if (!linkedHovering) return;
    if (!projectHovering) return;
    if (!mailHovering) return;
    if (!footerHovering) return;
    if (!thanking) return;

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

    const handleTalkEnter = () => {
      setIsTalking(true);
      gsap.to(cursor, { scale: 6 });
    };

    const handleTalkLeave = () => {
      setIsTalking(false);
      gsap.to(cursor, { scale: 1 });
    };

    const handleLinkedEnter = () => {
      setIsLinked(true);
      gsap.to(cursor, { scale: 6 });
    };

    const handleLinkedLeave = () => {
      setIsLinked(false);
      gsap.to(cursor, { scale: 1 });
    };

    const handleProjectEnter = () => {
      setIsProject(true);
      gsap.to(cursor, { scale: 6 });
    };

    const handleProjectLeave = () => {
      setIsProject(false);
      gsap.to(cursor, { scale: 1 });
    };

    const handleMailEnter = () => {
      setIsMailing(true);
      gsap.to(cursor, { scale: 6 });
    };

    const handleMailLeave = () => {
      setIsMailing(false);
      gsap.to(cursor, { scale: 1 });
    };

    const handleFooterEnter = () => {
      setIsFooter(true);
      gsap.to(cursor, { scale: 1 });
    };

    const handleFooterLeave = () => {
      setIsFooter(false);
      gsap.to(cursor, { scale: 1 });
    };

    const handleThankingEnter = () => {
      setIsThanking(true);
      gsap.to(cursor, { scale: 6 });
    };

    const handleThankingLeave = () => {
      setIsThanking(false);
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

    talkHovering.forEach((element) => {
      element.addEventListener("mouseenter", handleTalkEnter);
      element.addEventListener("mouseleave", handleTalkLeave);
    });

    linkedHovering.forEach((element) => {
      element.addEventListener("mouseenter", handleLinkedEnter);
      element.addEventListener("mouseleave", handleLinkedLeave);
    });

    projectHovering.forEach((element) => {
      element.addEventListener("mouseenter", handleProjectEnter);
      element.addEventListener("mouseleave", handleProjectLeave);
    });

    mailHovering.forEach((element) => {
      element.addEventListener("mouseenter", handleMailEnter);
      element.addEventListener("mouseleave", handleMailLeave);
    });

    footerHovering.forEach((element) => {
      element.addEventListener("mouseenter", handleFooterEnter);
      element.addEventListener("mouseleave", handleFooterLeave);
    });

    thanking.forEach((element) => {
      element.addEventListener("mouseenter", handleThankingEnter);
      element.addEventListener("mouseleave", handleThankingLeave);
    });

    return () => {
      menu.removeEventListener("mouseenter", handleMenuEnter);
      menu.removeEventListener("mouseleave", handleMenuLeave);

      videoElement.forEach((element) => {
        element.removeEventListener("mouseenter", handleVideoEnter);
        element.removeEventListener("mouseleave", handleVideoLeave);
      });

      btnHovering.forEach((element) => {
        element.removeEventListener("mouseenter", handleButtonEnter);
        element.removeEventListener("mouseleave", handleButtonLeave);
      });

      talkHovering.forEach((element) => {
        element.removeEventListener("mouseenter", handleTalkEnter);
        element.removeEventListener("mouseleave", handleTalkLeave);
      });

      linkedHovering.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkedEnter);
        element.removeEventListener("mouseleave", handleLinkedLeave);
      });

      projectHovering.forEach((element) => {
        element.removeEventListener("mouseenter", handleProjectEnter);
        element.removeEventListener("mouseleave", handleProjectLeave);
      });

      mailHovering.forEach((element) => {
        element.removeEventListener("mouseenter", handleMailEnter);
        element.removeEventListener("mouseleave", handleMailLeave);
      });

      footerHovering.forEach((element) => {
        element.removeEventListener("mouseenter", handleFooterEnter);
        element.removeEventListener("mouseleave", handleFooterLeave);
      });

      thanking.forEach((element) => {
        element.removeEventListener("mouseenter", handleThankingEnter);
        element.removeEventListener("mouseleave", handleThankingLeave);
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
        className="select-none"
        style={{
          opacity: isWelcomeAnimationComplete ? 1 : 0,
          display: isWelcomeAnimationComplete ? "block" : "none",
        }}
      >
        <div className="relative w-full z-0">
          <div className="fixed z-10 w-full top-0 backdrop-blur-md bg-transparent overflow-hidden">
          <Navbar homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} />
          </div>
          <Hero homeRef={homeRef} />
          <VideoPlaying />
          <Description aboutRef={aboutRef} />
          <MarqueeMix />
          <Projects workRef={workRef} />
          <Contacts />
          <Footer />
        </div>
        <div
          ref={cursorRef}
          style={{
            backdropFilter:
              isButton || isTalking || isMailing || isTalking
                ? `blur(0.5px)`
                : `blur(0px)`,
            color: isLinked ? `#000` : `#fff`,
          }}
          className={`cursorCustom h-3 w-3 fixed top-0 left-0 pointer-events-none z-[500] rounded-full text-white font-light overflow-hidden flex justify-center items-center text-center ${
            isMenu ? `text-[2.5px] bg-black` : `text-[0px] bg-black`
          } ${isVideo ? `text-[5px] bg-white` : `text-[0px] bg-black`}
          ${isButton ? `bg-transparent text-[5px]` : `text-[0px] bg-black`}
          ${isTalking ? `bg-transparent text-[5px]` : `text-[0px] bg-black`}
          ${
            isLinked
              ? `bg-white text-[2.5px] font-medium`
              : `text-[0px] bg-black`
          }
          ${isProject ? `bg-white/35 text-[5px]` : `text-[0px] bg-black`}
          ${isMailing ? `bg-transparent text-[5px]` : `text-[0px] bg-black`}
          ${isFooter ? `bg-white` : `bg-black`}
          ${isThanking ? `bg-[#B2DE21] text-[5px]` : `bg-black`}`}
        >
          {`${isMenu ? "click me" : ""}`}
          {`${isVideo ? "📽️" : ""}`}
          {`${isButton ? "🤙🏽" : ""}`}
          {`${isTalking ? "📞" : ""}`}
          {`${isLinked ? "click me" : ""}`}
          {`${isProject ? "👀" : ""}`}
          {`${isMailing ? "✒️" : ""}`}
          {`${isThanking ? "🤍" : ""}`}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
