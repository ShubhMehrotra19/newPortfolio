// marquee.tsx
import React from "react";
import "./marquee.css";
import { Anton, Open_Sans } from 'next/font/google';

export const anton = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin-ext', 'latin', 'vietnamese'],
  display: 'swap',
}) 

export const openSans = Open_Sans({
  weight: ['300', '800'],
  style: ['normal'],
  subsets: ['latin-ext', 'latin', 'vietnamese'],
  display: 'swap',
})

interface Props {}

function Marquee(props: Props) {
  const {} = props;
  const textWidth = 8000; 
  return (
    <section className="w-[1800px] h-[160px] bg-[#B2D12E] flex justify-center items-center mb-3 -ml-2 rotate-[3deg] overflow-hidden">
      <div className="scrolling-text whitespace-nowrap">
        <span
          className={`text-[120px] ${anton.className} text-white inline-block`}
          style={{ width: `${textWidth}px` }}
        >
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
          NEXT.JS &nbsp; # &nbsp; TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; #
          &nbsp; GSAP &nbsp; # &nbsp; TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION
          &nbsp; # &nbsp; LENIS-SCROLL &nbsp; # &nbsp; NEXT.JS &nbsp; # &nbsp;
          TAILWIND &nbsp; # &nbsp; REACT.JS &nbsp; # &nbsp; GSAP &nbsp; # &nbsp;
          TYPESCRIPT &nbsp; # &nbsp; FRAMER-MOTION &nbsp; # &nbsp; LENIS-SCROLL
          &nbsp; # &nbsp;
        </span>
      </div>
    </section>
  );
}

export default Marquee;