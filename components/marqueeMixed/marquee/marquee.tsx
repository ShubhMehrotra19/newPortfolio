// marquee.tsx
import React from "react";
import "./marquee.css";

interface Props {}

function Marquee(props: Props) {
  const {} = props;
  const textWidth = 5600; // Adjust this value according to your text length

  return (
    <section className="w-[1800px] h-[160px] bg-[#B2D12E] flex justify-center items-center mb-3 rotate-[3deg] overflow-hidden">
      <div className="scrolling-text whitespace-nowrap">
        <span
          className="text-[120px] font-['Anton'] text-white inline-block"
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
        </span>
      </div>
    </section>
  );
}

export default Marquee;