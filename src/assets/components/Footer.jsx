import React from 'react'
import ScheduleRed from './buttons/ScheduleRed'

const Footer = () => {
    return (
        <div className='flex flex-col md:items-center relative py-14 md:flex-row md:justify-between'>
            <div className='px-5 lg:px-0 lg:pl-24'>
                <span className='hidden lg:block absolute  text-9xl text-Red font-extrabold lg:-left-10'>~</span>
                <p className='text-TextBlack text-3xl font-extrabold py-5 md:w-[80%] lg:text-6xl'>Let's build something great together</p>
            </div>
            <div className='px-5 py-5 lg:px-0 lg:pr-24'>
                <ScheduleRed />
            </div>
        </div>
    )
}

export default Footer