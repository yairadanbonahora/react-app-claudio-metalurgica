import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import getData from '../utils/Task';
import products from '../utils/Products';
import ItemDetails from './ItemDetails';

const ItemDetailsContainer = () => {
    const [item, setItemDetails] = useState([]);
    const {itemId} = useParams ();

    useEffect(() => {
        getData(1000, products)
        .then((data)=>{
            setItemDetails(products.find ((products)=> products.id === Number(itemId)));
        });
    }, []);
    
    return (
        <div className="container-xl">
            <ItemDetails {...item}/>
        </div>
    )
}; 
export default ItemDetailsContainer;