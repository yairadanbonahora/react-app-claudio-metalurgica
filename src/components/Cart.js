import React, { useContext } from 'react';
import { cartContext } from './CartContext';
import {BsTrash} from 'react-icons/bs';
import {Link} from 'react-router-dom';

const cart = () => {
    const {cart, cartQuantity, cartTotal, emptyCart, removeItem} = useContext(cartContext)

    return (
        <div className="cart-body">
            {
                cartQuantity() === 0
                ? <>
                    <h5 className='m-3'>Aún no hay elementos agregados al carrito</h5>
                    <Link to='/'><button className="btn btn-dark m-3">Ver productos</button></Link>
                </>
                :  <>
                    <h3 className="title-page">Resumen de compra</h3><hr/>

                    {cart.map ((item)=>(
                        <div key={item.id} className="item-in-cart">
                            <img weight="80px" height="180px" src={item.img}/>
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
                    <Link to='/checkout'><button className="btn btn-success">Finalizar compra</button></Link>
                </>
            }
           
        </div>
    )
};
export default cart; 