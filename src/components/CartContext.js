import React, { useState } from "react";
import {createContext} from "react";

export const cartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
  
    const addItem = (item) => {
        const itemFound = cart.findIndex((cartItem) => cartItem.id === item.id)
        if (itemFound !== -1) {
            const newCart = [...cart];
            newCart[itemFound].cantidad = newCart[itemFound].cantidad + item.cantidad;
            setCart(newCart);
        } else {
           setCart ([...cart, item]) 
        }
    }

    const isInCart = (id) => {
        return cart.some (prod => prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce ((acc, prod)=> acc += prod.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce ((acc, prod) => acc += prod.price * prod.cantidad, 0)
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const emptyCart = () => {
        setCart ([])
    }

    return (
        <cartContext.Provider value={{cart, addItem, isInCart, cartQuantity, cartTotal, emptyCart, removeItem}}>
            {children}
        </cartContext.Provider>
    )
}