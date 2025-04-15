import { FaUser } from "react-icons/fa";
import { BsFillLaptopFill } from "react-icons/bs";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";


export const navItems = [
    {
        name : 'About',
        image : FaUser,
        url : 'about' 
    },
    {
        name : 'Skills',
        image : FaUserGear,
        url : 'skill'
    },
    {
        name : 'Education',
        image : MdOutlineCastForEducation,
        url : 'education'
    },
    {
        name : 'Projects',
        image : BsFillLaptopFill,
        url : 'project'
    },

    {
        name : 'Contact',
        image : MdContactPhone,
        url : 'contact'
    },
    {
        name : 'Hire Me',
        image : MdOutlineCastForEducation,
        url : 'contact'
    }
]