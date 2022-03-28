import React from 'react';
import {Card, Button} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <Card className="cardBody" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={item.img}/>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <h5>${item.price}</h5>
                <Link to={`/details/${item.id}`} ><Button variant="primary">Ver producto</Button></Link>
            </Card.Body>
        </Card>
        </div>
        
    )
};
export default Item;
