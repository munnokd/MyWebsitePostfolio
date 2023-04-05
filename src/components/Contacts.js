import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar'

const Contacts = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const successStyle = {
        position: 'top-right',
        style: {
            background: '#00cc00',
            padding: '10px',
            margin: '0px 20px',
            marginTop: '70px',
            color: 'white',
            fontSize: '20px',
            zIndex: '999',
            textAlign: 'center',
        },
        closeStyle: {
            color: 'white',
            fontSize: '16px',
        },
    }
    const errorStyle = {
        position: 'top-right',
        style: {
            background: '#ff0000',
            padding: '10px',
            margin: '0px 20px',
            marginTop: '70px',
            color: 'white',
            fontSize: '20px',
            zIndex: '999',
            textAlign: 'center',
        },
        closeStyle: {
            color: 'white',
            fontSize: '16px',
        },
    }

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [successSnackbar] = useSnackbar(successStyle)
    const [errorSnackbar] = useSnackbar(errorStyle)

    const sendEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_6eu95ah', 'template_tmvzzhc', form.current, 'ILRKR2_pDVIHtm7U4')
            .then((result) => {
                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
                successSnackbar('Email sended successfully.')
            }, (error) => {
                console.log(error.text);
                errorSnackbar('Can\'t be able to sent Email! \nPlease try again.')
            });
    }

    return (
        <div name='contact' className='h-[100%] flex flex-col items-center  mx-[20px]'>
            <div className='w-[100%] flex flex-col items-center'>

                <h1 className='text-5xl font-bold mb-3 mt-[120px]'>Contact With Me</h1>
                <hr style={{ borderTop: '3px solid #fd7014', width: '300px' ,marginBottom:'50px'}} />
                <form className="flex flex-col w-[100%] md:w-[70%] lg:w-[50%] justify-center items-center box_shadow px-10 py-10" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className=" block w-[100%] text-sm text-black bg-transparent border-2 border-b-2 border-[#fd7014] appearance-none placeholder-gray-800 focus:outline-none focus:ring-0 focus:border-[#fd7014] peer px-3 py-3 rounded-sm my-4" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name" required />
                    <input type="text" name="from_email" className="block w-[100%] text-sm text-black bg-transparent border-2 border-b-2 border-[#fd7014] appearance-none placeholder-gray-800 focus:outline-none focus:ring-0 focus:border-[#fd7014] peer px-3 py-3 rounded-sm my-4" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email" required />
                    <input type="text" name="subject" className="block w-[100%] text-sm text-black bg-transparent border-2 border-b-2 border-[#fd7014] appearance-none placeholder-gray-800 focus:outline-none focus:ring-0 focus:border-[#fd7014] peer px-3 py-3 rounded-sm my-4" onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Enter Subject" required />
                    <textarea name="message" placeholder='Enter message ' className="block w-[100%] text-sm text-black bg-transparent border-2 border-b-2 border-[#fd7014] appearance-none placeholder-gray-800 focus:outline-none focus:ring-0 focus:border-[#fd7014] peer px-3 py-3 rounded-sm my-4" onChange={(e) => setMessage(e.target.value)} value={message} required />
                    <input type="submit" value="Send" className='cursor-pointer box_shadow w-[100%] font-bold text-[#fd7014] my-5' />
                </form>
            </div>
        </div>
    )
}
export default Contacts
