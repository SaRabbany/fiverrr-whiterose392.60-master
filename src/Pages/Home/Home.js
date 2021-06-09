import React from 'react';
import ChooseRightPackage from './ChooseRightPackage';
import ContactUs from './ContactUs';
import EarlySupporter from './EarlySupporter';
import FAQs from './FAQs';
import HeaderSection from './HeaderSection';
import "./Home.css"
import InvestorSection from './InvestorSection';
import RoadMap from './RoadMap';
import Tokenomics from './Tokenomics';
import WhyPolystarter from './WhyPolystarter';

const Home = () => {
    return (
        <>
        <HeaderSection/>
        <EarlySupporter/>
        <WhyPolystarter/>
        <ChooseRightPackage/>
        <InvestorSection/>
        <RoadMap/>
        <Tokenomics/>
        <ContactUs/>
        <FAQs/>
        </>
    );
};

export default Home;