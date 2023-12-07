import React from 'react'
import Banner from '../../components/Banner/Banner'
import BannerSubheading from '../../components/BannerSubHeading/BannerSubheading';

export default function home() {
    const display_message = "Hey, I'm Abhishek Singh";
  return (
    <div>
        <Banner display_message={display_message}></Banner>
        <BannerSubheading></BannerSubheading>
        {/* todo add link bar */}
    </div>
  )
}
