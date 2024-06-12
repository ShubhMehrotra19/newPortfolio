"use client"
import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import './description.css'
import Image from 'next/image';

interface Props {}

function Description(props: Props) {
    const {} = props
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className='flex flex-col justify-center items-center mb-24'>
           <video autoPlay muted loop ref={videoRef} className='video w-full h-full object-cover cursor-pointer'>
               <source src="/video/video.mp4" type="video/mp4"/>
              </video>
        </section>
    )
}

export default Description
