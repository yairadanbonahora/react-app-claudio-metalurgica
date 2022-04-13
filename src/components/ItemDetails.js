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
    const {cart,addItem, isInCart} = useContext (cartContext)
    console.log (cart)


    const addToCart = () => {
        const itemToCart = { 
            id,
            name,
            img,
            price,
            cantidad
        }
        addItem (itemToCart)
        console.log (itemToCart)
    }

    return (
        <div className="col-lg-4 col-md-6">
            <div>
                <button className="btn outline-secondary mt-3" onClick={goBack}>Volver</button>
                <hr/>
            </div>
            <Card className="cardBody" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h6>Stock real: {stock}</h6>
                <h5>${price}</h5>
                {
                    !isInCart (id)
                    ?<ItemCount cantidad={cantidad} setContador={setContador} onAdd={addToCart}/>
                    : <div> <ItemCount cantidad={cantidad} setContador={setContador} onAdd={addToCart}/> <hr/>
                            <Link to="/cart" className="btn btn-success d-block">Finalizar mi compra</Link>
                    </div>
                    
                }
                                
            </Card.Body>
            </Card>
        </div> 
    ) 
};
export default ItemDetails; 