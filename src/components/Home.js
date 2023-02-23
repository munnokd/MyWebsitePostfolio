import React from 'react'
import Kalp from '../assests/kalp.jpg'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Home = () => {
    return (
        <div name='home' className='h-screen items-center flex justify-center'>
            <div className='flex items-center flex-col md:flex-row justify-between md:w-[90%] lg:w-[70%]'>
                <div className=' mb-11 md:mr-44'>
                    <h1 className='text-5xl font-bold mb-5'>Hi I'm Kalp Prajapati</h1>
                    <AutoTyping
                        active // <boolean>
                        textRef='Software Developer | Open Source Contributor | Engineer'
                        writeSpeed={200}
                        deleteSpeed={100} 
                        delayToWrite={1000} 
                        delayToDelete={3500} 
                        className='text-xl'
                    />
                    <BlinkCursor
                        active
                        blinkSpeed={500}
                        className='text-2xl'
                    />
                </div>
                <div>
                    <img src={Kalp} alt='Kalp' width={300} height={300} />
                </div>
            </div>
        </div>
    )
}

export default Home
