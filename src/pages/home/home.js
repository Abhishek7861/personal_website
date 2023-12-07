import React from 'react'
import Banner from '../../components/Banner/Banner'
import BannerSubheading from '../../components/BannerSubHeading/BannerSubheading';
import Line from '../../components/Line/Line';

export default function home() {
    const display_heading = "Hey, I'm Abhishek Singh";
    const display_subheading = "I am a skilled and passionate web developer. Welcome to my humble page.";
  return (
    <div>
        <Banner display_message={display_heading}></Banner>
        <BannerSubheading display_message={display_subheading}></BannerSubheading>
        <Line></Line>
        {/* todo add link bar */}
    </div>
  )
}
