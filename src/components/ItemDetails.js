import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetails = ({item}) => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate (-1)
    }

    return (
        <div className="col-lg-4 col-md-6">
            <div>
                <button onClick={goBack}>Atrás</button>
            </div>
            <Card className="cardBody" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={item.img}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <h5>${item.price}</h5>
                <ItemCount/>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
        </div> 
    ) 
};
export default ItemDetails; 