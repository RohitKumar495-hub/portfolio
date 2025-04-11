import React from 'react'
import SocialLinks from './SocialLinks'
import Navlink from './Navlink'
import Button from './Button'
import { RiTelegram2Fill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import navpic from '../assets/images/b.jpg'

const mobileNavbar = ({close }) => {
  return (
    <div className='bg-[#54B689] p-2 h-[100vh] w-96 text-white flex items-center flex-col gap-5 fixed top-0'>

        <div className='flex justify-between items-center gap-3'>
            <h1 className='font-bold text-2xl'>Rohit Kumar</h1>
            <button onClick={close} className='cursor-pointer hover:text-red-400'>
                <IoClose size={30}/>
            </button>
        </div>
    <div className='rounded-full w-30 h-30 bg-white'>
        <img src={navpic} alt=""  className='w-full rounded-full'/>
    </div>
    <p className='text-justify text-xs'>Hi, my name is Rohit Kumar and I’m a web developer . Welcome to my personal website!</p>
    
    <SocialLinks/>

    <Navlink c={close}/>

    <Button name='Hire Me' color='bg-[#3B7F60]' size={36} hoverColor='hover:bg-[#2F6B50]' icon={<RiTelegram2Fill size={25} />}/>


</div>
  )
}

export default mobileNavbar
