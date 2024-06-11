import React from 'react'
import './hero.css'

interface Props {}

function Hero(props: Props) {
    const {} = props

    return (
        <section className='flex flex-col mt-24 mb-8 mx-14'>
            <p className=' text-[140px] leading-[140px] text-[#121212] font-["Anton"]'>
                CREATIVE DESIGN AND <br /> WEBSITE DEVELOPER.  
            </p>
        </section>
    )
}

export default Hero
