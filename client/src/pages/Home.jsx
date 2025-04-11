import React, { useState } from 'react'
import Navlink from '../components/Navlink'
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import QualificationDetails from '../components/QualificationDetails';
import SkillBox from '../components/SkillBox';
import ProjectBox from '../components/ProjectBox';
import Form from '../components/Form';
import { IoMenu } from "react-icons/io5";
import MobileNavBar from '../components/MobileNavBar';
import navpic from '../assets/images/b.jpg'
import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";

const Home = () => {

  const [openmobileNavbar , setOpenMobileNavbar] = useState(false)

  return (
    <section className='grid grid-cols-[20%_80%]'>
      
      {/* left side */}

        <div className='bg-[#54B689] p-2 h-[100vh] text-white lg:flex items-center flex-col gap-5 sticky top-0 hidden'>

            <h1 className='font-bold text-3xl'>Rohit Kumar</h1>
            <div className='rounded-full w-30 h-30 bg-white'>
                <img src={navpic} alt="" className='rounded-full'/>
            </div>
            <p className='text-justify'>Hi, my name is Rohit Kumar and I’m a web developer . Welcome to my personal website!</p>
            
            <SocialLinks/>

            <Navlink/>

            <Button name='Light Mode' color='bg-[#3B7F60]' size={36} hoverColor='hover:bg-[#2F6B50]' icon={<FaMoon size={20} />}/>


        </div>

        {/* right side */}

        <div className='h-auto lg:p-5 grid gap-6'>

        <div className='bg-[#54B689] w-full h-20 flex items-center justify-between p-5 text-white lg:hidden md:w-3xl sm:w-full'>
          <h1 className='text-3xl font-bold'>Rohit</h1>
            <button onClick={() => setOpenMobileNavbar(true)}>
              <IoMenu size={35}/>
            </button>
        </div>

          {/* header section */}

          <Header/>

          {/* about section */}

          <div className='overflow-hidden'>

            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }} // optional settings
                id='about' 
                className='p-5 grid gap-2 bg-[#EEFFF6] h-auto rounded w-92 md:w-full sm:w-full mt-7'
            >

              <h1 className='text-xl font-bold'>Who I Am?</h1>
              <p className='text-justify '>I'm a passionate Web Developer who loves turning ideas into interactive digital experiences. With a strong foundation in both frontend and backend technologies, I enjoy building web applications that are not just functional, but also user-friendly and visually engaging. I'm always curious, always learning, and constantly striving to improve my craft. Whether it's solving complex problems or exploring new frameworks, I thrive on the creative side of code. When I’m not coding, you might find me exploring design trends, learning new tech, or binging sci-fi shows.</p>
              
            </motion.div>

          </div>


          {/* qualification section */}

          <div className='overflow-hidden'>
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
              id='education' className='bg-red-50 p-5 w-92 sm:w-full md:w-full'>
                <h1 className='font-bold text-xl'>My Qualification</h1>

                <QualificationDetails/>

            </motion.div>
          </div>



          {/* my skills */}

          <div id='skill' className='p-5 grid gap-4 w-92 sm:w-full md:w-full bg-amber-50 overflow-x-auto scrollbar-hide'>

            <h1 className='text-xl font-bold'>My Skills</h1>
            <div className='lg:grid lg:grid-cols-3 gap-8 flex'>
              <SkillBox/>
            </div>
          </div>

          {/* my projects */}

          <div id='project' className='bg-red-50 rounded p-5 grid gap-4 w-92 sm:w-full overflow-x-auto md:w-full scrollbar-hide '>

            <h1 className='font-bold text-xl'>My Projects</h1>

            <div className='gap-8 flex'>
              <ProjectBox/>
            </div>


          </div>

          {/* contact me section */}

          <div className='overflow-hidden'>
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              id='contact' className='grid gap-4 p-5'
            >
              <h1 className='font-bold text-xl'>Contact Me</h1>

                <Form/>

            </motion.div>
          </div>


          {/* Social Links */}

          <div id='social_links' className='mx-auto'>
            <SocialLinks/>
          </div>


        </div>

        {

          openmobileNavbar && (
            <MobileNavBar close={() => setOpenMobileNavbar(false)}/>
          )
        }


    </section>
  )
}

export default Home
