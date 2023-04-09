import React, { useState } from 'react'
import Ecomerce from '../assests/ecom.png'
import Pinterest from '../assests/pint.png'
import ssa from '../assests/ssa.png'
import Tesla from '../assests/tesla.png'
import projest from '../assests/projest.png'
import resume from '../assests/resume.png'
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
        <div name='projects' className='h-[100%] flex flex-col items-center'>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px]'>Projects</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[110px] sm:w-[140px] mb-[50px]' />
                <div className='mt-[10px] grid grid-cols-1 gap-y-5 md:grid-cols-2'>
                    <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowEcommerce(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={Ecomerce} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Ecommerce Hub </p>
                    </div>
                    <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowSSA(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={ssa} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>SSA Vehicle Trackinng System</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowPinterest(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={Pinterest} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Pinterest UI Web App</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowTesla(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={Tesla} alt='Ecommerce' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Tesla UI Web App</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowProjest(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={projest} alt='Projest' />
                        </div>
                        <p className='text-[25px] font-[700] mt-[20px]'>Projest</p>
                    </div>
                    <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowResumeBuilder(true)}>
                        <div className='project_img'>
                            <img className='rounded-[10px] ' src={resume} alt='resume' />
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
                    <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowEcommerce(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={Ecomerce} alt='Ecommerce' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Ecommerce Hub</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• This is an Ecommerce project where we have implemented full-fledged Ecommerce functionalities. We developed this project using the MERN stack. Below, I describe some of the functionalities of this project.
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[20px]'>• The project includes user authentication such as login and signup. It also has two views, one for the users and another for the admin. The admin can add products and view statistics, while the users can buy products by placing orders at their given address. Additionally, the project includes payment integration with PayPal or credit card.</p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> React.js, Node.js, Express.js, mongo Db</p>

                                        <div className='grid grid-cols-1 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Ecommerce-HUB' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github</a>
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
                <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowSSA(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={ssa} alt='Ecommerce' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>SSA Vehicle Tracking System</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• This is a Vehicle Tracking System project for the Government of Gujarat. We developed this project as a full-stack solution. Below, I will describe some of the functionalities of this project.
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[20px]'>• The project is primarily used for taking attendance of students in a vehicle by the driver. Additionally, the project allows for the tracking of the driver's car location. School principals are also able to assign students to a particular driver within the project.</p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> React.js, Node.js, Redux, Express.js, Maria DB, Docker, MUI, Track Car API, Socket.IO, Linux</p>
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
                <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowPinterest(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={Pinterest} alt='Ecommerce' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Pinterest UI</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• I created a Pinterest Clone UI for the frontend of this project. To fetch photos, I am using API calls. The design of the frontend is similar to the real Pinterest app and is of great quality. 
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> React.js, Html, Css, Javascript, REST API</p>

                                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://pinterest-clone-c5aa9.web.app/s' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' /> Live</a>
                                            <a className='box_shadow my-[30px] lg:my-0 lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Pinterest-UI' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github</a>
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
                <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowTesla(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={Tesla} alt='Ecommerce' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Tesla UI</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• I developed a Tesla Responsive UI Clone using React.js. For animation, I utilized React Reveal. The design of the project is fully responsive and was created using React.js and CSS.
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> React.js, Html, Javascript, Css, React Reveal</p>

                                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://tesla-clone-b0e1e.web.app/' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            <a className='box_shadow my-[30px] lg:my-0 lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Tesla-UI' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a>
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
                <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowProjest(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={projest} alt='Projest' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Projest</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• Projest is a powerful platform that enables users to showcase their work, connect with others in their field, and advance their careers. To enhance user experience and simplify navigation, Projest offers a wide range of features. This is an open-source project that was initially developed using Vanilla.js. However, after requesting to implement the project in React.js, the project was assigned to me and another developer. While the other team member worked solely on design, I implemented all functionalities and integrated Firebase database into the project.
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> React.js, Html, Javascript, Css, Firebase, Tailwind.css</p>

                                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://projest-290c8.web.app/' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            <a className='box_shadow my-[30px] lg:my-0 lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Projest' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a>
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
                <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowResumeBuilder(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={resume} alt='resume' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Resume Generator</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• This is an open-source project designed to help you create a professional and attractive resume that represents you well to potential employers. The project automatically converts your personal details into an impressive resume template. I contributed to the design aspect of this project and solved some design issues, including the creation of a contact us page.</p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> React.js, Html, Javascript, Css</p>

                                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://resume-genrator.vercel.app/' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            <a className='box_shadow my-[30px] lg:my-0 lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Resume-Genrator' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a>
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
