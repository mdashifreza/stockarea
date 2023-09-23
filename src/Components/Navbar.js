import React from 'react';
import LogoImage  from '../logo.png';
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <nav className="bg-gray-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to = "/"><img src={LogoImage} alt="Logo" className="h-12 w-26" /></Link>
                {/* <ul className="hidden md:flex space-x-4">
                    <li><a href="#" className="text-white">Home</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Services</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul> */}
                {/* <button className="md:hidden text-white">
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button> */}
            </div>
            {/* Responsive mobile menu */}
            {/* <ul className="md:hidden">
                <li><a href="#" className="block py-2 px-4 text-white">Home</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">About</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Services</a></li>
                <li><a href="#" className="block py-2 px-4 text-white">Contact</a></li>
            </ul> */}
        </nav>
    );
}

export default Navbar;
