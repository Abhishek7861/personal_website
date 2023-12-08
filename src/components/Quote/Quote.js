import React from 'react';
import './Quote.css';

export default function Quote() {
    const quote = "If you are wrong you are just off by a bit";
    const credit = "- Boolean";
  return (
    <div className='quote-box'>
            <p className='quote'>{quote}</p> 
            <p className='credit'>{credit}</p> 
    </div>
  )
}
