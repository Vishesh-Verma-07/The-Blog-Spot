import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container'

// border-4 border-red-500

function Footer() {
  return (
    <footer className=' mt-auto overflow-hidden w-full max-w-8xl mx-auto px-4 py-2 bg-black text-gray-300'>
        
        <div className='flex justify-center items-center flex-col '>
            <div>
            <div className='flex justify-center items-center m-4 p-2 mb-0  hover:text-white'>
                <h1 className=' h-12 text-4xl font-bold pr-8'>THE BLOG SPOT</h1>
                <Logo width="45px" />
            </div>
            <hr className=' w-[25rem] h-1 mx-auto mt-2 m-4 bg-gray-100 border-0 rounded dark:bg-gray-700' />
            </div>
            <div className=' '>
                <ul>
                    <Link to = '' className='p-2 hover:text-white'> About Us</Link>
                    <Link to = '' className='p-2 hover:text-white'> Privacy Policy</Link> 
                    <Link to = '' className='p-2 hover:text-white'> Contact Us</Link>
                </ul>
            </div>
            <hr className=' w-4/5 h-0.5 mx-12 bg-gray-100 border-0 rounded md:my-4 dark:bg-zinc-400' />
            <div className=' hover:text-white'>
                <p className="text-sm m-4">
                     &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
            </div>

        </div>
      
    </footer>

  )
}

export default Footer