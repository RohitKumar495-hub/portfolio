import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import { motion } from 'framer-motion'

const Contact = ({darkMode}) => {

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm('service_fooyh6w', 'template_yb5e19k', form.current, {
          publicKey: 'LkMkvFKOmlkML4B4f',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success("Email Sent Successfully")
            form.current.reset(); // optional: clears the form after sending
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Something went wrong. Please try again!')
          }
        )
    }

    return (
        <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='p-4 pb-0 mb-0'
        >

            <h1 className='text-xl font-bold'>Contact Me</h1>

            <div className='h-fit rounded p-5'>
                <p className='text-center'>
                    Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me
                    an email at <br />
                    <strong>kumarguptarohit2005@gmail.com</strong>
                </p>

                <form className={`rounded ${darkMode ? 'text-[#E6EDF3]' : ''} p-4 mt-6 grid gap-4`} ref={form} onSubmit={sendEmail}>
                    <div className='grid gap-2'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            required
                            className={`${darkMode ? 'bg-[#161B22]' : 'bg-red-50'} p-2 rounded outline-none`}
                        />
                    </div>

                    <div className='grid gap-2'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            className={`${darkMode ? 'bg-[#161B22]' : 'bg-red-50'} p-2 rounded outline-none`}
                        />
                    </div>

                    <div className='grid gap-2'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            rows='4'
                            required
                            className={`${darkMode ? 'bg-[#161B22]' : 'bg-red-50'} p-2 rounded outline-none`}
                        ></textarea>
                    </div>

                    <div className='mt-4 w-28'>
                        <button className={`w-24 ${darkMode ? 'hover:bg-[#264D3F] bg-[#2F6B50]' : 'bg-[#54B689] hover:bg-[#2F6B50]'} px-2 py-1 rounded cursor-pointer text-white`}>Submit</button>
                        {/* <Button name='Submit' color='bg-[#54B689]' hoverColor='hover:bg-[#2F6B50]' /> */}
                    </div>
                </form>
            </div>

        </motion.div>
    )
}

export default Contact
