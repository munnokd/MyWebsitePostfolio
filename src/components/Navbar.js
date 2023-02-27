import Logo from '../assests/Logo.png'
import { Link } from "react-scroll";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
    { name: 'Home', href: 'home', current: true },
    { name: 'About', href: 'about', current: false },
    { name: 'Technology', href: 'technology', current: false },
    { name: 'Experience', href: 'experience', current: false },
    { name: 'Projects', href: 'projects', current: false },
    { name: 'Contact', href: 'contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [navbar, setNavBar] = useState(false)
    const handleClick = () => setNavBar(!navbar);

    return (
        <div className="bg-gray-800 fixed w-[100%] z-[100]">
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!navbar ? <FaBars color='white' /> : <FaTimes color='white' />}
                </div>
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-8 w-auto lg:block"
                                src={Logo}
                                alt="Kalp Prajapati"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        to={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'px-3 py-2 rounded-md text-sm font-medium'
                                        )}
                                        smooth={true} duration={400}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <a href='https://drive.google.com/file/d/1bRddbH2-LNrxGIICIfB4TxqyNgd3q_Bf/view?usp=share_link' target='_blank' rel="noreferrer" className='bg-white text-black px-3 py-2 ml-4 rounded-sm hover:cursor-pointer' >Resume</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={!navbar ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f]"}>
                <div className="space-y-1 px-2 pt-5 pb-3 flex flex-col justify-center items-center">
                    {navigation.map((item) => (
                        <Link
                            to={item.href}
                            onClick={handleClick}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-4 rounded-md text-sm font-medium'
                            )}
                            smooth={true} duration={400}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
