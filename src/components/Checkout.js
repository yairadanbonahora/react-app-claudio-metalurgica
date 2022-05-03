import { addDoc, collection, doc, documentId, getDoc, getDocs, query, Timestamp, updateDoc, where, writeBatch } from "firebase/firestore";
import { dataBase } from '../firebase/Config';
import React, { useContext, useState } from "react";
import { cartContext } from "./CartContext";
import { Navigate } from "react-router-dom";

const checkout = () => {

    const {cart, cartTotal, cartQuantity, emptyCart} = useContext (cartContext)

    const [orderId, setOrderId] = useState (null) 

    const [values, setValues] = useState({
        name:"",
        email:"",
        phone:"",
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            items: cart,
            total: cartTotal(), 
            buyer: {...values},
            fyh: Timestamp.fromDate(new Date())
        }


        const batch = writeBatch(dataBase)
        const orderRef = collection(dataBase, "orders")
        const productsRef = collection(dataBase, "products")
        const q = query(productsRef, where(documentId(), 'in', cart.map((item) => item.id)))
        const products = await getDocs(q)

        const outOfStock = []

        products.docs.forEach((doc) => {
            const itemInCart = cart.find ((item) => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()        
            addDoc(orderRef, order)
                .then ((doc) => {
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {
            return <h2>Sin stock de item ${outOfStock.itemInCart}</h2>
        }
    }

    if (orderId) {
        return <div className="msj-success">
            <h3>¡Gracias por su compra! Su número de orden es {orderId} </h3>
        </div>
    }

    if (cartQuantity() === 0) {
        return <Navigate to="/"/>
    }
        
   return (
       <form onSubmit={handleSubmit}>
           <legend className="title-page">Complete con sus datos</legend>
           <input name="name" type="name" placeholder="Nombre" required="autofocus" value={values.name} onChange={handleInputChange}
           />
           <hr/>

           <input name="email" type="email" placeholder="Email" required="autofocus" value={values.email} onChange={handleInputChange}
           />
           <hr/>

           <input name="phone" type="phone" placeholder="Celular" required="autofocus" value={values.phone} onChange={handleInputChange}
           />
           <hr/>

        <button className="btn btn-primary" type="submit">Enviar</button>
       </form>
   )
};

export default checkout;