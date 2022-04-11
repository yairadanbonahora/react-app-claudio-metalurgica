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

    const handleClick = () => {
        if (stock > 0) {
            onAdd ()
        }
    }

    const btnFinishConfig = {
        className: `btn mt-3 ${stock === 0 ? "btn-secondary" : "btn-success"}`,
        onClick: handleClick,
        disabled: stock === 0,
    };
        
    return (
        <div>
            <div>
                <button className="btn btn-outline-primary" onClick={()=> click ("deleteOne")} disabled={cantidad===0}>-</button>
                <span className="mx-2">{cantidad}</span>
                <button className="btn btn-primary" onClick={()=> click ("addOne")} disabled={stock===0}>+</button>
                <br/>
                <button {...btnFinishConfig}> {stock===0 ?"Sin stock" :"Añadir al carrito"}</button>
            </div>
            <small>Stock: {stock}</small>
        </div>
    )
};
export default ItemCount; 