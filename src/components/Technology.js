import React from 'react'
import { SiJavascript,SiHtml5,SiCss3,SiJava,SiMysql,SiReact,SiBootstrap,SiTailwindcss,SiGithub,SiRedux,SiNodedotjs,SiExpress,SiMongodb,SiPostman } from 'react-icons/si'
import webHosting from '../assests/web-hosting.png'

const Technology = () => {
    return (
        <div name='technology' className='h-[100%] flex flex-col items-center mb-[300px] '>
            <div className='md:w-[90%] lg:w-[80%] flex flex-col items-center'>
                <h1 className='text-5xl font-bold mb-5 mt-[120px]'>Technology</h1>
                <div className='flex flex-col'>
                    <div className=' mt-[70px] grid grid-cols-2 gap-2 gap-y-14 kd:grid-cols-3 lg:grid-cols-5'>
                        <div className='flex items-center box_shadow'>
                            <SiJavascript color='#FFD600' style={{background:'black'}} />
                            <p>JavaScript</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiHtml5 color='#E44D26' style={{background:'white'}}/>
                            <p>HTML</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiCss3 color='#0170BA' style={{background:'white'}}/>
                            <p>CSS</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiJava color='#0170BA' style={{background:'white'}}/>
                            <p>Java</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiMysql color='#F29111' style={{background:'white'}}/>
                            <p>SQL</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiReact color='#61dafb' style={{background:'white'}}/>
                            <p>React Js</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiTailwindcss color='rgb(56, 189, 248)' style={{background:'white'}}/>
                            <p>Tailwind CSS</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiBootstrap color='#712cf9' style={{background:'white'}}/>
                            <p>Bootstrap</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiGithub color='#24292f' style={{background:'white'}}/>
                            <p>Git and Github</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiRedux color='#764abc' style={{background:'white'}}/>
                            <p>Redux</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiNodedotjs color='#43853d' style={{background:'white'}}/>
                            <p>Node js</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiExpress color='#353535' style={{background:'white'}}/>
                            <p>Express JS</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiMongodb color='#FFFFFF' style={{background:'#00684A'}}/>
                            <p>Mongo DB</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <SiPostman color='#E44D26' style={{background:'white'}}/>
                            <p>Postman</p>
                        </div>
                        <div className='flex items-center box_shadow'>
                            <img src={webHosting} alt='' style={{height:'1em',width:'1em'}}/>
                            <p>Web Hosting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
