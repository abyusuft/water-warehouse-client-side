import React from 'react';
import { toast } from 'react-toastify';
import useItems from '../../../../hooks/useItems';

const ManageItems = () => {
    const [items, setItems] = useItems();



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
    return (
        <div className='m-5'>
            <h2 className='mb-3'>Manage Items</h2>
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
                                <td className='border'><button onClick={() => handleDeleteItem(item._id)} className='btn btn-danger'>X</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;