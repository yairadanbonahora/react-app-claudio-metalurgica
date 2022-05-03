import React, {useState, useContext} from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { cartContext } from './CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetails = ({id, name, img, description, price, stock}) => {
    
    const navigate = useNavigate();
    const goBack = () => {
        navigate (-1)
    }

    const [cantidad, setContador] = useState(1);
    const {addItem, isInCart} = useContext (cartContext)
    
    const addToCart = () => {
           const itemToCart = { 
            id,
            name,
            img,
            price,
            cantidad
        }
        addItem (itemToCart) 
    }

    return (
        <div>
            <div>
                <button className="btn btn-dark mt-3" onClick={goBack}>Volver</button>
                <hr/>
            </div>
            <Card className="cardBody">
            <Card.Img variant="top" weight="60px" height="380px" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h5>Precio: ${price}</h5>
                {
                    !isInCart (id)
                    ?<ItemCount cantidad={cantidad} setContador={setContador} onAdd={addToCart} stock={stock}/>
                    : <div>
                        <ItemCount cantidad={cantidad} setContador={setContador} onAdd={addToCart} stock={stock}/><hr/>
                        <Link to="/cart" className="btn btn-success d-block">Finalizar mi compra</Link>
                    </div>
                    
                }
                                
            </Card.Body>
            </Card>
        </div> 
    ) 
};
export default ItemDetails; 