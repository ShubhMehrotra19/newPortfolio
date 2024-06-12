import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin-ext', 'latin', 'vietnamese'],
  display: 'swap',
}) 



interface Props {}

function Effect(props: Props) {
    useEffect(() => {
        const tl = gsap.timeline();

        // Animate firstName in
        tl.fromTo('.firstName', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.02,
            ease: 'power3.inOut',
        });

        tl.fromTo('.lastName', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.02,
            delay: 0.3,
            ease: 'power3.inOut',
        }, "<");

    
        tl.to('.lastName', {
            y: 100,
            opacity: 0,
            duration: 0.6,
            stagger: 0.02,
            delay: 2,
            ease: 'power3.inOut',
        }, "<");

        tl.to('.firstName', {
            y: 100,
            delay: 0.4,
            opacity: 0,
            duration: 0.6,
            stagger: 0.02,
            ease: 'power3.inOut',
        }, "<");

    }, []);

    return (
        <div className='h-screen w-screen bg-black flex justify-center items-center'>
            <div className='w-fit px-5 pt-8 overflow-hidden flex justify-center items-center gap-2'>
                <h1 className={`firstName text-xl text-white font-extrabold ${roboto.className}`}>Creating</h1>
                <h1 className={`lastName text-xl text-white font-extrabold ${roboto.className}`}>Wonders</h1>
            </div>
        </div>
    );
}

export default Effect;
