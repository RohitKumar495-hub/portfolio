import React from 'react'
import { Link } from 'react-scroll'
import { navItems } from '../data/navitems'

const Navlink = ({c}) => {

  const handleLinkClick = () => {
    if (window.innerWidth < 1024 && c) {
      c(); // Close only on mobile view when function is provided
    }
  }; 


  return (
    <>
    
    {
              navItems.map((item , index) => {

                return (
                    <Link to={item.url}
                    spy={true}
                    smooth={true}
                    offset={item.url === 'contact' ? -70 : -80}
                    duration={500}
                    activeClass="text-[#3B7F60] font-semibold" 
                    key={item.name + index}
                    className='cursor-pointer'
                    onClick={handleLinkClick}
                    >
                    <div className='flex items-center text-lg gap-2 w-52 justify-center pr-4 hover:text-[#3B7F60]'>
                      <item.image size={20}/>
                      {item.name}
                    </div>
                    </Link>

                )
              })
            }

    </>
  )
}

export default Navlink
