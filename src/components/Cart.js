import React, { useContext } from 'react';
import { cartContext } from './CartContext';
import {BsTrash} from 'react-icons/bs';

const cart = () => {
    const {cart, cartQuantity, cartTotal, emptyCart, removeItem} = useContext(cartContext)

    return (
        <div>
            {
                cartQuantity() === 0
                ? 'No hay elementos agregados al carrito'
                :  <>
                    <h3>Resumen de compra</h3> <hr/>
                    {
                        cart.map((item)=>(
                            <div key={item.id}>
                                <h4>{item.name}</h4>
                                <h6>Precio por unidad: ${item.price}</h6>
                                <h6>Cantidad: {item.cantidad}</h6>
                                <h5>Total: ${item.price * item.cantidad}</h5>
                                <button className='btn btn-danger' onClick={()=>removeItem(item.id)}><BsTrash/></button>
                                <hr/>
 
                            </div>
                        ))
                    } 
                    <h3> Total de compra: $ {cartTotal()}</h3> <hr/>
                    <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
                </>
            }
           
        </div>
    )
};
export default cart; 