import React from 'react';
import './BannerSubheading.css';

export default function BannerSubheading({display_message}) {
  return (
    <div className='banner-subheading'>
        <p>{display_message}</p>
    </div>
  )
}
