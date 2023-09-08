import React from 'react'

const Experience = () => {
    return (
        <div name='experience' className='h-[100%] flex flex-col items-center '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className=' text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px]'>Experience</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[130px] sm:w-[170px] mb-[50px]' />
                <div className='mt-[10px] grid grid-cols-1 px-6'>
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Job Experience :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px]  sm:text-[25px] font-bold mb-[10px]'>Software Developer</h1>
                        <div className='flex justify-between mb-[30px]'>
                            <p className='text-[15px] sm:text-[18px] font-[500]'>DasInfomedia - Ahmedabad</p>
                            <p className='text-[15px] sm:text-[18px] font-[500]'>August,2023 - Present,2023</p>
                        </div>
                        <p className='text-[14px] sm:text-[17px]'>Currently, I am a Software Developer at DasInfomedia, working on a live project using React.js. This project (of Gujarat Government's Education Department) involves creating a Vehicle Tracking System using React.js, MUI, Docker, MariaDB, Node.js, Express.js, and API</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px]  sm:text-[25px] font-bold mb-[10px]'>Software Developer Intern</h1>
                        <div className='flex justify-between mb-[30px]'>
                            <p className='text-[15px] sm:text-[18px] font-[500]'>DasInfomedia - Ahmedabad</p>
                            <p className='text-[15px] sm:text-[18px] font-[500]'>Jan,2023 - June,2023</p>
                        </div>
                    </div>
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Volunteer Experience :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>Open Source Contributor </h1>
                        <p className='text-[14px] sm:text-[17px]'>Alongside my internship, I am actively contributing to Open Source projects, both in terms of documentation and code-based solutions. You can see my contributions by visiting my GitHub profile.</p>
                    </div>
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Education Qualification :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[30px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>B.Tech- Computer Science and Engineering</h1>
                            <div className='flex justify-between'>
                            <p className='text-[15px] sm:text-[18px]'>Institute of Technology, Nirma University, Ahmedabad</p>
                            <p className='text-[15px] sm:text-[18px]'>2019 - 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
