import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import useItems from '../../../../hooks/useItems';

const ManageItems = () => {
    const [items, setItems] = useItems();
    const [user] = useAuthState(auth);
    const matched = false;
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
        <div className='my-5'>
            <h2 className='mb-3'>Manage Items</h2>
            <Link className='mb-3 d-sm-block btn btn-success w-75  mx-auto' to='/additem'>Add New Item</Link>
            <Table responsive striped bordered hover variant="">
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
                                <td className='border text-wrap'>{item.email}</td>
                                <td className='border'>
                                    <button
                                        title='Update'
                                        onClick={() => handleUpdateItem(item._id)}
                                        className='btn btn-primary me-lg-2'>U</button>
                                    <button
                                        title='Delete'
                                        disabled={item.email === user.email ? matched : !matched}
                                        onClick={() => handleDeleteItem(item._id)}
                                        className='btn btn-danger mt-lg-0 mt-sm-2'>X</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            {items.length > 0 ? '' : <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
        </div >
    );
};

export default ManageItems;