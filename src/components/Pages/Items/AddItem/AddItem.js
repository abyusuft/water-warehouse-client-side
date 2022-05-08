import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { email } = user;

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        const url = `https://infinite-chamber-05389.herokuapp.com/additem`;
        // const url = `http://localhost:5000/additem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast('Item Added Successfully');
            })

        // e.target.reset();
    };

    return (
        <div>
            <h2 className='mt-5 mb-3'>Add Items to Inventory</h2>
            <Link className='mb-3 d-block btn btn-success w-25 mx-auto' to='/manageitems'>View/Manage Items</Link>
            <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 mb-2 p-2' placeholder='Item Name' type="text"  {...register("itemName", { required: true })} /> <br />
                <input className='w-100 mb-2 p-2' placeholder=' Item Description' type="text"  {...register("description", { required: true })} /> <br />
                <input className='w-100 mb-2 p-2' placeholder='Image Link' type="text"  {...register("img", { required: true })} /> <br />
                <input className='w-100 mb-2 p-2' placeholder='Supplier Name' type="text"  {...register("supplier", { required: true })} /> <br />
                <input className='w-100 mb-2 p-2' placeholder='Item Price' type="number"  {...register("price", { required: true })} /> <br />
                <input className='w-100 mb-2 p-2' placeholder='Quantity' type="number"  {...register("qty", { required: true })} /> <br />
                <input className='w-100 mb-2 p-2' value={email} type="email"  {...register("email", { required: true })} /> <br />
                <input className='w-100 mb-2 p-2 btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;