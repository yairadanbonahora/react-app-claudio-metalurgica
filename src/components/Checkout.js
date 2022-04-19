import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            items: cart,
            total: cartTotal(), 
            buyer: {...values},
            fyh: Timestamp.fromDate(new Date())
        }

        const orderRef = collection(dataBase, "orders")

        // cart.forEach((item) => {
        //     const docRef = doc(dataBase, "products", item.id)

        //     getDoc(docRef)
        //         .then ((doc) => {
        //             if (doc.data().stock >= item.cantidad) {
        //               updateDoc(docRef, {
        //                 stock: doc.data().stock - item.cantidad
        //             })  
        //             } else {
        //                alert ("no hay stock") 
        //             }
                    
        //         })
        // })

        addDoc(orderRef, order)
            .then ((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })
    }

    if (orderId) {
        return <div className="container">
            <h3>Su número de orden es {orderId} </h3>
        </div>
    }

    if (cartQuantity() === 0) {
        return <Navigate to="/"/>
    }
        
   return (
       <form onSubmit={handleSubmit}>
           <legend>Complete con tus datos</legend>
           <input name="name" type="name" placeholder="Nombre" required="autofocus" value={values.name} onChange={handleInputChange}
           />

           <input name="email" type="email" placeholder="Email" required="autofocus" value={values.email} onChange={handleInputChange}
           />

           <input name="phone" type="phone" placeholder="Celular" required="autofocus" value={values.phone} onChange={handleInputChange}
           />

        <button className="btn btn-primary" type="submit">Enviar</button>
       </form>
   )
};

export default checkout;