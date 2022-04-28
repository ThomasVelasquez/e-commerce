import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ProductItem = ({ name, price, image, id }) => {

    const history = useHistory()

    const handleItem = () => {
        history.push(`/store/${id}`);
    }

    return (
        <Col md={4} className='justify-content-center d-flex'>
            <Card className='text' onClick={() => handleItem(id)} >
                <Card.Img variant="top" src={image} alt={name} className='card-img' />
                <Card.Body className='card-body'>
                    <Card.Title className='text-name' >{name}</Card.Title>
                    <Card.Text className='text-price' > {price}$ </Card.Text>
                </Card.Body>
            </Card>
        </Col >

    );
}

export default ProductItem;