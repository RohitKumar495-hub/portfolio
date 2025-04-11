import React from 'react'
import { ImMail4 } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const SocialLinks = () => {
  return (
    <div className='flex gap-6 items-center'>

      <a
        href='https://github.com/RohitKumar495-hub'
        className="hover:text-[#352222]"
      >
        <SiGithub size={36}/>
      </a>

      <a
        href='https://www.linkedin.com/in/rohit-kumar-4a170328a'
        className="hover:text-[#352222]"
      >
        <TiSocialLinkedinCircular size={48}/>
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=yourmail@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#352222]"
      >
        <ImMail4 size={36}/>
      </a>

  </div>
  )
}

export default SocialLinks
