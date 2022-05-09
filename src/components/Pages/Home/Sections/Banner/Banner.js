import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <h3 className='text-white fw-bolder'>Welcome to</h3>
            <h1 className='text-danger fw-bolder'>Water Warehouse</h1>
            <Link to='/manageitems' className='btn btn-danger fw-bolder mt-4'>View All Product</Link>
        </div>
    );
};

export default Banner;