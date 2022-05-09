import React from 'react';
import pran from '../../../../../images/pran.png'
import aqua from '../../../../../images/aquafina.jpg'
import mum from '../../../../../images/mum.jpeg'
import fresh from '../../../../../images/Fresh.webp'

const Partners = () => {
    return (
        <div>
            <h2 className='mt-5 mb-3 bg-black text-white p-3 text-uppercase'>Our Proud Partners</h2>
            <div className='d-sm-flex align-items-center justify-content-around my-5'>
                <img width={100} src={pran} alt="" />
                <img width={100} src={aqua} alt="" />
                <img width={100} src={mum} alt="" />
                <img width={100} src={fresh} alt="" />
            </div>
        </div>
    );
};

export default Partners;