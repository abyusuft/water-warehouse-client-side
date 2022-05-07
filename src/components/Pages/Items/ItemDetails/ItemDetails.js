import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    return (
        <div>
            <h2>This is Item Details Page</h2>
            <h3>Item Id : {itemId}</h3>
        </div>
    );
};

export default ItemDetails;