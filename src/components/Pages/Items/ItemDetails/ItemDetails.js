import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { _id, description, email, img, itemName, price, qty, supplier } = item;
    const [user] = useAuthState(auth);

    // Get Item Details API
    useEffect(() => {
        const url = `https://infinite-chamber-05389.herokuapp.com/item/${itemId}`;
        // const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [itemId, qty, item])


    // Delivered Item API 
    const defaultDeliveryQty = 1;
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const oldQty = parseInt(qty);
        const deliverQty = parseInt(data.deliverqty);
        const newQtydelivered = oldQty - deliverQty;
        if (deliverQty > oldQty) {
            return toast('Not Enough Stock');
        }
        const newQty = { newQtydelivered }

        const url = `https://infinite-chamber-05389.herokuapp.com/deliveritem/${itemId}`;
        // const url = `http://localhost:5000/deliveritem/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newQty)
        })
            .then(res => res.json())
            .then(data => {
                toast(`${deliverQty} Item deliverd successfully`);
            })

        // post item to sold database 
        data.itemId = itemId;
        const url1 = `https://infinite-chamber-05389.herokuapp.com/solditem/${itemId}`;
        // const url1 = `http://localhost:5000/solditem/${itemId}`;
        fetch(url1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    // Restock Item API
    const handleRestock = (event) => {
        event.preventDefault();
        const oldQty = qty;
        const restockQty = event.target.restock.value;
        const qtyAfterRestock = parseInt(oldQty) + parseInt(restockQty)
        const newQty = { qtyAfterRestock }
        console.log(oldQty, restockQty, qtyAfterRestock);

        const url = `https://infinite-chamber-05389.herokuapp.com/restockitem/${itemId}`;
        // const url = `http://localhost:5000/restockitem/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newQty)
        })
            .then(res => res.json())
            .then(data => {
                toast(`${restockQty} Item restock successfully`);
                event.target.reset();
            })
    }

    // get sold Qty 
    const [soldQty, setSoldQty] = useState([]);
    useEffect(() => {
        const url = `https://infinite-chamber-05389.herokuapp.com/soldqty/${itemId}`;
        // const url = `http://localhost:5000/soldqty/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSoldQty(data)
            });

    }, [itemId, soldQty])

    return (
        <div className='mb-5'>
            <h2 className='mt-5 mb-5 fw-bolder text-uppercase'>Item Detail</h2>
            <div className='row'>
                <div className='col-5 text-end'>
                    <img src={img} style={{ maxHeight: '400px' }} alt="" />
                </div>
                <div className='col-7 text-start'>
                    <h2>{itemName}</h2>
                    <p>{description}</p>
                    <p>Supplier name: {supplier}</p>
                    <p>price : {price}</p>
                    <p>Added By : {email}</p>
                    <p>Total Sold : {!soldQty[0]?.TotalSum ? 0 : soldQty[0]?.TotalSum} {
                    }</p>
                    <p>Current Stock : <span className='border p-2 bg-primary text-white rounded'>{qty}</span></p>

                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <input className='d-none  w-50 mb-2 p-2' readOnly value={_id} type="text"  {...register("itemId")} />
                        <input className='d-none w-50 mb-2 p-2' readOnly value={defaultDeliveryQty} type="number"  {...register("deliverqty")} />
                        <input className='d-none w-50 mb-2 p-2' readOnly value={user?.email} type="email"  {...register("email")} />
                        <input className='w-50 mb-2 p-2 btn btn-danger' type="submit" value="Deliver" />
                    </form>


                    <form className='mt-2' onSubmit={handleRestock}>
                        <input className='w-50 p-1' name='restock' type="number" placeholder='Restock Qty' /> <br />
                        <input className=' btn btn-primary w-50' type="submit" value="Restock" />
                    </form>


                </div>
            </div>
        </div >
    );
};

export default ItemDetails;