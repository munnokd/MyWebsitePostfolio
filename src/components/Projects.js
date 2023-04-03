import React, { useState } from 'react'
import Ecomerce from '../assests/ecom.png'
import Pinterest from '../assests/pint.png'
import ssa from '../assests/ssa.png'
import Tesla from '../assests/tesla.png'
import { CgClose } from 'react-icons/cg'
import { SiGithub } from 'react-icons/si'
import { RiLink } from 'react-icons/ri'
import { Transition } from '@headlessui/react'

const Projects = () => {
    const [showEcoomerce, setShowEcommerce] = useState(false);
    const [showSSA, setShowSSA] = useState(false);
    const [showPinterest, setShowPinterest] = useState(false);
    const [showTesla, setShowTesla] = useState(false);
    const [showProjest, setShowProjest] = useState(false);
    const [showResumeBuilder, setShowResumeBuilder] = useState(false);

    return (
        <div name='projects' className='h-[100%] flex flex-col items-center mb-[100px]'>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-5xl font-bold mb-[55px] mt-[80px]'>Projects</h1>
                <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2'>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowEcommerce(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={Ecomerce} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Ecommerce Hub </p>
                    </div>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowSSA(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={ssa} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>SSA Vehicle Trackinng System</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowPinterest(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={Pinterest} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Pinterest UI Web App</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowTesla(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={Tesla} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Tesla UI Web App</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowTesla(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={Tesla} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Projest</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowTesla(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={Tesla} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Resume Generator</p>
                    </div>
                </div>
            </div>
            <Transition
                show={showEcoomerce}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] ">
                        <div className="flex justify-center p-4 text-center items-center sm:p-0 h-[100%] " >
                            <div className="p-[40px] h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowEcommerce(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[450px] w-[550px] ' src={Ecomerce} alt='Ecommerce' />
                                    <div className='ml-8 '>
                                        <h1 className='text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Ecommerce Hub</h1>
                                        <p className='text-[18px] font-[400] mb-[10px]'>• This is Ecommerce project wehre we implemented full fledge ecommerce functionalities.We made this Project in MERN Stack.Below I described some functionalites of this  project.
                                        </p>
                                        <p className='text-[18px] font-[400] mb-[20px]'>• User authentication like Login and Signup.And into this project it has two views for the users and for the admin. Admin can add the products and see the statistics. User can buy the product with place the order at the given address. Also has payment integration with PayPal or credit card.</p>
                                        <p className='text-[18px] font-[400]'><span className='text-[18px] font-[600]'>Tech :</span> React.js, Node.js, Express.js, mongo Db</p>

                                        <div className='grid grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Ecommerce-HUB' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
                show={showSSA}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] ">
                        <div className="flex justify-center p-4 text-center items-center sm:p-0 h-[100%] " >
                            <div className="p-[40px] h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowSSA(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[450px] w-[550px] ' src={ssa} alt='Ecommerce' />
                                    <div className='ml-8 '>
                                        <h1 className='text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>SSA Vehicle Trackinng System</h1>
                                        <p className='text-[18px] font-[400] mb-[10px]'>• This is Vehicle Tracking system project of goverment of gujarat.We made this Project in full stack.Below I described some functionalites of this  project.
                                        </p>
                                        <p className='text-[18px] font-[400] mb-[20px]'>• This project is basically using for take attendance of students in vehicle by driver. In this project we also able to track the driver's car location.In this project school principle is able to assign students to the perticular driver.</p>
                                        <p className='text-[18px] font-[400]'><span className='text-[18px] font-[600]'>Tech :</span> React.js, Node.js, Express.js, Maria DB, Docker, MUI, Minio, Track Car API, Socket.IO</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
                show={showPinterest}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] ">
                        <div className="flex justify-center p-4 text-center items-center sm:p-0 h-[100%] " >
                            <div className="p-[40px] h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowPinterest(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[450px] w-[550px] ' src={Pinterest} alt='Ecommerce' />
                                    <div className='ml-8 '>
                                        <h1 className='text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Pinterst UI Web APP</h1>
                                        <p className='text-[18px] font-[400] mb-[10px]'>• I made pinterest Clone UI in frontend. n this project I am using API calling for photos fetching. I made great design for frontend ites same like real pinterest App. 
                                        </p>
                                        <p className='text-[18px] font-[400]'><span className='text-[18px] font-[600]'>Tech :</span> React.js, Html, Css, Javascript, REST API</p>

                                        <div className='grid grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://pinterest-clone-c5aa9.web.app/s' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' /> Live</a>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Pinterest-UI' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
                show={showTesla}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] ">
                        <div className="flex justify-center p-4 text-center items-center sm:p-0 h-[100%] " >
                            <div className="p-[40px] h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowTesla(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[450px] w-[550px] ' src={Tesla} alt='Ecommerce' />
                                    <div className='ml-8 '>
                                        <h1 className='text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Ecommerce Hub</h1>
                                        <p className='text-[18px] font-[400] mb-[10px]'>• Tesla Responsive Ui Clone in React.js. In this project I am using react reveal for animation. I made fully responsive design using react js and css. 
                                        </p>
                                        <p className='text-[18px] font-[400]'><span className='text-[18px] font-[600]'>Tech :</span> React.js, Html, Javascript, Css, React Reveal</p>

                                        <div className='grid grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://tesla-clone-b0e1e.web.app/' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Tesla-UI' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
                show={showProjest}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] ">
                        <div className="flex justify-center p-4 text-center items-center sm:p-0 h-[100%] " >
                            <div className="p-[40px] h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowTesla(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[450px] w-[550px] ' src={Tesla} alt='Ecommerce' />
                                    <div className='ml-8 '>
                                        <h1 className='text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Ecommerce Hub</h1>
                                        <p className='text-[18px] font-[400] mb-[10px]'>• Tesla Responsive Ui Clone in React.js. In this project I am using react reveal for animation. I made fully responsive design using react js and css. 
                                        </p>
                                        <p className='text-[18px] font-[400]'><span className='text-[18px] font-[600]'>Tech :</span> React.js, Html, Javascript, Css, React Reveal</p>

                                        <div className='grid grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://tesla-clone-b0e1e.web.app/' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Tesla-UI' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
                show={showResumeBuilder}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] ">
                        <div className="flex justify-center p-4 text-center items-center sm:p-0 h-[100%] " >
                            <div className="p-[40px] h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowTesla(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[450px] w-[550px] ' src={Tesla} alt='Ecommerce' />
                                    <div className='ml-8 '>
                                        <h1 className='text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Ecommerce Hub</h1>
                                        <p className='text-[18px] font-[400] mb-[10px]'>• Tesla Responsive Ui Clone in React.js. In this project I am using react reveal for animation. I made fully responsive design using react js and css. 
                                        </p>
                                        <p className='text-[18px] font-[400]'><span className='text-[18px] font-[600]'>Tech :</span> React.js, Html, Javascript, Css, React Reveal</p>

                                        <div className='grid grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://tesla-clone-b0e1e.web.app/' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            <a className='box_shadow w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Tesla-UI' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Projects
