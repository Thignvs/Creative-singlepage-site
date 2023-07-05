import React, { useState } from 'react'
import slide1 from '../../assets/mobile/image-slide-1.jpg'
import slide2 from '../../assets/mobile/image-slide-2.jpg'
import slide3 from '../../assets/mobile/image-slide-3.jpg'
import slidetablet1 from '../../assets/tablet/image-slide-1.jpg'
import slidetablet2 from '../../assets/tablet/image-slide-2.jpg'
import slidetablet3 from '../../assets/tablet/image-slide-3.jpg'
import slidedesktop1 from '../desktop/image-slide-1.jpg'
import slidedesktop2 from '../desktop/image-slide-2.jpg'
import slidedesktop3 from '../desktop/image-slide-3.jpg'
import arrowPrevius from '../desktop/icon-arrow-previous.svg'
import arrowNext from '../desktop/icon-arrow-next.svg'



const Carousel = () => {

    const imagens = [
        {
            url: slide1,
            descricao: "Lean Product Roadmap",
            descricao2: "2023 Project",
        },
        {
            url: slide2,
            descricao: "New Majestic Hotel",
            descricao2: "2022 Project",
        },
        {
            url: slide3,
            descricao: "Crypto Dashboard",
            descricao2: "2021 Project",
        },
    ];

    const imagensTablet = [
        {
            url: slidetablet1,
            descricao: "Lean Product Roadmap",
            descricao2: "2023 Project",
        },
        {
            url: slidetablet2,
            descricao: "New Majestic Hotel",
            descricao2: "2022 Project",
        },
        {
            url: slidetablet3,
            descricao: "Crypto Dashboard",
            descricao2: "2021 Project",
        },
    ];

    const imagensDesktop = [
        {
            url: slidedesktop1,
            descricao: "Lean Product Roadmap",
            descricao2: "2023 Project",
        },
        {
            url: slidedesktop2,
            descricao: "New Majestic Hotel",
            descricao2: "2022 Project",
        },
        {
            url: slidedesktop3,
            descricao: "Crypto Dashboard",
            descricao2: "2021 Project",
        },
    ];



    const description = [
        {
            descrip: "Brand naming & guidelines"
        },
        {
            descrip: "Brand identity & merchandise"
        },
        {
            descrip: "Brand identity & web design"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const previousSlide = () => {
        const index = (currentIndex + imagens.length - 1) % imagens.length;
        setCurrentIndex(index);
    };
    const nextSlide = () => {
        const index = (currentIndex + 1) % imagens.length;
        setCurrentIndex(index);
    };



    return (
        <div className='flex flex-col w-full md:flex-row-reverse'>
            <div className='flex flex-col md:relative md:w-[60%]'>
                <div className='relative flex right-0'>
                    <img className='w-full md:hidden' src={imagens[currentIndex].url} alt="carouselMobile" />
                    <img className='w-full hidden md:block lg:hidden' src={imagensTablet[currentIndex].url} alt="carouselMobile" />
                    <img className='w-full hidden lg:block' src={imagensDesktop[currentIndex].url} alt="carouselMobile" />
                    <div className="absolute bottom-3 right-3 p-4 flex flex-col items-end md:bottom-6 md:right-6 lg:bottom-12 lg:right-10">
                        <p className="text-White font-extrabold">{imagens[currentIndex].descricao}</p>
                        <p className="text-White">{imagens[currentIndex].descricao2}</p>
                    </div>
                </div>
            </div>
            <div className='py-20 bg-BgBlack px-5 flex flex-col md:self-start md:absolute md:left-0 md:w-[45%] md:py-32 md:px-10 lg:px-28'>
                <span className='hidden md:block absolute text-White -right-5 font-extrabold text-7xl lg:top-[40%] lg:text-8xl lg:-right-7'>~</span>
                <div className='flex'>
                    <p className='text-White font-extrabold text-4xl lg:text-6xl lg:py-20'>{description[currentIndex].descrip}</p>
                </div>
                <div className='flex gap-5 mt-5'>
                    <img onClick={previousSlide} className='cursor-pointer' src={arrowPrevius} alt="arrowpreviousimage" />
                    <img onClick={nextSlide} className='cursor-pointer' src={arrowNext} alt="arrownextimage" />
                </div>
            </div>
        </div>
    )
}

export default Carousel