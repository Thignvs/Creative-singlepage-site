import React from 'react'
import strategicimg from '../mobile/image-strategic.jpg'
import strategicimgtablet from '../tablet/image-strategic.jpg'
import strategicimgdesktop from '../desktop/image-strategic.jpg'
import ScheduleRedTransparent from './buttons/ScheduleRedTransparent'

const Strategic = () => {
    return (
        <div className='flex flex-col md:flex-row md:relative'>
            <div className='md:w-[50%]'>
                <img className='w-full md:hidden' src={strategicimg} alt="strategicimage" />
                <img className='hidden md:block w-[100%] lg:hidden' src={strategicimgtablet} alt="strategicimagetablet" />
                <img className='hidden lg:block w-full' src={strategicimgdesktop} alt="strategicimagedesktop" />
            </div>
            <div className='flex flex-col px-5 md:w-[50%] bg-BgBlack relative py-10 md:px-14 lg:px-24 lg:pt-36 xl:pt-48 2xl:pt-96'>
                <div className='absolute -top-20 md:-left-10 md:top-[5%] lg:top-[15%] xl:top-[20%] 2xl:top-[25%]'>
                    <span className='text-Red text-9xl font-extrabold'>~</span>
                </div>
                <p className='text-White font-extrabold text-4xl py-10 lg:text-6xl'><span className='text-Red'>Design</span> is strategic.</p>
                <p className='text-White leading-7 mb-10 lg:text-lg lg:w-3/4'>"A well-crafted design strategy consistently produces desired outcomes and brand awareness.
                    We are firm believers that success lies in creative collaboration with our clients."
                </p>
                <ScheduleRedTransparent />
            </div>
            <div className='hidden md:block h-28 w-[60%] bg-Red absolute bottom-0 right-0'></div>
        </div>
    )
}

export default Strategic