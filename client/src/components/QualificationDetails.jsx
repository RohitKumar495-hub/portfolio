import React from 'react'
import qualificationDetails from '../data/qualificationDetails'

const QualificationDetails = () => {
    return (
        <>

            {
                qualificationDetails.map((detail, index) => {
                    return (
                        <>
                        <div className='flex items-center lg:gap-12 gap-6 justify-center mt-6'>

                                <div className='flex items-center'>
                                    <div className='bg-black px-2 py-1 lg:w-20 w-12 flex justify-center items-center rounded text-white'>
                                        <p clasACsName='font-bold'>{detail.startingYear}</p>
                                    </div>
                                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent bg-l-white"></div>
                                </div>

                                <div className='bg-[#24D9A0] w-4 h-4 lg:w-6 lg:h-6 rounded-full'></div>

                                <div className='w-[550px]' key={index}>
                                    <h1 className='font-semibold lg:text-xl text-md'>{detail.class}</h1>
                                    <p className='lg:text-base text-sm'>{detail.percentage}</p>
                                    <p className='lg:text-base text-sm'>{detail.address}</p>
                                    <p className='lg:text-base text-sm'>{detail.year}</p>
                                </div>
                        </div>

                        </>
                    )
                })
            }
        </>

    )
}

export default QualificationDetails
