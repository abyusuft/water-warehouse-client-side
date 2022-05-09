import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../../../../hooks/useItems';

const Items = () => {
    const [items, setItems] = useItems([]);
    const navigate = useNavigate();

    const handleUpdateItem = id => {
        navigate(`/manageitem/${id}`)
    }

    return (
        <div className=''>
            <h2 className='mt-5 mb-3 bg-black text-white p-3 text-uppercase'>Our Products</h2>
            <Row xs={1} md={2} lg={3} className="g-3 w-75 mx-auto mt-3">
                {
                    items.slice(0, 6).map(item => <Col key={item._id}>
                        <Card className='bg-light'>
                            <Card.Img style={{ maxHeight: '300px' }} variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title >{item.itemName}</Card.Title>
                                <Card.Text>
                                    <span className='m-0 p-1 d-block'>{item.description}</span>
                                    <span className='m-0 p-1 d-block'><b>Price : {item.price}</b></span>
                                    <span className='m-0 p-1 d-block'>Stock : {item.qty}</span>
                                    <span className='m-0 p-1 d-block fw-bolder'>Supplier : {item.supplier}</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button onClick={() => handleUpdateItem(item._id)} className='w-100 btn btn-danger'>Update</button>
                            </Card.Footer>

                        </Card>
                    </Col>

                    )
                }
            </Row>

            <Link to='/manageitems' className='btn btn-primary my-4 px-5'>Manage All Inventoris</Link>

        </div>
    );
};

export default Items;