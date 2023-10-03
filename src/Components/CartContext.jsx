import { createContext, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"
export const CartContext = createContext
export function CartProvider({children}){

const [cart, setCart] = useState([])

function addItem (ítem, cant){
    setCart ([...cart, {...ítem, cant}])
}

function removeItem(id){
    const newCart = cart.filter((value) => value.id !== id);
    setCart(newCart)
}

return <CartContext.Provider value={[cart, addItem, removeItem]}>{children}</CartContext.Provider>

}