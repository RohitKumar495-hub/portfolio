import React from 'react'
import skillData from '../data/skillData'

const SkillBox = () => {
  return (
    <>


    {
        skillData.map((data , index) => {
            const stacks = Object.keys(data)
            .filter(key => key.startsWith('stack') && data[key]) // filters stack1, stack2, ... which are not null/undefined
            .map(key => data[key]);
            return (
                <>
                
                    <div className='bg-red-50 sm:max-w-74 w-[300px] p-5 grid xl:gap-6 gap-4 rounded' key={data.name + index}>
                        
                        <div className='flex items-center gap-4'>
                            <data.icon size={30}/>
                            <h1 className='font-bold text-xl'>{data.name}</h1>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            {stacks.map((stackItem, i) => (
                                <div key={i} className='h-8 lg:w-24 sm:text-[10px] lg:text-sm flex items-center justify-center rounded bg-slate-600 text-white'>
                                    <p>{stackItem}</p>
                                </div>
                            ))}
                        </div>

                    </div>



                </>
            )
        })
    }
    </>
       
  )
}

export default SkillBox
