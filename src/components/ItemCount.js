import React, {useState} from 'react';

function ItemCount () {
    
    const [initial, contador] = useState(0);
    const [stock, setStock] = useState(6);
    
    const click = (type) => {
        if (type === "addToCart") {
            if (stock >= 1) {
                contador (initial +1);
                setStock (stock -1); 
            }
           
        } else {
            if (initial>=1) {
                contador (initial-1);
                setStock (stock +1);
            }
        } 

    }
        
    return (
        <div>
            <div>
                <h6>Cantidad: {initial}</h6>
                <button onClick={()=> click ("addToCart")}>+</button>
                <button onClick={()=> click ("deleteOne")}>-</button>
            </div>
            <small>Stock: {stock}</small>
        </div>
    )
};
export default ItemCount; 