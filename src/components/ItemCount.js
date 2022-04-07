import React, {useState} from 'react';

function ItemCount ({cantidad, setContador, onAdd}) {
    
    const [stock, setStock] = useState(10);

    // console.log (stock);
    // console.log (stockDisponible)
    
    
    const click = (type) => {
        if (type === "addOne") {
            if (stock >= 1) {
                setContador (cantidad +1);
                setStock (stock -1); 
            }
           
            } else {
            if (cantidad>=1) {
                setContador (cantidad-1);
                setStock (stock +1);
            }
        } 

    }
        
    return (
        <div>
            <div>
                <button className="btn btn-primary btn-rest" onClick={()=> click ("deleteOne")}>-</button>
                <span className="mx-2">{cantidad}</span>
                <button className="btn btn-primary" onClick={()=> click ("addOne")}>+</button>
                <br/>
                <button className="btn btn-success mt-3" onClick={onAdd}>Añadir al carrito</button>
            </div>
            <small>Stock: {stock}</small>
        </div>
    )
};
export default ItemCount; 