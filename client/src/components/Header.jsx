import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import pic from '../assets/images/c.jpg'

const Header = ({darkMode}) => {
    return (

        
        <section className='w-full h-fit grid lg:grid-cols-[70%_30%] gap-4 lg:gap-0'>

            {/* left side => content */}
            <div className='p-4 grid gap-2 w-full '>

                <h1 className='font-bold lg:text-4xl text-3xl'>Rohit Kumar</h1>

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
                    className="text-xl"
                    repeat={Infinity}
                />

                <p className='text-justify text-sm'>Passionate and skilled Web Developer with a strong foundation in building fully functional, responsive, and user-centric web applications. Proficient in front-end and back-end technologies, with a keen eye for design, performance optimization, and cross-browser compatibility. Adept at turning complex problems into elegant, scalable solutions, and continuously learning new tools and frameworks to stay updated with the latest industry trends.</p>
                <div className='flex gap-6'>
                    <Link 
                        to='project'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={`flex items-center md:w-42 w-28 text-xs md:text-base px-2 py-1 cursor-pointer rounded gap-3 ${darkMode ? 'hover:bg-[#264D3F] bg-[#2F6B50]' : 'hover:bg-[#2F6B50] bg-[#54B689]'} text-white`}>
                        <FaArrowAltCircleRight size={20}/>
                        View Portfolio
                    </Link>

                    <button className={`flex items-center md:w-48 md:text-base text-xs w-36 px-2 py-1 cursor-pointer rounded gap-3 bg-[#4F4F4F] text-white`}>
                        <IoIosDocument size={24}/>
                        <a href="/Rohit_Kumar_Resume.pdf"
                        download='Rohit_Kumar_Resume.pdf'>
                        Download Resume
                        </a>
                    </button>
                </div>

            </div>

            {/* right side => pic */}

            <div className='flex items-center justify-center mt-3'>
                <img src={pic} alt="" className='lg:h-64 w-74 h-48' />
            </div>

        </section>
    )
}

export default Header
