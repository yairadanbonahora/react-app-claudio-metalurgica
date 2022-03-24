import React from 'react';
import ItemCount from './ItemCount';
import {Card, Button} from 'react-bootstrap';

const Item = ({item}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <Card className="cardBody" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={item.img}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Ver detalle</Button>
                <h5>${item.price}</h5>
                <ItemCount/>
            </Card.Body>
        </Card>
        </div>
        
    )
};
export default Item;
