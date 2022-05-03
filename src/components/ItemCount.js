import React from 'react';

function ItemCount ({cantidad, setContador, onAdd, stock}) {

    const click = (type) => {
        if (type === "addOne") {
            if (stock > cantidad) {
                setContador (cantidad +1);
            }
           
            } else {
            if (cantidad>1) {
                setContador (cantidad-1);
            }
        } 
    }

    const handleClick = () => {
        if (stock > 0) {
            onAdd ();
            setContador(1);   
        }
    }   
   
    return (
        <div>
            {
            stock === 0 
            ? <></>
            : <><button className="btn btn-outline-primary" onClick={()=> click ("deleteOne")} disabled={cantidad===1}>-</button>
            <span className="mx-2">{cantidad}</span>
            <button className="btn btn-primary" onClick={()=> click ("addOne")} disabled={stock===cantidad}>+</button>
            <br/>
            <button className='btn mt-3 btn-success' onClick={handleClick}>Añadir al carrito</button></>
        }
            
        </div>
    )
};
export default ItemCount; 