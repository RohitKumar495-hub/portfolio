import React from 'react'
import socialLinksDetails from '../data/socialLinks'

const SocialLinks = () => {
  return (
    <section className='flex items-center justify-center gap-8'>

        {
            socialLinksDetails.map((data , index) => {
                return (
                    <div key={index}>
                        <a href={data.url} className='hover:text-[#352222]'>
                            <data.icon size={data.size}/>
                        </a>
                    </div>
                )
            })
        }
      
    </section>
  )
}

export default SocialLinks
