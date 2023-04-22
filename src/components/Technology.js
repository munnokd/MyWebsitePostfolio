import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiJava, SiMysql, SiReact, SiBootstrap, SiTailwindcss, SiGithub, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiSequelize, SiDocker, SiTypescript } from 'react-icons/si'
import webHosting from '../assests/web-hosting.png'
import rest from '../assests/rest.png'
import mui from '../assests/mui.png'
import fire from '../assests/firebase.png'
import Zoom from 'react-reveal/Zoom';

const Technology = () => {
    return (
        <div name='technology' className='h-[100%] flex flex-col items-center mb-[35px] '>
            <div className='md:w-[90%] lg:w-[80%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-4 mt-[80px] md:mt-[120px]'>Technology</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[140px] sm:w-[180px] mb-[50px]' />
                <div className='flex flex-col'>
                    <div className=' mt-[10px] grid grid-cols-2 gap-2 gap-y-14 sm:grid-cols-3 lg:grid-cols-5'>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiJavascript color='#FFD600' style={{ background: 'black' }} />
                                <p>JavaScript</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiHtml5 color='#E44D26' style={{ background: 'white' }} />
                                <p>HTML</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiCss3 color='#0170BA' style={{ background: 'white' }} />
                                <p>CSS</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiJava color='#0170BA' style={{ background: 'white' }} />
                                <p>Java</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiTypescript color='#3178c6' style={{ background: 'white' }} />
                                <p>Typescript</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiMysql color='#F29111' style={{ background: 'white' }} />
                                <p>SQL</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiReact color='#61dafb' style={{ background: 'white' }} />
                                <p>React Js</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiTailwindcss color='rgb(56, 189, 248)' style={{ background: 'white' }} />
                                <p>Tailwind CSS</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiBootstrap color='#712cf9' style={{ background: 'white' }} />
                                <p>Bootstrap</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiGithub color='#24292f' style={{ background: 'white' }} />
                                <p>Git and Github</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiRedux color='#764abc' style={{ background: 'white' }} />
                                <p>Redux</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiNodedotjs color='#43853d' style={{ background: 'white' }} />
                                <p>Node js</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiExpress color='#353535' style={{ background: 'white' }} />
                                <p>Express JS</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiMongodb color='#FFFFFF' style={{ background: '#00684A' }} />
                                <p>Mongo DB</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiPostman color='#E44D26' style={{ background: 'white' }} />
                                <p>Postman</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiSequelize color='#3b76c3' style={{ background: 'white' }} />
                                <p>Sequelize</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiDocker color='#3b76c3' style={{ background: 'white' }} />
                                <p>Docker</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={fire} alt='' style={{ height: '1em', width: '1em' }} />
                                <p>Firebase</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={mui} alt='' style={{ height: '1em', width: '1em' }} />
                                <p>MUI</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={rest} alt='' style={{ height: '1em', width: '1em' }} />
                                <p>Rest API</p>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
