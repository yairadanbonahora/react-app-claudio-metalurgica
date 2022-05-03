import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { cartContext } from './CartContext';


const CartWidget = () => {

    const {cartQuantity} = useContext(cartContext)

    return (
        <div>
            { cartQuantity() === 0
            ? ""
            : <>
                <Link to="/cart">
                <img src={'https://firebasestorage.googleapis.com/v0/b/metalurgica-claudio.appspot.com/o/carrito-de-compras.png?alt=media&token=12818058-9c22-450e-95bf-2843163081e9'} className="cartWidget" alt="CartWidget"/>
                </Link>
                <span>{cartQuantity()}</span>
            </>
            }
        </div>      
        )
};
export default CartWidget;