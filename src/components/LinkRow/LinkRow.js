import React from 'react';
import './LinkRow.css';

export default function LinkRow({ links }) {

    return (
        <div className='linkrow'>
            {links.map((item, index) => (
                <div className='linkitem'>
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                        <span key={index} class="icon"><i key={index} className={item.icon} title={item.title}></i></span>
                    </a>
                </div>
            ))}
        </div>
    )
}
