import React from 'react'
import NavMobile from './NavMobile'
import logo from '../desktop/logo.svg'
import ScheduleDark from './buttons/ScheduleDark'

const NavBar = () => {
    return (
        <div className='px-5 py-7 flex justify-between items-center md:bg-gradient-to-r from-White from-40% to-Red to-40% md:px-10 lg:px-20'>
            <img className='cursor-pointer' src={logo} alt="logosvg" />
            <div className='hidden md:flex gap-10 items-center'>
            <ul className='flex gap-5'>
                <li className='px-2 text-White cursor-pointer hover:font-extrabold'>About</li>
                <li className='px-2 text-White cursor-pointer hover:font-extrabold'>Services</li>
                <li className='px-2 text-White cursor-pointer hover:font-extrabold'>Projects</li>
            </ul>
            <ScheduleDark />
            </div>
            <div className='md:hidden'>
            <NavMobile />
            </div>
        </div>
    )
}

export default NavBar