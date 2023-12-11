import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const pages = [{ name: "Project", url: "/project" },
     { name: "Experience", url: "/experience" },
      { name: "Hobbies", url: "/hobbies" },
       { name: "Skills", url: "/skills" }];
    return (
        <div className='navbar'>
            <div className='navbar-title'>
                <Link to={"/"} className='nav-title'>
                    <h1>Abhishek Singh</h1>
                </Link>
            </div>
            <div className='navbar-navigation'>
                {pages.map((item, index) => (
                    <Link to={item.url} className='nav-title'>
                        <div key = {index} className='nav-link'><h4>{item.name}</h4></div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
