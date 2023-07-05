import React, { useState} from 'react'
import hamburger from '../mobile/icon-hamburger.svg'
import cross from '../mobile/icon-cross.svg'
import ScheduleRed from './buttons/ScheduleRed'

const NavMobile = () => {

    const [isMenuVisible, setMenuVisible] = useState(false)
    const [isMenuIconActive, setMenuIconActive] = useState(false);

    const handleToggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        setMenuIconActive(isMenuIconActive);
        if (!isMenuVisible) {
            document.body.classList.add('overflow-x-hidden')
        }else {
            document.body.classList.remove('overflow-x-hidden')
        }
    }


    return (
        <div className='flex flex-col items-end relative'>
            <img onClick={handleToggleMenu} className={`cursor-pointer ${isMenuVisible ? 'hidden' : 'block'}`} src={hamburger} alt="hamburgericon" />
            <img onClick={handleToggleMenu} className={`cursor-pointer ${isMenuVisible ? 'block' : 'hidden'}`} src={cross} alt="hamburgericon" />

            <div className={`flex flex-col absolute transition-all duration-500 right-3 top-[53px] ${isMenuVisible ? 'block' : 'hidden'}`}>
                <ul className='bg-BgBlack text-White flex flex-col items-center py-5 px-3 gap-2 w-64'>
                    <li className='p-2 text-center cursor-pointer'>About</li>
                    <li className='p-2 text-center cursor-pointer'>Service</li>
                    <li className='p-2 text-center cursor-pointer'>Projects</li>
                    <div className='pt-5'>
                    <ScheduleRed /></div>
                </ul>
                
            </div>
            
        </div>
    )
}

export default NavMobile