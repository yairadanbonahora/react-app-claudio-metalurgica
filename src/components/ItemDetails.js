import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetails = ({item, id, name, img, price, description}) => {
    
    const navigate = useNavigate();
    const goBack = () => {
        navigate (-1)
    }

    const [cantidad, setContador] = useState(0);

    const addToCart = ({id, name, img, price}) => {
        const itemToCart = {
            id,
            name,
            img,
            price,
            cantidad
        }
        console.log (itemToCart)

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
                <ItemCount cantidad={cantidad} setContador={setContador} onAdd={addToCart} />
            </Card.Body>
            </Card>
        </div> 
    ) 
};
export default ItemDetails; 