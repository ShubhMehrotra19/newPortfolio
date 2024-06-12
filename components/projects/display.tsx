import Image from 'next/image'
import React, { useRef } from 'react'
import './projects.css'
import Link from 'next/link'

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
                    <p className='font-semibold font-["Anton"] text-4xl'>{projectName}</p>
                    <p className='font-light font-["Open_Sans"] text-base'>{shortDes}</p>
                </div>
                <Link href={gitLink} target='_blank'><Image src='/icons/arrow_link.png' ref={linkedRef} className='linked cursor-pointer hover:rotate-90 hover:scale-[102%] transition duration-500 delay-75 ease-in-out' alt='arrow' height={100} width={100} /></Link>
            </div>
        </div>
    )
}

export default Display