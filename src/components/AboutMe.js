import React from 'react'

const AboutMe = () => {
    return (
        <div name='about' className='h-[100%] px-6 flex flex-col items-center '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-3 divide-y mt-[120px]'>About Me</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[120px] sm:w-[150px] mb-[50px]' />
                <div className='m-0 box_shadow'>
                    <p className='text-xl mb-5 mt-[20px] '>My name is Kalp Prajapati. I possess a keen interest in exploring new technologies. I am quick learner and explorer. I have an experience of working on Frontend and Fullstack projects. I am Student right now. I am software developer having great frontend and fullstack development knowledge.</p>
                    <p className='text-xl mb-5'>Currently I am doing my internship as a software developer in DasInfomedia and also contributing to open sources projects. I love read books, explore new thing and watch movies. </p>
                    <p className='text-xl mb-5'>I am the part of many Open Source global communities. I joined EddieHub, DEVs Dungeon, The Lively Developers Community.   </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
