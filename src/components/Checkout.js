// import { Timestamp } from "firebase/firestore";
// import React, { useContext, useState } from "react";
// import { cartContext } from "./CartContext";

// const checkout = () => {

//     const createOrder = (e) => {
        
//         e.preventDefault;
//         const {cart, cartTotal} = useContext (cartContext)

//         const [values, setValues] = useState({
//             name:"",
//             email:"",
//             phone:"",
//         })

//         const handleInputChange = () => {
//             setValues({
//                 ...values,
//                 [e.target.name]: e.target.value
//             })
//         }

//         const order = {
//             items: cart,
//             total: cartTotal, 
//             buyer: {...values},
//             fyh: Timestamp.fromDate(new Date())
//         }
//     }

//    return (
//        <form onSubmit={createOrder}>
//            <legend>Completa con tus datos</legend>
//            <input name="name" type="name" placeholder="Nombre" required="autofocus" value={values.name} onChange={handleInputChange()}>
//            </input>

//            <input name="email" type="email" placeholder="Email" required="autofocus" value={values.email} onChange={handleInputChange()}>
//            </input>

//            <input name="phone" type="phone" placeholder="Celular" required="autofocus" value={values.phone} onChange={handleInputChange()}>
//            </input>


//        </form>
//    )
// };

// export default checkout;