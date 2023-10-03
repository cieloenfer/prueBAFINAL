import { addDoc, collection, getFirestoire } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from "react-router-dom";

export default function checkOut(){
Const [name, setName] = useState ("");
Const[email, setEmail] = useState  ("");
Const[phone, setPhone] = useState  ("");

Const[orderId, setOrderId] = useState ();
Const[cart] = useContext(CartContext);

function crearSolicitud(){
    const db = getFirestoire();
    const order = {
        buyer:{
            name,
            mail,
            phone,
        }
    };

const solicitudesRef = collection(db, "solicitudes");
 addDoc(solicitudesRef, order).then((result) => {
    setOrderId(result, id);
 })
}

if(orderId){
    return <h1>{"Gracias por tu compra, el id de tu solicitud es ${orderId}"}</h1>
}
return(
    <form onSubmit={(e) => e.preventDefault()}
    style={{display:"flex", flexDirection: "column", gap:"30px"}}>
    <label>
    Name
    <input type="text" value={name}onChange={(event)=> setName(event.target.value)}/>
    </label>
    <label>
       email 
    <input type="text" value={email}onChange={(event)=> setEmail(event.target.value)} />
    </label>
    <label htmlFor="">
       Phone 
       <input type="text" value={phone}onChange={(event)=> setPhone(event.target.value)} />
    </label>
    <button onClick={crearSolicitud}>Finalizar Compra</button>
    </form>
)
}