import React from 'react';
import './Banner.css';

export default function Banner({display_message}) {
  return (
    <div className='banner'>
      <h1>{display_message}</h1>
    </div>
  )
}
