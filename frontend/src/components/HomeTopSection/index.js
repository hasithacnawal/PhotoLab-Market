import React from 'react';
import video from '../../videos/bgVideo.mp4';


import { 
    HomeTopContainer, 
    HomeTopBg, 
    VideoBg,
    HomeTopContent,
    TopContentH1, 
    TopContentP } from './HomeTopSectionElements';

const HomeTopSection = () => {
    return (
        <HomeTopContainer>
            <HomeTopBg>
                <VideoBg autoPlay loop muted src = {video} type = 'video/mp4'/>
            </HomeTopBg>
            <HomeTopContent>
                <TopContentH1>Want to meet your  <span style={{color: '#a6306f'}}>dream palace ?</span> </TopContentH1>
                <TopContentP>Let us work it out together...</TopContentP>
            </HomeTopContent>
        </HomeTopContainer>
    );
};

export default HomeTopSection;
