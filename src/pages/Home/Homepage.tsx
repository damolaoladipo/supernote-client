import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/header/header';
import HeroSection from '../../components/Sections/HeroSection';
import Section from '../../components/Sections/Section';
import SectionCopy from '../../components/Sections/SectionCopy';

const Home = () => {
    useEffect(() => {
    }, []);

    return (
        <>
            <Header/>
            <HeroSection/>
            <Section/>
            <SectionCopy />
        </>
    );
};

export default Home;