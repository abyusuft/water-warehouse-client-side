import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { description, email, img, itemName, price, qty, supplier } = item;
    useEffect(() => {
        const url = `https://infinite-chamber-05389.herokuapp.com/item/${itemId}`;
        // const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [itemId])
    return (
        <div>
            <h2 className='mt-5 mb-3'>Item Detail</h2>
            <div className='row'>
                <div className='col-4 text-end'>
                    <img src={img} style={{ maxHeight: '300px' }} alt="" />
                </div>
                <div className='col-8 text-start'>
                    <h2>{itemName}</h2>
                    <p>{description}</p>
                    <p>Supplier name: {supplier}</p>
                    <p>price : {price}</p>
                    <p>Added By : {email}</p>
                    <p>Current Stock : <span className='border p-2 bg-primary text-white rounded'>{qty}</span></p>
                    <button>Deliver</button>
                    <form className='mt-2' action="">
                        <input type="number" placeholder='Qty' />
                        <input type="submit" value="Restock" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default ItemDetails;