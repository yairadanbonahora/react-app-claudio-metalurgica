import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import getData from '../utils/Task';
import products from '../utils/Products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        getData(1000, products)
        .then((data)=>{

            if (categoryId) {
                setItems (products.filter ((products) => products.category === categoryId));
            } else {
                setItems(products);
            };
        })
        .catch ((err) =>{

        }) 
    },[categoryId]);

    return (
        <div className="container-xl">
            <ItemList items={items}/>
        </div>
    )
};
export default ItemListContainer; 