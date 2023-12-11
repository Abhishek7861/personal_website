import React from 'react';
import './ButtonBar.css';
import { Link } from 'react-router-dom';

export default function ButtonBar() {
    const buttons = ["Project", "Experience", "Hobbies", "Skills"];
    return (
        <div className='button-row'>
            {buttons.map((item, index) => (
                <div className='button-item'>
                    <Link to={"/project"}>
                        <button key={index} className='home-button'>{item}</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}
