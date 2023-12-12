import React from 'react';
import './ButtonBar.css';
import { Link } from 'react-router-dom';

export default function ButtonBar() {
    const buttons = [{name:"Project", url:"/project"}, {name:"Experience",url:"/experience"}, {name:"Skills",url:"/skills"}];
    return (
        <div className='button-row'>
            {buttons.map((item, index) => (
                <div className='button-item'>
                    <Link to={item.url}>
                        <button key={index} className='home-button'>{item.name}</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}
