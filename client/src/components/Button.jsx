import React from 'react'
import { Link } from 'react-scroll'

const Button = ({ name, icon, size, color, hoverColor, url }) => {
  return (
    <div className={`flex items-center h-9 lg:w-52 w-28 justify-center gap-4 ${color} font-bold px-2 py-1 rounded cursor-pointer ${hoverColor} text-white`}>

      <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to={url} className='cursor-pointer text-xs sm:text-sm lg:text-base md:text-xs flex items-center gap-4'>
        {icon}
        {name}</Link>
    </div>
  )
}

export default Button
