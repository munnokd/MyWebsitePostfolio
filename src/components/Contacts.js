import emailjs from 'emailjs-com';
import React from 'react'

const Contacts = () => {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_6eu95ah', 'template_tmvzzhc', e.target, 'ILRKR2_pDVIHtm7U4')
            .then((result) => {
                console.log(e.target)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div name='contact' className='h-[100%] flex flex-col items-center '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-5xl font-bold mb-[55px] mt-[80px]'>Contact With Me</h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="from_email" />
                    <label>Subject</label>
                    <input type="text" name="subject" />
                    <label>Message</label>
                    <textarea name="html_message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

// serviceId-service_6eu95ah
//  template Id- template_tmvzzhc
// user Id - ILRKR2_pDVIHtm7U4
export default Contacts
