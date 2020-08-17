import React from 'react';
import Common from './Common';
import web from '../src/images/homeimg2.svg';


const Home = () => {
    return (
        <>
            <Common name="Grow your bussiness with " imgsrc={web} visit='/services' btnname="Get Started"/>
        </>
    )
}

export default Home;