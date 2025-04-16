import React from 'react'
import { motion } from 'framer-motion'

const About = ({darkMode}) => {
  return (
    <motion.div 
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 2, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2 }} // optional settings
    id='about'
    className={`p-4 ${darkMode ? 'bg-[#161B22]' : 'bg-[#EEFFF6]'}`}>

        <h1 className='text-xl font-bold'>Who I Am?</h1>
        <p className='text-justify'>I'm a passionate Web Developer who loves turning ideas into interactive digital experiences. With a strong foundation in both frontend and backend technologies, I enjoy building web applications that are not just functional, but also user-friendly and visually engaging. I'm always curious, always learning, and constantly striving to improve my craft. Whether it's solving complex problems or exploring new frameworks, I thrive on the creative side of code. When I’m not coding, you might find me exploring design trends, learning new tech, or binging sci-fi shows.</p>
      
    </motion.div>
  )
}

export default About
