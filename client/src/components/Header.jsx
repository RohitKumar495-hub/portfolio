import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Button from '../components/Button';
import { TypeAnimation } from 'react-type-animation';
import pic from '../assets/images/c.jpg'
import { motion } from "framer-motion";
import profile_pic from '../assets/images/a.jpg'

const Header = () => {
  return (
    <div className='lg:grid lg:grid-cols-[60%_40%] p-2 sm:gap-6 md:gap-2 lg:gap-0 flex sm:flex-row sm:items-center flex-col w-96 md:w-full'>

        <div className='p-4 grid gap-2'>
            <h1 className='font-bold text-4xl'>Rohit Kumar</h1>

            <TypeAnimation
            sequence={[
                'Web Developer',
                1000,
                'Frontend Developer',
                1000,
                'React Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Mern Stack Developer',
                1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl font-medium inline-block"
            repeat={Infinity}
            />




            <p className='w-full md:text-sm lg:text-base text-justify sm:w-[400px] lg:w-full md:w-[300px]'>Passionate and skilled Web Developer with a strong foundation in building fully functional, responsive, and user-centric web applications. Proficient in front-end and back-end technologies, with a keen eye for design, performance optimization, and cross-browser compatibility. Adept at turning complex problems into elegant, scalable solutions, and continuously learning new tools and frameworks to stay updated with the latest industry trends.</p>
            <div className='sm:flex sm:flex-row flex gap-4'>
                <Button url={'project'} name='View Portfolio' size={28} color='bg-[#54B689]' hoverColor='hover:bg-[#2F6B50]' icon={<FaArrowAltCircleRight size={24}/>}/>
                <div className='flex items-center gap-2 px-2 bg-[#4F4F4F] text-white rounded w-28 font-bold h-9 text-xs lg:text-base lg:w-52'>
                    <IoIosDocument size={24}/>
                    <a href="/Rohit_Kumar_Resume.pdf"
                    download='Rohit_Kumar_Resume.pdf'>
                    Download Resume
                    </a>
                </div>
                {/* <Button name='Download Resume' size={28} hoverColor='hover:bg-[#3A3A3A]' color='bg-[#4F4F4F]' icon={<IoIosDocument size={24}/>}/> */}
            </div>
        </div>

        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className='bg-red-100 w-64 h-54 rounded lg:w-74 lg:mx-auto mt-5 ml-6 md:ml-24 md:w-58 md:h-64 '
        >
            <img src={pic} alt="" className='h-64 w-74'/>
        </motion.div>

  </div>
  )
}

export default Header
