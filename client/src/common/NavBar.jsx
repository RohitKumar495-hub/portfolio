import React from 'react'
import { navItems } from '../data/navItems'
import { Link } from 'react-scroll'
import { FaMoon } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";

const NavBar = ({darkMode , setDarkMode , close}) => {


    const handleLinkClick = () => {
        if (window.innerWidth < 1024 && close) {
          close(); // Close only on mobile view when function is provided
        }
      };

  return (
    <section className='grid lg:gap-5 gap-4'>

        {
            navItems.map((data , index) => {
                return (
                    <Link 
                        // to={data.url}
                        // spy={true}
                        // smooth={true}
                        // offset={data.url === 'contact' ? -70 : -80}
                        // duration={500}
                        // activeClass="text-[#3B7F60] font-semibold" 
                        // key={data.name + index}
                        className='cursor-pointer flex items-center flex-1 gap-3 hover:text-[#3B7F60] ml-5 text-lg' 
                        onClick={handleLinkClick}
                    >
                        <data.image />
                        {data.name}
                    </Link>
                )
            })
        }

        <button type='button' onClick={() => {
            setDarkMode(prev => !prev)
            }} className='flex items-center gap-3 bg-[#2F6B50] hover:bg-[#264D3F] px-2 py-1 rounded cursor-pointer justify-center mr-2'>

            {
                darkMode ? 
                <div className='flex items-center gap-3'>
                    <LuSunDim size={20}/>
                    Light Mode
                </div>
                
                 :                 
                 <div className='flex items-center gap-3'>
                    <FaMoon/>
                 Dark Mode
             </div>
            }

        </button>
      
    </section>
  )
}

export default NavBar
