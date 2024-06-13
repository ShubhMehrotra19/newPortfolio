import React from "react";
import { Anton, Open_Sans } from "next/font/google";
import Link from "next/link";

export const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["300", "600", "800"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

function Comp({ homeRef, aboutRef, workRef }: any) {
  function handleClickHome() {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  }

  function handleClickAbout() {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  }

  function handleClickWork() {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  }

  return (
    <div
      className={`${openSans.className} flex justify-evenly items-center gap-5`}
    >
      <button
        onClick={handleClickHome}
        style={{ cursor: 'url("/icons/cursor.png"), auto' }}
        className="px-6 py-2 rounded-full font-[600] text-[#b2de21] bg-black hover:scale-[102%] hover:bg-[#b2de21] hover:text-black active:scale-95 transition-all duration-300 delay-75 ease-in-out"
      >
        HOME
      </button>
      <button
        onClick={handleClickAbout}
        style={{ cursor: 'url("/icons/cursor.png"), auto' }}
        className="px-6 py-2 rounded-full font-[600] text-[#b2de21] bg-black hover:scale-[102%] hover:bg-[#b2de21] hover:text-black active:scale-95 transition-all duration-300 delay-75 ease-in-out"
      >
        ABOUT
      </button>
      <button
        onClick={handleClickWork}
        style={{ cursor: 'url("/icons/cursor.png"), auto' }}
        className="px-6 py-2 rounded-full font-[600] text-[#b2de21] bg-black hover:scale-[102%] hover:bg-[#b2de21] hover:text-black active:scale-95 transition-all duration-300 delay-75 ease-in-out"
      >
        WORK
      </button>
      <Link href="/">
        <button
          style={{ cursor: 'url("/icons/cursor.png"), auto' }}
          className="px-6 py-2 rounded-full font-[600] text-[#b2de21] bg-black hover:scale-[102%] hover:bg-[#b2de21] hover:text-black active:scale-95 transition-all duration-300 delay-75 ease-in-out"
        >
          CONTACT
        </button>
      </Link>
    </div>
  );
}

export default Comp;
