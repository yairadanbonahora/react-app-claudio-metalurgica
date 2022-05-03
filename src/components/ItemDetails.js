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
    const {cart, addItem, isInCart, removeItem} = useContext (cartContext)

    //esto me busca el producto agregado, su cantidad y le suma la nueva
    const itemInCart = (id) => {
        const itemFound = cart.find (prod => prod.id === id)

        const itemFoundProperties = {...itemFound}
        const itemFoundCantidad = itemFoundProperties.cantidad
        const totalCantidad = (itemFoundCantidad + cantidad)

        // removeItem (itemFound)
        
        const itemEditCart = {
            id, name, img, price, totalCantidad
        }
        //me sale NaN

        addItem (itemEditCart)
    }
    
    const addToCart = () => {

        if (isInCart(id)) {
            itemInCart(id)
                       
            //me falta mostrar la suma en el cart o lo borro al anterior y dibujo esto nuevo 
           
        } else {
           const itemToCart = { 
            id,
            name,
            img,
            price,
            cantidad
        }
        addItem (itemToCart) 
        }
    }

    return (
        <div>
            <div>
                <button className="btn btn-dark mt-3" onClick={goBack}>Volver</button>
                <hr/>
            </div>
            <Card className="cardBody">
            <Card.Img variant="top" src={img} weight="400px" height="500px"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h5>Precio: ${price}</h5>
                {
                    !isInCart (id)
                    ?<ItemCount cantidad={cantidad} setContador={setContador} onAdd={addToCart} stock={stock}/>
                    : <div> <ItemCount cantidad={cantidad} setContador={setContador} onAdd={addToCart} stock={stock}/> <hr/>
                            <Link to="/cart" className="btn btn-success d-block">Finalizar mi compra</Link>
                    </div>
                    
                }
                                
            </Card.Body>
            </Card>
        </div> 
    ) 
};
export default ItemDetails; 