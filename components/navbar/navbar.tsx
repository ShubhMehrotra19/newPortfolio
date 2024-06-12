"use client";
import React, { useRef } from "react";
import "./navbar.css";
import Image from "next/image";

interface Props {}

function Navbar(props: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <nav className="mx-12 mt-3 mb-20 flex justify-between items-center">
      <Image src="/icons/logoIcon.png" width={200} height={120} alt="" />
      <div
        ref={menuRef}
        className="menu cursor-pointer flex justify-center items-center gap-6 px-3"
      >
        <p className="font-light text-lg">menu</p>
        <Image
          className="transition-all duration-300 ease-in-out delay-75"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          src={`${isClicked ? `/icons/menu.png` : `/icons/close.png`}`}
          width={30}
          height={30}
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
