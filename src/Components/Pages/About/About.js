import React from 'react';
import mePic from '../../Images/me.jpg';

const About = () => {
    return (
        <div className='container py-5'>
            <h1 className='mb-5'>About Me</h1>
            <div className="row">
                <div className="col-md-6">
<img src={mePic} alt="" />
                </div>
                <div className="col-md-6">
        <h3>Ripon Hossain Shuvo</h3>
        <p className='p-5'>I'm a Front End Web Developer. An enthusiast of technology always enjoys coding, likes to solve programming problems. I am interested in thinking/developing web-related modules or functionality and always try to find new ideas. I have eight months of experience in Web Design and Development. I live in Dhaka, Bangladesh. I am currently studying at Chandpur Polytechnic Institute, in Computer Technology. In the tech community, I try to help people by sharing my knowledge. I love to read tech-related articles & play video games during my free time</p>
                </div>
            </div>
        </div>
    );
};

export default About;