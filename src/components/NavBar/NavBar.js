import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar-title'>
                <Link to={"/"}>
                    <h1 className='title'>Abhishek Singh</h1>
                </Link>
            </div>
            <div className='navbar-navigation'>
                <Link to={"/project"}>
                    <div className='nav-link'><h4 className='title'>Projects</h4></div>
                </Link>
                <Link to={"/project"}>
                <div className='nav-link'><h4 className='title'>Experience</h4></div>
                </Link>
                <Link to={"/project"}>
                <div className='nav-link'><h4 className='title'>Hobbies</h4></div>
                </Link>
                <Link to={"/project"}>
                <div className='nav-link'><h4 className='title'>Skills</h4></div>
                </Link>
            </div>
        </div>
    )
}
