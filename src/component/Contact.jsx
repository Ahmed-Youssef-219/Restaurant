import React, { useState } from 'react';
/* import { tableNumbers } from '../constants'; */

const Contact = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    return (
        <div className='flex items-center justify-center pt-24 p-4 pb-12 bg-second bg-cover bg-contain bg-center- bg-fixed w-screen'>
            <form action="#" onSubmit={handleSubmit} className='bg-white/40 dark:bg-slate-900/70 px-8 py-6 rounded-lg backdrop-blur w-screen sm:w-[40rem]'>
                <div className='text-center text-2xl sm:text-4xl text-slate-900 dark:text-white md:text-4xl'>
                    <h1 className='text-3xl font-bold'>Contact Us</h1>
                </div>
                <div className='flex flex-col w-full text-slate-900 dark:text-white my-4'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' value={formData.firstName} name="firstName" onChange={handleChange} className='text-slate-900 border-2 rounded p-2 my-1 text-lg w-full outline-none focus:border-slate-900' />
                </div>
                <div className='flex flex-col w-full text-slate-900 dark:text-white my-4'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' value={formData.lastName} name="lastName" onChange={handleChange} className='text-slate-900 border-2 rounded p-2 my-1 text-lg w-full outline-none focus:border-slate-900' />
                </div>
                <div className='flex flex-col w-full text-slate-900 dark:text-white my-4'>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id='email' value={formData.email} name="email" onChange={handleChange} className='text-slate-900 border-2 rounded p-2 my-1 text-lg w-full outline-none focus:border-slate-900' />
                </div>
                <div className='flex flex-col w-full text-slate-900 dark:text-white my-4'>
                    <label htmlFor="email">Message</label>
                    <textarea id='message'  name="message" value={formData.message} rows={3}  onChange={handleChange} className='resize-none text-slate-900 border-2 rounded p-2 my-1 text-lg w-full outline-none focus:border-slate-900'></textarea>
                </div>

                <input type="submit" value="Submit" className='rounded bg-slate-900 text-white py-3 px-6 hover:scale-90 cursor-pointer' onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default Contact;
