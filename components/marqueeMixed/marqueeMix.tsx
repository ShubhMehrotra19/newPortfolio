import React from 'react'
import Marquee from './marquee/marquee'
import Marquee2 from './marquee2/marquee2'

interface Props {}

function MarqueeMix(props: Props) {
    const {} = props

    return (
        <section className='mb-96 relative w-full'>
            <div className='relative z-0'>
                <Marquee />
            </div>
            <div className='absolute z-10'>
                <Marquee2 />
            </div>
        </section>
    )
}

export default MarqueeMix
