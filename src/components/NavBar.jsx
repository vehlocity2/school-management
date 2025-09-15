import React from 'react'
import { FaHouseDamage } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='flex justify-between items-center px-20 py-6 shadow-md'>
        {/* {right section} */}
        <div className=''>
            <div className='flex items-center gap-8'>
                <FaHouseDamage className="w-14 h-14 text-blue-500" />
                <div>
                    <h1 className='text-3xl font-bold'>School Management</h1>
                    <p className='text-lg text-gray-600'>Excellence in Education since 1985</p>
                </div>
            </div>
        </div>
        {/* {left section} */}
        <div>
            <ul className='flex gap-10 items-center text-xl font-medium'>
                <li>
                    <NavLink to="/" className={({ isActive})=> `hover:text-blue-500 transition duration-300 cursor-pointer ${isActive ? 'border-b-2 border-blue-500 text-blue-500' : "text-gray-950"}`}>Home</NavLink>
                </li>
                <li >
                    <NavLink to="/contact" className={({ isActive})=> `hover:text-blue-500 transition duration-300 cursor-pointer ${isActive ? 'border-b-2 border-blue-500 text-blue-500' : "text-gray-950"}`}>Contact</NavLink>
                </li>
                <li >
                    <NavLink to="/news-and-events" className={({ isActive})=> `hover:text-blue-500 transition duration-300 cursor-pointer ${isActive ? 'border-b-2 border-blue-500 text-blue-500' : "text-gray-950"}`}>News & Events</NavLink>
                </li>
                <li className="py-4 px-4 bg-blue-500 hover:bg-blue-700 transition duration-300 text-white rounded-lg cursor-pointer ">
                    <Link to="/login" className="flex items-center justify-between gap-3">
                        <CiLogin className="w-8 h-8" />
                        <p className="text-2xl">Login Portal</p>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar