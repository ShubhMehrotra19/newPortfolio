import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Anton, Poppins, Open_Sans } from "next/font/google";

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

export const poppins = Poppins({
  weight: ["300", "400", "600", "800"],
  style: ["normal"],
  subsets: ["latin-ext", "latin"],
  display: "swap",
});

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <nav className="-mx-3 mt-3 mb-8 flex justify-between items-center select-none">
      <Image src="/icons/logoIcon.png" width={160} height={100} alt="" />
      <Link href="/">
        <button
          className={`px-8 py-2 bg-[#b2de21] text-white ${openSans.className} font-[600] rounded-full hover:scale-105 active:scale-95 transition-all duration-300 delay-75 ease-in-out`}
        >
          Go Back
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
