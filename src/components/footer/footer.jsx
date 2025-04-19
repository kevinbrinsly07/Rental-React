import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='relative mt-40'>
      <div className='absolute bottom-0 w-full h-5 bg-white'>
        <h3 className='footerText text-sm bg-red-500'>@Brinsly, All rights reserved</h3>
      </div>
    </div>
  )
}

export default Footer;