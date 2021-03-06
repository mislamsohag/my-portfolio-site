import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const manueItems = <>
        <li><Link to={'Home'}>Home</Link></li>
        <li><Link to={'projects'}>Projects</Link></li>
        <li><Link to={'resume'}>Resume</Link></li>
        <li><Link to={'blogs'}>Blogs</Link></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start mx-20">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* Manu Items */}
                            {manueItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">M islam</Link>
                </div>
                <div className="navbar-end hidden md:flex mx-20">
                    <ul className="menu menu-horizontal p-0">
                        {/* Manu Items */}
                        {manueItems}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;