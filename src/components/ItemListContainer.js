import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
// import getData from '../utils/Task';
// import products from '../utils/Products';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { dataBase } from '../firebase/Config';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        // getData(1000, products)
        // .then((productsRef)=>{
        //     if (categoryId) {
        //         setItems (items.filter ((items) => items.category === categoryId));
        //     } else {
        //         setItems(items);
        //     };
        // })
        // .catch ((err) =>{

        // })
 
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