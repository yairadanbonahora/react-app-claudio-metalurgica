import React, {useState} from 'react';

function ItemCount () {
    const [initial, addToCart] = useState(0);
    
    const deleteOne = () => {
        if (initial>=1) {
            addToCart (initial-1);
        }
    }
    
    return (
        <div className="card-producto">
            <h3>Balancín</h3>
            <div>
                <h6>Cantidad: {initial}</h6>
                <button onClick={()=> addToCart (initial +1)}>Agregar al carrito</button>
                <button onClick={()=> deleteOne ()}>Quitar una unidad</button>
            </div>
        </div>
    )
};
export default ItemCount; 