import React from 'react'
import heroimagemobile from '../mobile/image-hero.jpg'
import heroimagetablet from '../tablet/image-hero.jpg'
import heroimagedesktop from '../desktop/image-hero.jpg'
import LearnMore from './buttons/LearnMore'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row md:py-10 md:bg-heroBgTablet bg-no-repeat bg-right lg:bg-contain lg:bg-heroBgDesktop lg:py-52'>
                <img className='md:hidden' src={heroimagemobile} alt="heromobile" />
            <div className='flex flex-col items-start md:w-[70%] md:pl-10 gap-7 px-5 mb-20 lg:pl-32 lg:mb-0 lg:w-full'>
                <h1 className='text-TextBlack font-extrabold text-4xl pt-10 md:text-6xl lg:text-[80px] lg:w-[50%]'>Branding & website design agency</h1>
                <h2 className='text-TextBlack leading-7 lg:w-[40%] lg:text-lg'>We specialize in visual storytelling by creating cohesive brand and website design
                    solutions for small businesses, giving lasting impressions to audiences in a digital world.</h2>
                <LearnMore />
            </div>
        </div>
    )
}

export default Hero