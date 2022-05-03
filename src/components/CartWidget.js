import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { cartContext } from './CartContext';
import CartWidgetImg from '../imgs/carrito-de-compras.png';

const CartWidget = () => {

    const {cartQuantity} = useContext(cartContext)

    return (
        <div>
            { cartQuantity() === 0
            ? ""
            : <>
                <Link to="/cart">
                <img src={CartWidgetImg} className="cartWidget" alt="CartWidget"/>
                </Link>
                <span>{cartQuantity()}</span>
            </>
            }
        </div>      
        )
};
export default CartWidget;