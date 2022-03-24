import React, { useState } from 'react';
import ItemList from './ItemList';
import getData from '../utils/Task';
import products from '../utils/Products';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    getData(1000, products).then((data)=>{
        setItems(products);
    });
    return (
        <div className="container-xl">
            <ItemList items={items}/>
        </div>
    )
};
export default ItemListContainer; 