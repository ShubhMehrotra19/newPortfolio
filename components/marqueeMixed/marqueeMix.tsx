import React from 'react'
import Marquee from './marquee/marquee'
import Marquee2 from './marquee2/marquee2'

interface Props {}

function MarqueeMix(props: Props) {
    const {} = props

    return (
        <section className='md:mb-64 mb-24 relative w-full'>
                <Marquee />
                <Marquee2 />
        </section>
    )
}

export default MarqueeMix
