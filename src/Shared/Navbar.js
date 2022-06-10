import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const manueItems = <>
        <li><Link to={'Home'}>Home</Link></li>
        <li tabIndex="0">
            <Link to={'projects'} className="justify-between">
                My Projects
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </Link>
            <ul className="p-2">
                <li><Link to={'projectOne'}>Project-1</Link></li>
                <li><Link to={'projectTwo'}>Project-2</Link></li>
            </ul>
        </li>
        <li><Link to={'resume'}>Download Resume</Link></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start mx-20">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* Manu Items */}
                            {manueItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">My Portfolio</Link>
                </div>
                <div className="navbar-end hidden lg:flex mx-20">
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