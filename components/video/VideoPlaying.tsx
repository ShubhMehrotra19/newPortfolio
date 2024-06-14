"use client"
import React, { useRef } from 'react'

interface Props {}

function VideoPlaying(props: Props) {
    const {} = props
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className='flex flex-col justify-center items-center md:mb-16 mb-6'>
           <video autoPlay muted loop ref={videoRef} className='video w-full h-full object-cover cursor-pointer mb-8'>
               <source src="https://res.cloudinary.com/dwftb7joy/video/upload/f_auto:video,q_auto/xwmxgd7ritithfaypjbm" type="video/mp4"/>
              </video>
        </section>
    )
}

export default VideoPlaying
