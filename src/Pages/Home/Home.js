import React from 'react';
import ChooseRightPackage from './ChooseRightPackage';
import EarlySupporter from './EarlySupporter';
import HeaderSection from './HeaderSection';
import "./Home.css"
import RoadMap from './RoadMap';
import WhyPolystarter from './WhyPolystarter';

const Home = () => {
    return (
        <>
        <HeaderSection/>
        <EarlySupporter/>
        <WhyPolystarter/>
        <ChooseRightPackage/>
        <RoadMap/>
            
        </>
    );
};

export default Home;