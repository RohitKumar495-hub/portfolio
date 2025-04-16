import React, { useState } from 'react'
import SocialLinks from '../components/SocialLinks'
import NavBar from '../common/NavBar'
import { IoMenu } from "react-icons/io5";
import MobileNavBar from '../components/MobileNavBar';
import Header from '../components/Header';
import About from '../components/About';
import navpic from '../assets/images/b.jpg'
import EducationDetails from '../components/EducationDetails';
import SkillsDetails from '../components/SkillsDetails';
import ProjectDetails from '../components/ProjectDetails';
import Contact from '../components/Contact';

const HomePage = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(true)

    return (

        <div className='bg-green-500 h-[2500px]'>

        <section className='grid lg:grid-cols-[20%_80%] bg-green-700'>

            {/* /left side => navbar */}

            <div className={`${darkMode ? 'bg-[#161B22]' : 'bg-[#54B689]'} h-screen lg:block hidden p-2 text-white sticky top-0`}>

                <div className='w-full flex flex-col gap-3 items-center'>

                    <h1 className='text-3xl font-bold'>Rohit Kumar</h1>
                    <div className='bg-white w-40 h-40 rounded-full'>
                        <img src={navpic} alt="" className='rounded-full w-full h-full object-cover'/>
                    </div>

                    <p className='text-justify'>Hi, my name is Rohit Kumar and I’m a web developer. Welcome to my personal website!</p>

                    <SocialLinks />

                    <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

                </div>

            </div>

            {/* right side => content */}

            <div className={`${darkMode ? 'bg-[#0D1117] text-white' : 'bg-white'} `}>

                
                    {/* mobile navbar */}
                <div className='w-full grid gap-5'>

                <div className={`${darkMode ? 'bg-[#161B22]' : 'bg-[#54B689]'} p-4 text-white flex items-center justify-between gap-4 lg:hidden sticky top-0 left-0 right-0 bottom-0 z-50`}>

                    <h1 className='text-3xl font-bold'>Rohit</h1>
                    <button className='cursor-pointer' onClick={() => setOpenMobileMenu(true)}>
                        <IoMenu size={32} />
                    </button>

                </div>

                    {/* Header Section */}

                    <Header darkMode={darkMode} />

                    {/* About Section */}

                    <div className='overflow-hidden'>
                        <About darkMode={darkMode}/>
                    </div>


                    {/* Education Section */}

                    <div className='overflow-hidden'>
                        <EducationDetails darkMode={darkMode}/>
                    </div>

                    {/* Skills section */}

                        <SkillsDetails darkMode={darkMode}/>


                    {/* Projects sectiom */}

                        <ProjectDetails darkMode={darkMode}/>

                    {/* Contact Section */}

                    <div className='overflow-hidden'>
                        <Contact darkMode={darkMode}/>
                    </div>


                    {/* Social Links */}

                    <SocialLinks />

                </div>

            </div>


            {
                openMobileMenu && (
                    <MobileNavBar close={() => setOpenMobileMenu(false)} darkMode={darkMode} setDarkMode={setDarkMode} />
                )
            }

        </section>
        
        </div>
    )
}

export default HomePage
