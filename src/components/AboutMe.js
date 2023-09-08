import React from 'react'

const AboutMe = () => {
    return (
        <div name='about' className='h-[100%] px-6 flex flex-col items-center '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-3 divide-y mt-[80px] md:mt-[120px]'>About Me</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[120px] sm:w-[150px] mb-[50px]' />
                <div className='m-0 box_shadow'>
                    <p className='text-xl mb-5 mt-[20px] '>I am Kalp Prajapati, a passionate explorer of emerging technologies. As a quick learner and avid adventurer, I have immersed myself in the world of Fullstack development. Currently, I'm a dedicated student and software developer, boasting extensive expertise in Fullstack development.</p>
                    <p className='text-xl mb-5'>My current professional endeavor finds me as a software developer at DasInfomedia, where I am actively engaged in building innovative solutions.I have a keen interest in contributing to open-source projects, so I actively engage in this endeavor. During my leisure hours, I find solace in the pages of books, the thrill of discovery, and the cinematic experience of movies.</p>
                    <p className='text-xl mb-5'>I proudly align myself with various prominent global Open Source communities, such as EddieHub, DEVs Dungeon, and The Lively Developers Community.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
