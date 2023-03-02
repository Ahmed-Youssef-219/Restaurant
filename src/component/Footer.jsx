import React from 'react';
import {SiGmail} from 'react-icons/si';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='text-slate-900 dark:bg-slate-800 dark:text-white w-screen py-3 px-16'>
      <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between '>
        <h1 className='text-5xl font-bold p-3'>Gusto</h1>
          
          <div className='p-3'>
            <h3 className='text-xl font-bold text-center py-3'>Useful Links</h3>
            <ul className='text-lg'>
              <li className='hover:underline hover:font-bold cursor-pointer'>Home</li>
              <li className='hover:underline hover:font-bold cursor-pointer'>Our Dishes</li>
              <li className='hover:underline hover:font-bold cursor-pointer'>About</li>
              <li className='hover:underline hover:font-bold cursor-pointer'>Contact</li>
            </ul>
          </div>
          <div className='p-3'>
            <h3 className='text-xl font-bold py-3'>Contact via</h3>
            <ul className='text-lg w-full'>
              <li className='flex items-center justify-between hover:underline hover:font-bold cursor-pointer'>
                <BsFacebook className='text-lg' />
                <p>facebook</p>
              </li>
              <li className='flex items-center justify-between hover:underline hover:font-bold cursor-pointer'>
                <AiFillInstagram className='text-lg'/>
                <p>Instagram</p>
              </li>
              <li className='flex items-center justify-between hover:underline hover:font-bold cursor-pointer'>
                <AiOutlineTwitter className='text-lg'/>
                <p>Twitter</p>
              </li>
              <li className='flex items-center justify-between hover:underline hover:font-bold cursor-pointer'>
                <SiGmail className='text-lg'/>
                <p>G-mail</p>
              </li>
            </ul>
          </div>
      </div>
      <div>
        <div className='pt-6 pb-2 border-t-4 border-gray-400 text-center'>All Copyrights Reservied || <span className='text-slate-900 font-bold dark:text-white'>AY</span> </div>
      </div>
    </div>
  )
}

export default Footer;
