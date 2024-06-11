"use client"
import React, { useRef } from "react";
import "./navbar.css";
import Image from "next/image";

interface Props {
  // onMouseEnter: () => void;
  // onMouseLeave: () => void;
}

function Navbar(props: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <nav className="mx-10 my-12 flex justify-between items-center">
      <h2 className='font-["Borel"] text-2xl font-semibold cursor-pointer'>
        shubh.com
      </h2>
      <div
        ref={menuRef}
        className="menu cursor-pointer flex justify-center items-center gap-6">
        <p className="font-light text-lg">menu</p>
        <Image className="transition-all duration-300 ease-in-out delay-75" onClick={() => {setIsClicked(!isClicked)}} src={`${isClicked ? `/icons/menu.png` : `/icons/close.png` }`} width={30} height={30} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
