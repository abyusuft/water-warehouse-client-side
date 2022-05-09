import React from 'react';
import './About.css'
import img from '../../../images/banner.jpg'

const About = () => {
    return (
        <div >
            <h2 className='m-5 fw-bolder text-uppercase'>About Us</h2>
            <h3 className='mb-2'>We are Countris leading Water supply company</h3>
            <img className='mb-5' src={img} style={{ maxHeight: '400px', height: "auto", width: '90%', maxWidth: '600px' }} alt="" />
        </div>
    );
};


export default About;