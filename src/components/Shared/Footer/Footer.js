import React from 'react';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='p-3'>
                <img src={logo} style={{ height: '50px' }} alt="" />
            </div>
            <div>
                <p className=' fw-light p-3'>Water Warehouse &copy; 2022 || All right Reserved || Developed by Abu Yusuf</p>
            </div>

        </div>
    );
};

export default Footer;