// marquee2.tsx
import React from "react";
import "./marquee2.css";
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

function Marquee2(props: Props) {
  const {} = props;
  const textWidth = 8000; 

  return (
    <section className="md:w-[1800px] w-[600px] md:h-[160px] h-[80px] bg-[#337225] flex justify-center items-center -ml-3 -rotate-[3deg] overflow-hidden">
      <div className="scrolling-text whitespace-nowrap">
        <span
          className={`md:text-[120px] text-[40px] ${anton.className} text-white inline-block`}
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