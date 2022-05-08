import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const userEmail = user?.email;
    useEffect(() => {
        const url = `https://infinite-chamber-05389.herokuapp.com/itemsbyemail?email=${userEmail}`
        // const url = `http://localhost:5000/itemsbyemail?email=${userEmail}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [userEmail])
    // console.log(user.email);
    const navigate = useNavigate();




    const handleDeleteItem = id => {
        const proceed = window.confirm('Are Your Sure???');
        if (proceed) {
            const url = `https://infinite-chamber-05389.herokuapp.com/deleteitem/${id}`
            // const url = `http://localhost:5000/deleteitem/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast('Item Deleted', data)
                    const remaining = items.filter(service => service._id !== id);
                    setItems(remaining);
                })
        }
    }
    const handleUpdateItem = id => {
        navigate(`/manageitem/${id}`)
    }
    return (
        <div style={{ minHeight: "65vh" }}>
            <div className='m-5'>
                <h2 className='mb-3'>My Items</h2>
                <Link className='mb-3 d-block btn btn-success w-25 mx-auto' to='/additem'>Add New Item</Link>
                <table className='w-100 mx-auto table table-hover'>
                    <thead style={{ backgroundColor: "black" }}>
                        <tr className='border'>
                            <th className='border text-white'>Photo</th>
                            <th className='border text-white'>Item Name</th>
                            <th className='border text-white'>Description</th>
                            <th className='border text-white'>Supplier</th>
                            <th className='border text-white'>Price</th>
                            <th className='border text-white'>Stock</th>
                            <th className='border text-white'>added By</th>
                            <th className='border text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item =>
                                <tr className='border' key={item._id}>
                                    <td className='border p-2'>
                                        <img src={item.img} width={50} height={40} alt="" />
                                    </td>
                                    <td className='border'>{item.itemName}</td>
                                    <td className='border'>{item.description}</td>
                                    <td className='border'>{item.supplier}</td>
                                    <td className='border'>{item.price} &#2547;</td>
                                    <td className='border'>{item.qty}</td>
                                    <td className='border'>{item.email}</td>
                                    <td className='border'>
                                        <button
                                            title='Update'
                                            onClick={() => handleUpdateItem(item._id)}
                                            className='btn btn-primary me-2'>U</button>
                                        <button
                                            title='Delete'

                                            onClick={() => handleDeleteItem(item._id)}
                                            className='btn btn-danger'>X</button></td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
                {
                    !items.length ? <p style={{ fontSize: '20px' }} className='text-danger mt-5 border-0 fw-bold'>You havent added any items Yet <Link className='mb-3 btn btn-success mx-auto' to='/additem'>Add New Item</Link></p> : ''
                }
            </div >
        </div>
    );
};

export default MyItems; 