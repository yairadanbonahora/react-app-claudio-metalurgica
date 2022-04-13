import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { dataBase } from '../firebase/Config';
import { doc, getDoc } from 'firebase/firestore'; 
import ItemDetails from './ItemDetails';

const ItemDetailsContainer = () => {
    const [item, setItemDetails] = useState([]);
    const {itemId} = useParams ();

    useEffect(() => {
        // getData(1000, products)
        // .then((data)=>{
        //     setItemDetails(products.find ((products)=> products.id === Number(itemId)));
        // });
        
        const docRef = doc(dataBase, "products", itemId)
        getDoc (docRef)
            .then(doc=> {
                setItemDetails ({id: doc.id, ...doc.data()})
            })
    }, []);
    
    return (
        <div className="container-xl">
            <ItemDetails {...item}/>
        </div>
    )
}; 
export default ItemDetailsContainer;