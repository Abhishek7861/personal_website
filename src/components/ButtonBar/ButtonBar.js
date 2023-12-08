import React from 'react';
import './ButtonBar.css';

export default function ButtonBar() {
    const buttons = ["Project","Experience","Hobbies","Skills"];
    return (
        <div className='button-row'>
            {buttons.map((item, index) => (
                <div className='button-item'>
                    <button className='home-button'>{item}</button>
                </div>
            ))}
        </div>
    )
}
