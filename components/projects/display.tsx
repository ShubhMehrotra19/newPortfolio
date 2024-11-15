import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link'
import { Anton, Open_Sans } from 'next/font/google';

export const anton = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin-ext', 'latin', 'vietnamese'],
  display: 'swap',
}) 

export const openSans = Open_Sans({
    weight: ["300","400", "500", "600", "700", "800"],
    style: ["normal"],
    subsets: ["latin-ext", "latin", "vietnamese"],
    display: "swap",
  });

function Display({ imageLink, projectName, shortDes, gitLink, deployedLink }: any) {
    const projectRef = useRef<HTMLImageElement>(null);
    const linkedRef = useRef<HTMLImageElement>(null);

    return (
        <div className='flex flex-col justify-center items-center mb-32'>
            <div className='w-full h-[700px] rounded-full cursor-pointer object-cover object-center mb-6 relative shadow-md'>
                <Link href={deployedLink} target='_blank'><Image ref={projectRef} className= 'projectImage rounded-[20px] border-2 border-black/40 hover:shadow-md hover:scale-[102%] transition-all duration-300 ease-in-out' src={imageLink} alt='hero' fill /></Link>
            </div>
            <div className='flex justify-between items-center w-full'>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <p className={`font-semibold ${anton.className} md:text-4xl text-2xl`}>{projectName}</p>
                    <p className={`font-semibold ${openSans.className} md:text-base text-sm`}>{shortDes}</p>
                    <div className='w-full flex md:hidden justify-end'>
                    <Link href={gitLink} target='_blank'><Image src='/icons/arrow_link.png' ref={linkedRef} className='md:hidden block linked cursor-pointer hover:rotate-90 hover:scale-110 transition duration-500 delay-75 ease-in-out' alt='' height={50} width={50} /></Link>
                    </div>
                </div>
                <Link href={gitLink} target='_blank'><Image src='/icons/arrow_link.png' ref={linkedRef} className='md:block hidden linked cursor-pointer hover:rotate-90 hover:scale-110 transition duration-500 delay-75 ease-in-out' alt='' height={100} width={100} /></Link>
            </div>
        </div>
    )
}

export default Display