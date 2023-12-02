import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";

import Naklogo from '/logo.png'
import "./All Styles/Navbar.css"

export default function Navbar() {

    const [isHidden, setisHidden] = useState(true);

    const toggleMenu = () => {
        setisHidden(!isHidden);
    };


    return (
        <header>
            <nav>
                <div className="bg-primary px-5 navBarDiv">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">

                            <div>
                                <a href="/" className="flex items-center py-3 px-2 text-gray-900">
                                    <img src={Naklogo} alt="Nak logo" className="naklogo max-h-12 " />
                                    <span className="font-bold text-white  hover:text-buttond">Nakshatra</span>
                                </a>
                            </div>

                        </div>

                        <div className="hidden md:flex items-center space-x-4 preNavDiv">
                            <Link className="py-3 px-2 text-white hover:bg-indigo-500 rounded-full preNavA" to="about" spy={true} smooth={true} offset={50} duration={500}>
                                About
                            </Link>
                            <Link className="py-3 px-2 text-white hover:bg-indigo-500 rounded-full preNavA" to="teams">
                                Teams
                            </Link>
                            <Link className="py-3 px-2 text-white hover:bg-indigo-500 rounded-full preNavA" to="events">
                                Events
                            </Link>
                            <Link className="py-3 px-2 text-white hover:bg-indigo-500 rounded-full preNavA" to="team" spy={true} smooth={true} offset={50} duration={500}>
                                Blog
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-1 rightSideNavSectionPre">
                            <a className="py-3 px-2 text-white hover:bg-indigo-500 rounded-full rightSideNavAPre" href="#">Login</a>
                            <Link1 className="py-3 px-2 bg-indigo-500 hover:bg-buttonColor text-white rounded-full rightSideNavAPre"
                                to="footer" spy={true} smooth={true} offset={50} duration={1000} >
                                Contact
                            </Link1>
                        </div>


                        <div className="md:hidden flex items-center">

                            <button onClick={toggleMenu} className="text-white">
                                {
                                    isHidden ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                    </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
                                        </svg>
                                }


                            </button>
                        </div>
                    </div>
                </div>

                {/* mobile menu  */}
                <div className={`${isHidden ? 'hidden' : ' '}`}>
                    <div className="flex flex-col items-center max-w-6xl">
                        <Link onClick={toggleMenu} className="block py-2 px-36 text-lg hover:text-white hover:bg-indigo-700 bg-indigo-500  w-full font-bold" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                        <Link onClick={toggleMenu} className="block py-2 px-36 text-lg hover:text-white hover:bg-indigo-700 bg-indigo-500  w-full font-bold" to="teams" spy={true} smooth={true} offset={50} duration={500}>Team</Link>
                        <Link onClick={toggleMenu} className="block py-2 px-36 text-lg hover:text-white hover:bg-indigo-700 bg-indigo-500  w-full font-bold" to="events" spy={true} smooth={true} offset={50} duration={500}>Events</Link>
                        <Link onClick={toggleMenu} className="block py-2 px-36 text-lg hover:text-white hover:bg-indigo-700 bg-indigo-500  w-full font-bold" to="about" spy={true} smooth={true} offset={50} duration={500}>Blog</Link>
                    </div>
                </div>
            </nav>

        </header>
    )
}