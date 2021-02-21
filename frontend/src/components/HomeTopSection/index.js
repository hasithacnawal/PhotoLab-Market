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
                <TopContentH1>PhotoLab Market</TopContentH1>
                <TopContentP>Tranding:  Love, Happy, Family, Wallpapers</TopContentP>
            </HomeTopContent>
        </HomeTopContainer>
    );
};

export default HomeTopSection;
