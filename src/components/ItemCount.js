import React, {useState} from 'react';

function ItemCount ({cantidad, setContador, onAdd, stock}) {

    // const [stockI, setStock] = useState(10-1);
    
    const click = (type) => {
        if (type === "addOne") {
            if (stock > cantidad) {
                setContador (cantidad +1);
                // setStock (stockI -1); 
            }
           
            } else {
            if (cantidad>1) {
                setContador (cantidad-1);
                // setStock (stockI +1);
            }
        } 

    }

    const handleClick = () => {
        if (stock > 0) {
            onAdd ()
        }
    }

    const btnFinishConfig = {
        className: `btn mt-3 ${stock === cantidad ? "btn-secondary" : "btn-success"}`,
        onClick: handleClick,
        disabled: stock === cantidad,
    };
        
    return (
        <div>
            <div>
                <button className="btn btn-outline-primary" onClick={()=> click ("deleteOne")} disabled={cantidad===1}>-</button>
                <span className="mx-2">{cantidad}</span>
                <button className="btn btn-primary" onClick={()=> click ("addOne")} disabled={stock===cantidad}>+</button>
                <br/>
                <button {...btnFinishConfig}> {stock===cantidad ?"Sin stock" :"Añadir al carrito"}</button>
            </div>
        </div>
    )
};
export default ItemCount; 