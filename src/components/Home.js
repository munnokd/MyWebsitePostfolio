import React from 'react'
import Kalp from '../assests/kd.png'

const Home = () => {
    return (
        <div name='home' className='h-[100%] w-[100%] lg:h-screen items-center flex justify-center '>
            <div className='flex w-[100%] items-center flex-col lg:flex-row justify-between md:w-[90%] lg:w-[70%] mt-[180px] mb-[80px]'>
                <div className='h-[200px] md:w-[700px] mb-11 lg:mr-44'>
                    <h1 className='text-2xl lg:text-5xl font-bold mb-5'>Hello 👋 I'm <span className='text-[#fd7014]'>Kalp</span></h1>
                    <h2 className='text-2xl font-[600] text-[#fd7014]'>a <span className='text-black'>Software Developer | Open Source Contributor </span></h2>
                </div>
                <div className='box_shadow rounded-full'>
                    <img className='rounded-full w-[300px]' src={Kalp} alt='Kalp'  />
                </div>
            </div>
        </div>
    )
}

export default Home
