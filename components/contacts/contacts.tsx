/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import { Anton, Open_Sans } from 'next/font/google';
import Image from 'next/image';

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

function Contacts(props: Props) {
    const {} = props

    const handleMail = () => {
      const mailTo = 'https://mail.google.com/mail/?view=cm&fs=1&to=hishubh09@gmail.com';
      window.open(mailTo, '_blank');
    };

    const mailRef = useRef<HTMLSpanElement>(null);

    return (
        <section className='flex flex-col justify-start items-start mx-14 mb-12 pb-20 border-b-2 border-[#3b3b3b]/30'>
            <p className={`${openSans.className} font-normal text-[20px] mb-5`}>HAVE A CREATIVE IDEA? LET'S TALK</p>
            <div className='flex gap-4 justify-start items-center w-full'>
            <p className={`${anton.className} text-[80px]`}>
            <span className='text-[#b7b7b7]'>hello</span><span onClick={handleMail} ref={mailRef} className='mailing cursor-pointer hover:text-[#b2d12e] hover:ml-5 transition-all duration-300 delay-75 ease-in-out'>@wevdevshubh.com</span>
            </p>
            <Image src='/icons/mail.png' alt='' width={80} height={80} className='hover:scale-110 hover:rotate-45 transition-all duration-300 delay-75 ease-in-out' />
            </div>
        </section>
    )
}

export default Contacts
