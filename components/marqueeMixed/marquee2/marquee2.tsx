import React, { useEffect, useRef, useState } from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

const Marquee2 = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [marqueeLength, setMarqueeLength] = useState(0);

  useEffect(() => {
    const calculateMarqueeLength = () => {
      const screenWidth = window.innerWidth;
      setMarqueeLength(screenWidth + 200);
    };

    calculateMarqueeLength();

    window.addEventListener("resize", calculateMarqueeLength);

    if (scrollerRef.current && contentRef.current) {
      const scrollerInner = scrollerRef.current;
      const scrollerContent = contentRef.current;
      const duplicatedContent = scrollerContent.cloneNode(true) as HTMLElement;
      duplicatedContent.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedContent);
    }

    return () => {
      window.removeEventListener("resize", calculateMarqueeLength);
    };
  }, []);

  const design =
    "inline-flex items-center text-4xl sm:text-6xl md:text-8xl lg:text-[100px] text-white px-3 sm:px-4 md:px-6";

  return (
    <section
      className={`w-[${marqueeLength}] overflow-hidden bg-[#337225] py-8 -rotate-3`}>
      <div
        ref={scrollerRef}
        className="relative flex whitespace-nowrap"
        style={{
          mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          WebkitMask:
            "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          width: `${marqueeLength}px`,
        }}>
        <div
          ref={contentRef}
          className={`flex items-center animate-scroll1 ${anton.className}`}>
          <span className={design}>UI DESIGNING</span>
          <span className={design}>#</span>
          <span className={design}>UX REPORT</span>
          <span className={design}>#</span>
          <span className={design}>FIGMA</span>
          <span className={design}>#</span>
          <span className={design}>LUNACY</span>
          <span className={design}>CANVA</span>
          <span className={design}>#</span>
          <span className={design}>VISME</span>
          <span className={design}>#</span>
        </div>
      </div>
    </section>
  );
};

export default Marquee2;
