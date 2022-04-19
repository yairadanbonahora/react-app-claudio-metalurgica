import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { dataBase } from '../firebase/Config';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        const productsRef = collection (dataBase, "products")
        const filterProducts = categoryId ? query(productsRef, where('category', '==', categoryId)) : productsRef
        getDocs (filterProducts)
            .then(resp => {
                const items = resp.docs.map((doc)=>({id: doc.id, ...doc.data()}));
                setItems(items);
            })  

    },[categoryId]);

    return (
        <div className="container-xl">
            <ItemList items={items}/>
        </div>
    )
};
export default ItemListContainer; 