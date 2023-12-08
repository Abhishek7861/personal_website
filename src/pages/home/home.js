import React from 'react'
import Banner from '../../components/Banner/Banner'
import BannerSubheading from '../../components/BannerSubHeading/BannerSubheading';
import Line from '../../components/Line/Line';
import LinkRow from '../../components/LinkRow/LinkRow';
import Quote from '../../components/Quote/Quote';
import ButtonBar from '../../components/ButtonBar/ButtonBar';

export default function home() {
  const display_heading = "Hey, I'm Abhishek Singh";
  const display_subheading = "I am a passionate and skilled web developer. Welcome to my humble page.";
  const links = [{ href: "https://www.linkedin.com/in/abhishek-singh-10b5951a2/", icon: "fab fa-linkedin", title : "linkedIn" },
  { href: "mailto:abhishek82786@gmail.com", icon: "fas fa-envelope",title : "mail" },
  { href: "https://leetcode.com/Abhi7861/", icon: "fas fa-code", title : "leetcode" },
  { href: "https://github.com/Abhishek7861", icon: "fab fa-github", title : "github" },
  { href: "https://www.facebook.com/abhishek.fls/", icon: "fab fa-facebook", title : "facebook" }];
  return (
    <div>
      <Banner display_message={display_heading}></Banner>
      <BannerSubheading display_message={display_subheading}></BannerSubheading>
      <Line></Line>
      <LinkRow links={links}></LinkRow>
      <Line></Line>
      <Quote></Quote>
      <ButtonBar></ButtonBar>
    </div>
  )
}
