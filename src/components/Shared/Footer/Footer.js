import React from 'react';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='pt-3'>
                <img src={logo} alt="" />
            </div>
            <div>
                <p className=' fw-light p-2'>Water Warehouse &copy; 2022 || All right Reserved || Developed by Abu Yusuf</p>
            </div>

        </div>
    );
};

export default Footer;