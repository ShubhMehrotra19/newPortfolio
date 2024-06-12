import React from "react";
import "./marquee.css";

interface Props {}

function Marquee(props: Props) {
  const {} = props;

  return (
    <section className="w-full h-[160px] bg-[#B2D12E] flex justify-center items-center -rotate-[3deg] mb-32">
      <div className="scrolling-text w-full">
        <span className='text-[120px] font-["Anton"] text-white'>
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
