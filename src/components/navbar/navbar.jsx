import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <ul className="fixed top-0 inline-flex text-2xl items-center justify-evenly p-2 bg-red-500 w-full font-bold md:text-4xl z-100">
        <li className=''>
          <a href='#home'>Home</a>
        </li>
        <li className=''>
          <a href='#vehicles'>Vehicles</a>
        </li>
        <li className=''>
          <a href='#services'>Services</a>
        </li>
        <li className=''>
          <a href='#contact'>Contact</a>
        </li>
      </ul> 
    </div>
  )
}

export default Navbar