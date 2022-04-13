import React, {useState} from 'react';

function ItemCount ({cantidad, setContador, onAdd, stock}) {

    const [stockI, setStock] = useState(10-1);
    
    const click = (type) => {
        if (type === "addOne") {
            if (stockI >= 1) {
                setContador (cantidad +1);
                setStock (stockI -1); 
            }
           
            } else {
            if (cantidad>1) {
                setContador (cantidad-1);
                setStock (stockI +1);
            }
        } 

    }

    const handleClick = () => {
        if (stockI > 0) {
            onAdd ()
        }
    }

    const btnFinishConfig = {
        className: `btn mt-3 ${stockI === 0 ? "btn-secondary" : "btn-success"}`,
        onClick: handleClick,
        disabled: stockI === 0,
    };
        
    return (
        <div>
            <div>
                <button className="btn btn-outline-primary" onClick={()=> click ("deleteOne")} disabled={cantidad===1}>-</button>
                <span className="mx-2">{cantidad}</span>
                <button className="btn btn-primary" onClick={()=> click ("addOne")} disabled={stock===0}>+</button>
                <br/>
                <button {...btnFinishConfig}> {stockI===0 ?"Sin stock" :"Añadir al carrito"}</button>
            </div>
            <small>Stock:{stockI}</small>
        </div>
    )
};
export default ItemCount; 