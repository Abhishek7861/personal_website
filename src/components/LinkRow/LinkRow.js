import React from 'react';
import './LinkRow.css';

export default function LinkRow({ links }) {

    return (
        <div className='linkrow'>
            {links.map((item, index) => (
                <div className='linkitem'>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <span class="icon"><i className={item.icon} title={item.title}></i></span>
                    </a>
                </div>
            ))}
        </div>
    )
}
