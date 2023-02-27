import React from 'react'
import Kalp from '../assests/kd1.png'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Home = () => {
    return (
        <div name='home' className='h-[100%] lg:h-screen items-center flex justify-center '>
            <div className='flex items-center flex-col lg:flex-row justify-between md:w-[90%] lg:w-[70%] mt-[180px] mb-[80px]'>
                <div className='h-[200px] w-[700px] mb-11 lg:mr-44'>
                    <h1 className='text-2xl lg:text-5xl font-bold mb-5'>Hello 👋 I'm <span className='text-[#fd7014]'>Kalp</span></h1>
                    <span className='text-2xl font-[600] text-[#fd7014]'>a </span>  <AutoTyping
                        active // <boolean>
                        textRef=' Software Developer | Open Source Contributor | Engineer'
                        writeSpeed={1000}
                        deleteSpeed={1000} 
                        delayToWrite={1000} 
                        delayToDelete={5000} 
                        className='text-lg lg:text-2xl font-[600] '
                    />
                    <BlinkCursor
                        active
                        blinkSpeed={400}
                        className='text-lg font-[600] lg:text-2xl'
                    />
                </div>
                <div className='relative box_shadow w-[300px] h-[350px] mt-[100px]'>
                    <img className='absolute w-[300px] h-[450px] -top-[100px] left-[0px]' src={Kalp} alt='Kalp'  />
                </div>
            </div>
        </div>
    )
}

export default Home
