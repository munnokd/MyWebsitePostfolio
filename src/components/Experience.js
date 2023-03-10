import React from 'react'

const Experience = () => {
    return (
        <div name='experience' className='h-[100%] flex flex-col items-center mb-[100px]'>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-5xl font-bold mb-5 mt-[80px]'>Experience</h1>
                <div className='grid grid-cols-1'>
                    <div className='mb-[30px] text-[30px] font-bold'>Job Experience</div>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px]'>
                        <h1 className='text-[25px] font-bold mb-[10px]'>Software Developer</h1>
                        <div className='flex justify-between mb-[30px]'>
                            <p className='text-[17px] font-[500]'>DasInfomedia - Ahmedabad</p>
                            <p className='text-[17px] font-[500]'>Jan-2023</p>
                        </div>
                        <p className='text-[16px]'>I am Software Developer Intern in Dasinfomedia. Currently I am
                            working on live project in react.js. This project is based upon
                            government of Gujarat education department project. This project
                            made on vehicle tracking system in react.js ,MUI, Docker,
                            MariaDb, node js, express js, API.</p>
                    </div>
                    <div className='mb-[30px] text-[30px] font-bold'>Education Qualification</div>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px]'>
                        <h1 className='text-[25px] font-bold mb-[10px]'>B.Tech- Computer Science and Engineering</h1>
                            <div className='flex justify-between'>
                            <p className='text-[17px] font-[500]'>Institute of Technology, Nirma University, Ahmedabad</p>
                            <p className='text-[17px] font-[500]'>2019 - 2023</p>
                        </div>
                    </div>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px]'>
                        <h1 className='text-[25px] font-bold mb-[10px]'>12th -science Board</h1>
                        <div className='flex justify-between '>
                            <p className='text-[17px] font-[500]'>Nootan serva vidhyalay ,Visnagar</p>
                            <p className='text-[17px] font-[500]'>2017 - 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
