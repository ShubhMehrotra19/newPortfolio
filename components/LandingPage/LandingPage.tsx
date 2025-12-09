"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
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
import { Suspense } from "react";

gsap.registerPlugin(ScrollTrigger);

// Cursor state configuration
type CursorState = {
  scale: number;
  emoji: string;
  bg: string;
  text: string;
  blur?: boolean;
  color?: string;
};

const CURSOR_STATES: Record<string, CursorState> = {
  menu: { scale: 6, emoji: "📃", bg: "bg-white/60", text: "text-[2.5px]" },
  video: { scale: 6, emoji: "📽️", bg: "bg-white/60", text: "text-[5px]" },
  button: {
    scale: 6,
    emoji: "🤙🏽",
    bg: "bg-transparent",
    text: "text-[5px]",
    blur: true,
  },
  talking: {
    scale: 6,
    emoji: "📞",
    bg: "bg-transparent",
    text: "text-[5px]",
    blur: true,
  },
  linked: {
    scale: 6,
    emoji: "click me",
    bg: "bg-white",
    text: "text-[2.5px] font-medium",
    color: "#000",
  },
  project: { scale: 6, emoji: "👀", bg: "bg-white/35", text: "text-[5px]" },
  mailing: {
    scale: 6,
    emoji: "✒️",
    bg: "bg-transparent",
    text: "text-[5px]",
    blur: true,
  },
  footer: { scale: 1, emoji: "", bg: "bg-white", text: "text-[0px]" },
  thanking: { scale: 6, emoji: "🤍", bg: "bg-[#B2DE21]", text: "text-[5px]" },
};

function LandingPage(props: any) {
  const [isWelcomeAnimationComplete, setIsWelcomeAnimationComplete] =
    useState(false);
  const [activeCursor, setActiveCursor] = useState<string | null>(null);

  const cursorRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize smooth scroll and welcome animation
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 900);
    };

    gsap.ticker.add(ticker);
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

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, []);

  // Cursor follow effect
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
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Create hover handlers with useCallback
  const createHoverHandlers = useCallback((cursorType: string) => {
    const config = CURSOR_STATES[cursorType];

    return {
      enter: () => {
        setActiveCursor(cursorType);
        gsap.to(cursorRef.current, { scale: config.scale });
      },
      leave: () => {
        setActiveCursor(null);
        gsap.to(cursorRef.current, { scale: 1 });
      },
    };
  }, []);

  // Hover effect setup with optimized event listeners
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const hoverElements = [
      { selector: ".menu", type: "menu" },
      { selector: ".video", type: "video" },
      { selector: ".viewBtn", type: "button" },
      { selector: ".talking", type: "talking" },
      { selector: ".linked", type: "linked" },
      { selector: ".projectImage", type: "project" },
      { selector: ".mailing", type: "mailing" },
      { selector: ".footer", type: "footer" },
      { selector: ".thanku", type: "thanking" },
    ];

    const cleanupFunctions: (() => void)[] = [];

    hoverElements.forEach(({ selector, type }) => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;

      const handlers = createHoverHandlers(type);

      elements.forEach((element) => {
        element.addEventListener("mouseenter", handlers.enter);
        element.addEventListener("mouseleave", handlers.leave);
      });

      cleanupFunctions.push(() => {
        elements.forEach((element) => {
          element.removeEventListener("mouseenter", handlers.enter);
          element.removeEventListener("mouseleave", handlers.leave);
        });
      });
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [createHoverHandlers]);

  // Compute cursor styles
  const cursorStyle = useMemo(() => {
    if (!activeCursor) {
      return {
        className: "bg-black text-[0px]",
        style: { backdropFilter: "blur(0px)", color: "#fff" },
        emoji: "",
      };
    }

    const config = CURSOR_STATES[activeCursor];
    return {
      className: `${config.bg} ${config.text}`,
      style: {
        backdropFilter: config.blur ? "blur(0.5px)" : "blur(0px)",
        color: config.color || "#fff",
      },
      emoji: config.emoji,
    };
  }, [activeCursor]);

  return (
    <>
      <div
        id="welcome"
        style={{ display: isWelcomeAnimationComplete ? "none" : "block" }}
        className="overflow-hidden">
        <Welcome />
      </div>
      <div
        id="content"
        className="select-none"
        style={{
          opacity: isWelcomeAnimationComplete ? 1 : 0,
          display: isWelcomeAnimationComplete ? "block" : "none",
        }}>
        <div className="relative w-full z-0 overflow-x-hidden">
          <div className="fixed z-10 w-full top-0 backdrop-blur-md bg-transparent overflow-hidden">
            <Navbar homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} />
          </div>
          <Hero homeRef={homeRef} />
          <Suspense fallback={<div>Loading...</div>}>
            <VideoPlaying />
          </Suspense>
          <Description aboutRef={aboutRef} />
          <MarqueeMix />
          <Projects workRef={workRef} />
          <Contacts />
          <Footer />
        </div>
        <div
          ref={cursorRef}
          style={cursorStyle.style}
          className={`cursorCustom hidden h-3 w-3 fixed top-0 left-0 pointer-events-none z-[500] rounded-full font-light overflow-hidden md:flex justify-center items-center text-center ${cursorStyle.className}`}>
          {cursorStyle.emoji}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
