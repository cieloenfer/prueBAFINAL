import React, { useContext, useState } from "react"
import { CartContext } from "./CartContext";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const servicios = {
    id: 1,
    name: "Mediación Familiar",
    price: 85.000,
    stock: 7,
  }

export default function ItemDetail(){

const [count, setCount] = useState(1);
const {item, setItem} = useState();
const {cart, addItem, removeItem} = useContext(CartContext);

    return (
        <div>
        <h1>{servicios.name}</h1>   
        <p>{servicios.price}</p> 
        <div>
            <button onClick={() => setCount(count -1)}>-</button>
            <span>_[count]</span>
            <button onClick={() => setCount(count +1)}>-</button>
        </div>
        <button onClick={() => {addItem({...servicios, qty: count})}}>Agregar al Carrito</button>
        {item}
        <button onClick={() => {removeItem(servicios.id)}} >Borrar del carrito</button>
        </div>
    )
}