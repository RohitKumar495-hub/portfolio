import React from 'react'
import qualificationDetails from '../data/qualificationDetails'
import { motion } from 'framer-motion'

const EducationDetails = ({darkMode}) => {
    return (
        <motion.section 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            id='education'
            className={`p-4 ${darkMode ? 'bg-[#0D1117]' : 'bg-red-50'} grid gap-6 mb-4`}
        >

            <h1 className='text-xl font-bold'>Education Details</h1>

            <div>

            {
                qualificationDetails.map((detail, index) => {
                    return (
                        <div className='flex items-center justify-center gap-6 mb-4'>

                                <div className='flex items-center justify-between'>
                                    <div className='bg-black px-2 py-1 lg:w-20 w-12 flex justify-center items-center rounded text-white'>
                                        <p className='font-bold'>{detail.startingYear}</p>
                                    </div>
                                    <div className='w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-black'></div>
                                </div>

                                <div className='bg-[#24D9A0] md:w-6 md:h-6 w-4 h-4 rounded-full'></div>

                                <div className='md:w-96 flex flex-col' key={index}>
                                    <h1 className='font-semibold md:text-xl text-lg'>{detail.class}</h1>
                                    <p className=''>{detail.percentage}</p>
                                    <p className=''>{detail.address}</p>
                                    <p className=''>{detail.year}</p>
                                </div>
                        </div>
                    )
                })
            }
            </div>

        </motion.section>
    )
}

export default EducationDetails
