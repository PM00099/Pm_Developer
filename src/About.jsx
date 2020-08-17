import React from 'react';
import Common from './Common';
import web from '../src/images/Startup_SVG.svg';



const About = () => {
    return(
        <>
        <Common name="Welcome to About" imgsrc={web} visit='/contact' btnname="Contact Now"/>
        </>
    )
}

export default About;