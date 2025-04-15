import React from 'react'
import skillDetails from '../data/skillsDetails';

const SkillsDetails = ({ darkMode }) => {
    return (

        <section id='skill' className={`grid gap-6 overflow-x-auto p-4 ${darkMode ? 'text-[#E6EDF3]' : 'bg-amber-50'}`}>

            <h1 className='font-bold text-xl'>Skills Details</h1>

            <div className='lg:grid lg:grid-cols-3 flex gap-8'>

                {
                    skillDetails.map((data, index) => {
                        const stacks = Object.keys(data)
                            .filter(key => key.startsWith('stack') && data[key]) // filters stack1, stack2, ... which are not null/undefined
                            .map(key => data[key]);
                        return (
                            <>

                                <div className={`w-64 p-4 grid gap-4 rounded ${darkMode ? 'bg-[#161B22]' : 'bg-red-50'}`} key={data.name + index}>

                                    <div className='flex items-center gap-4'>
                                        <data.icon size={30} />
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

            </div>

        </section>

    )
}

export default SkillsDetails
