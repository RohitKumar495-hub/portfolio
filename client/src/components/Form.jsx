import React, { useRef } from 'react';
import Button from './Button';
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          alert('Something went wrong. Please try again!');
        }
      );
  };

  return (
    <div className='min-h-[500px] rounded p-5'>
      <p className='text-center'>
        Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me
        an email at <br />
        <strong>kumarguptarohit2005@gmail.com</strong>
      </p>

      <form className='bg-white rounded p-4 mt-6 grid gap-4' ref={form} onSubmit={sendEmail}>
        <div className='grid gap-2'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            className='bg-red-50 p-2 rounded outline-none'
          />
        </div>

        <div className='grid gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            className='bg-red-50 p-2 rounded outline-none'
          />
        </div>

        <div className='grid gap-2'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            rows='4'
            required
            className='bg-red-50 p-2 rounded outline-none resize-none'
          ></textarea>
        </div>

        <div className='mt-4 w-28'>
          <button className='w-24 bg-[#54B689] px-2 py-1 rounded hover:bg-[#2F6B50] cursor-pointer text-white'>Submit</button>
          {/* <Button name='Submit' color='bg-[#54B689]' hoverColor='hover:bg-[#2F6B50]' /> */}
        </div>
      </form>
    </div>
  );
};

export default Form;
