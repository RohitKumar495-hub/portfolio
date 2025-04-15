import React from 'react'
import projectDetails from '../data/projectDetails'
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { Link } from 'react-router-dom'

const ProjectDetails = ({ darkMode }) => {
    return (

        <section id='project' className={`grid gap-6 p-4 ${darkMode ? 'bg-[#161B22]' : 'bg-red-50'}`}>

            <h1 className='font-bold text-xl'>My Projects</h1>

            <div className='flex overflow-x-auto gap-8'>

            {
            projectDetails.map((data , index) => {

                const stacks = Object.keys(data).
                    filter(key => key.startsWith('stack') && data[key]).
                    map(key => data[key])
                return (
                    <>

                    <div className={`w-84 max-h-[550px] rounded ${darkMode ? 'bg-[#0D1117]' : 'bg-white'} shadow-md p-5`} key={data.name + index}>
                        <div className='flex flex-col items-center gap-4'>
                            <h1 className={`font-semibold text-lg ${darkMode ? 'text-[#E6EDF3]' : ''}`}>{data.name}</h1>
                            <div>
                            <img src={data.image} alt="" />
                            </div>
                        </div>
                        
                        <p className='mt-4 font-semibold'>{data.type}</p>
                        <p className={`text-justify ${darkMode ? 'text-[#8B949E]' : ''}`}>{data.description}</p>

                        <div className='grid grid-cols-3 gap-4 mt-4'>
                            {
                                stacks.map((stackItem , index) => {
                                    return (
                                        <div className='h-8 w-16 md:w-19 md:text-sm text-xs flex items-center justify-center rounded bg-slate-600 text-white' key={index}><p>{stackItem}</p></div>
                                    )
                                })
                            }
                        </div>

                        <div className='flex gap-4 lg:justify-evenly mt-4 text-xs justify-between'>
                            <div className={`flex items-center gap-4 ${darkMode ? 'hover:bg-[#264D3F] bg-[#2F6B50]' : 'bg-[#54B689] hover:bg-[#2F6B50]'} text-white font-bold px-2 py-1 rounded w-24 justify-center cursor-pointer`}>
                                <FaGithub size={20}/>
                                <Link to={data.gitHubUrl}>GitHub</Link>
                            </div>
                            {
                                data.liveUrl && (
                                    <>
                                    <div className={`flex items-center gap-4 ${darkMode ? 'hover:bg-[#264D3F] bg-[#2F6B50]' : 'bg-[#54B689] hover:bg-[#2F6B50]'} text-white font-bold px-2 py-1 rounded w-24 justify-center cursor-pointer`}>
                                        <MdLiveTv size={20}/>
                                        <Link to={data.liveUrl}>Live</Link>
                                    </div>
                                    </>
                                )

                            }
                        </div>

                    </div>
                    
                    
                    </>
                )
            })
        }

            </div>

        </section>
    )
}

export default ProjectDetails
