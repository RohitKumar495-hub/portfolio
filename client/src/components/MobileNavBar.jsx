import React from 'react'
import SocialLinks from './SocialLinks'
import NavBar from '../common/NavBar'
import { IoClose } from 'react-icons/io5'
import navpic from '../assets/images/b.jpg'

const MobileNavBar = ({ close, darkMode, setDarkMode }) => {
    return (

        <div className='sticky top-0 left-0 right-0 bottom-0 z-100'>

            <div className={`${darkMode ? 'bg-[#161B22]' : 'bg-[#54B689]'} text-white p-3`}>
                <div className='flex items-center justify-between gap-4'>
                    <h1 className='text-2xl font-bold'>Rohit Kumar</h1>
                    <button onClick={close}>
                        <IoClose size={22} />
                    </button>
                </div>

                <div className='w-full h-full flex flex-col gap-3 items-center justify-center'>

                    <div className='bg-white w-30 h-30 rounded-full'>
                        <img src={navpic} alt="navpic" className='w-full h-full rounded-full object-cover' />
                    </div>

                    <p className='text-justify'>Hi, my name is Rohit Kumar and I’m a web developer. Welcome to my personal website!</p>

                    <SocialLinks />

                    <NavBar setDarkMode={setDarkMode} darkMode={darkMode} close={close} />

                </div>

            </div>

        </div>

    )
}

export default MobileNavBar
