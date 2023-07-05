import React from 'react'

const Approach = () => {
    return (
        <div className='flex flex-col md:flex-row lg:relative'>
            <div className='font-extrabold bg-Red md:bg-White px-5 pt-20 md:w-[40%]'>
                <p className='text-White text-3xl lg:absolute lg:w-1/3 left-1/4 lg:text-6xl xl:lg:w-1/4 md:text-TextBlack'>Our approach for creating a winning brand</p>
            </div>
            <div className='flex flex-col gap-28 bg-Red py-20 text-White md:py-0 md:pb-32 md:w-[60%] lg:pl-80 lg:pr-7'>
                <div className='relative'>
                    <p className='font-extrabold text-8xl px-10 text-RedHover'>01</p>
                    <div className='absolute px-14 text-White top-9'>
                        <p className='font-extrabold py-4'>Brand Strategy</p>
                        <p className='leading-7'>Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.</p>
                    </div>
                </div>

                <div className='relative'>
                    <p className='font-extrabold text-8xl px-10 text-RedHover'>02</p>
                    <div className='absolute px-14 text-White top-9'>
                        <p className='font-extrabold py-4'>Brand Design</p>
                        <p className='leading-7'>Keeping the brand design unique and meaningful helps in communicating the brand’s value effectively.</p>
                    </div>
                </div>

                <div className='relative pb-20'>
                    <p className='font-extrabold text-8xl px-10 text-RedHover'>03</p>
                    <div className='absolute px-14 text-White top-9'>
                        <p className='font-extrabold py-4'>Web Design</p>
                        <p className='leading-7'>A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approach