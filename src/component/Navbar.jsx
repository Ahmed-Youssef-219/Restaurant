import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Navbar = ({ isDark, setIsDark }) => {

    const [isActive, setIsActive] = useState(true)
    const handleMood = () => {
        setIsDark((prevState) => {
            return !prevState;
        })
    }
    const handleMenu = () => {
        setIsActive((prevState) => {
            return !prevState;
        })
        console.log(isActive);
    }
    window.onscroll = () => {
        setIsActive(true);
    }

    const handleLink = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="backdrop-blur-lg z-[100] fixed top-0 right-0 left-0 dark:bg-slate-900/90 bg-white/50 flex items-center justify-between border-black border-b-2 w-screen py-2 px-1 sm:px-4">
            <h1><Link onClick={handleLink} className='font-bold dark:text-slate-200 text-slate-800 py-3 px-4 text-5xl' to='/'>Gusto</Link></h1>
            <ul className={`text-slate-800 dark:text-slate-200 md:items-center md:justify-between w-screen md:w-max flex-col md:flex-row absolute top-[66px] z-50 right-0 left-0 md:static items-end dark:bg-slate-900 bg-white font-bold dark:md:bg-transparent md:bg-transparent dark:backdrop-blur-lg dark:md:backdrop-blur-none  ${isActive ? 'clip-path-hidden' : 'clip-path-visible'} md:clip-path-none list-none flex text-slate-200  text-lg`}>
                <li className="mx-2 w-full md:w-fit cursor-pointer px-3 py-1 hover:text-white md:hover:rounded hover:scale-95 dark:hover:bg-white dark:hover:text-slate-800 hover:bg-slate-900"><Link onClick={handleLink} className='p-3' to="/">Home</Link></li>
                <li className="mx-2 w-full md:w-fit cursor-pointer px-3 py-1 hover:text-white md:hover:rounded hover:scale-95 dark:hover:bg-white dark:hover:text-slate-800 hover:bg-slate-900"><Link onClick={handleLink} className='p-3' to="/about">About</Link></li>
                <li className="break-keep mx-2 w-full md:w-fit cursor-pointer px-3 py-1 hover:text-white md:hover:rounded hover:scale-95 dark:hover:bg-white dark:hover:text-slate-800 hover:bg-slate-900"><Link onClick={handleLink} className='p-3' to="/bestdishes">Best_Dishes</Link></li>
                <li className="mx-2 w-full md:w-fit cursor-pointer px-3 py-1 hover:text-white md:hover:rounded hover:scale-95 dark:hover:bg-white dark:hover:text-slate-800 hover:bg-slate-900"><Link onClick={handleLink} className='p-3' to="/contact">Contact</Link></li>

            </ul>
            {isDark ? (
                <div className="md:mx-6 dark:bg-white p-2 rounded-full">
                    <BsFillMoonStarsFill className="text-2xl cursor-pointer dark:text-slate-800" onClick={handleMood} />
                </div>
            ) : (
                <div className="md:mx-6 bg-slate-900 p-2 rounded-full">
                    <BsFillSunFill className="text-2xl cursor-pointer text-white" onClick={handleMood} />
                </div>
            )}
            {
                isActive ? (
                    <FiMenu className="block md:hidden mx-5 dark:text-slate-200 text-slate-800 text-xl cursor-pointer" onClick={handleMenu} />
                ) : (
                    <AiOutlineClose className="mx-5 md:hidden dark:text-slate-200 text-slate-800 text-xl cursor-pointer" onClick={handleMenu} />
                )
            }

        </div>
    );
}


export default Navbar
