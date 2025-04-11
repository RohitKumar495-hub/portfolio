import React from 'react'
import { projectData } from '../data/projectData'
import Button from './Button'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const ProjectBox = () => {
  return (
    <>

        {
            projectData.map((data , index) => {

                const stacks = Object.keys(data).
                    filter(key => key.startsWith('stack') && data[key]).
                    map(key => data[key])
                return (
                    <>

                    <div className='w-84 max-h-[700px] bg-white rounded shadow-md p-5' key={data.name + index}>
                        <div className='flex flex-col items-center gap-4'>
                            <h1 className='font-semibold text-lg'>{data.name}</h1>
                            <div>
                            <img src={data.image} alt="" />
                            </div>
                        </div>
                        
                        <p className='mt-4 font-semibold'>{data.type}</p>
                        <p className='text-justify'>{data.description}</p>

                        <div className='grid grid-cols-3 gap-4 mt-4'>
                            {
                                stacks.map((stackItem , index) => {
                                    return (
                                        <div className='h-8 w-19 text-sm flex items-center justify-center rounded bg-slate-600 text-white' key={index}><p>{stackItem}</p></div>
                                    )
                                })
                            }
                        </div>

                        <div className='flex gap-4 lg:justify-evenly mt-4'>
                            <Button url={data.gitHubUrl} name='GitHub' size={42} color='bg-[#54B689]' hoverColor='hover:bg-[#2F6B50]' icon={<FaGithub/>}/>
                            {
                                data.liveUrl && (
                                    <Button url={data.liveUrl} name='Live' size={42} color='bg-[#54B689]' hoverColor='hover:bg-[#2F6B50]' icon={<MdLiveTv/>}/>
                                )
                            }
                        </div>

                    </div>
                    
                    
                    </>
                )
            })
        }




    </>
  )
}

export default ProjectBox
