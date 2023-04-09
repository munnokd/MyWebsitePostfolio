import React from 'react'

const AboutMe = () => {
    return (
        <div name='about' className='h-[100%] px-6 flex flex-col items-center '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-3 divide-y mt-[80px] md:mt-[120px]'>About Me</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[120px] sm:w-[150px] mb-[50px]' />
                <div className='m-0 box_shadow'>
                    <p className='text-xl mb-5 mt-[20px] '>My name is Kalp Prajapati, and I have a keen interest in exploring new technologies. I am a quick learner and explorer with experience working on both Frontend and Fullstack projects. Currently, I am a student and a software developer with extensive knowledge in frontend and fullstack development.</p>
                    <p className='text-xl mb-5'>I am currently interning as a software developer at DasInfomedia, and I am also contributing to open source projects. In my free time, I enjoy reading books, exploring new things, and watching movies.</p>
                    <p className='text-xl mb-5'>I am part of several global Open Source communities, including EddieHub, DEVs Dungeon, and The Lively Developers Community.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
