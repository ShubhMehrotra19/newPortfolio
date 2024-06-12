// marquee2.tsx
import React from "react";
import "./marquee2.css";

interface Props {}

function Marquee2(props: Props) {
  const {} = props;
  const textWidth = 4800; // Adjust this value according to your text length

  return (
    <section className="w-[1800px] h-[160px] bg-[#337225] flex justify-center items-center -ml-3 mb-32 -rotate-[3deg] overflow-hidden">
      <div className="scrolling-text whitespace-nowrap">
        <span
          className="text-[120px] font-['Anton'] text-white inline-block"
          style={{ width: `${textWidth}px` }}
        >
          UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; FIGMA &nbsp; #
          &nbsp; LUNACY &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; VISME &nbsp; #
          &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; FIGMA
          &nbsp; # &nbsp; LUNACY &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; VISME
          &nbsp; # &nbsp;
          UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; FIGMA &nbsp; #
          &nbsp; LUNACY &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; VISME &nbsp; #
          &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; FIGMA
          &nbsp; # &nbsp; LUNACY &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; VISME
          &nbsp; # &nbsp;
          UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; FIGMA &nbsp; #
          &nbsp; LUNACY &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; VISME &nbsp; #
          &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; FIGMA
          &nbsp; # &nbsp; LUNACY &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; VISME
          &nbsp; # &nbsp;
          UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; FIGMA &nbsp; #
          &nbsp; LUNACY &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; VISME &nbsp; #
          &nbsp; UI DESIGNING &nbsp; # &nbsp; UX REPORT &nbsp; # &nbsp; FIGMA
          &nbsp; # &nbsp; LUNACY &nbsp; # &nbsp; CANVA &nbsp; # &nbsp; VISME
          &nbsp; # &nbsp;
        </span>
      </div>
    </section>
  );
}

export default Marquee2;