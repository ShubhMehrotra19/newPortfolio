import React from "react";
import "./navbar.css";
import Image from "next/image";

interface Props {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Navbar(props: Props) {
  const { onMouseEnter, onMouseLeave } = props;

  return (
    <nav className="mx-10 my-12 flex justify-between items-center">
      <h2 className='font-["Borel"] text-2xl font-semibold cursor-pointer'>
        shubh.com
      </h2>
      <div
        className="menu cursor-pointer flex justify-center items-center gap-6"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <p className="font-light text-lg">menu</p>
        <Image src="/icons/menu.png" width={30} height={30} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
