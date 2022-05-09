import React from 'react';
import { toast } from 'react-toastify';
import './Dealer.css'



const Dealer = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        toast("Thanks!!! We will contact you shortly")
    }

    return (
        <div>
            <h2 className='mt-5 mb-3 bg-black text-white p-3 text-uppercase'>Became a Dealer</h2>
            <div className='row dealer-sec'>
                <div className='col-sm-12 col-md-6 my-5 d-flex justify-content-center align-items-center'>
                    <h1 className='fw-bolder'>Join Our Country Wide <br />  <span className='text-danger'>Dealer Community</span> </h1>
                </div>
                <div className='col-sm-12 col-md-6 my-5'>
                    <p style={{ fontSize: '22px' }} className='text-danger fw-bolder'>Fill out this form</p>
                    <form className='w-75 mx-auto' onSubmit={handleSubmit}>
                        <input placeholder='Your Name' className='form-control mb-2' type="text" />
                        <input placeholder=' Your Email' className='form-control mb-2' type="email" name="" id="" />
                        <input placeholder=' Your Phone' className='form-control mb-2' type="text" name="" id="" />
                        <input placeholder=' Your Address' className='form-control mb-2' type="text" />
                        <input className='btn btn-danger w-100' type="submit" value="Join Us" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Dealer; <h2>Became a Dealer</h2>