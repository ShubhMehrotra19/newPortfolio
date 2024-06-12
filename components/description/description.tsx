import React, { useRef } from "react";
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

function Description(props: Props) {
  const {} = props;
    const viewBtnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <section className="mb-32 mx-14 flex flex-col justify-center items-center">
      <div className="flex justify-between items-start w-full">
        <ul className={`text-base ${openSans.className} font-normal flex justify-start items-center gap-2`}>
          <div className="h-5 w-5 rounded-full bg-[#B2D12E]"></div> DEPLOYING
          PRODUCTS FROM KANPUR & DELHI, INDIA.
        </ul>
        <div className="flex flex-col justify-start items-start text-left">
          <p className={`font-medium text-4xl ${anton.className} leading-snug mb-5`}>
            A MULTIDISCIPLINARY DEVELOPER HARNESSING <br /> THE POWER OF DESIGN
            AND CREATIVITY <br /> TO ACHIEVE ONLINE GOALS.
          </p>
          <button type="submit" ref = {viewBtnRef} className={`viewBtn rounded-full border-black bg-black border-2 px-8 py-4 text-white text-base ${openSans.className} font-regular hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out`}>CONTACT ME</button>
        </div>
      </div>
    </section>
  );
}

export default Description;
