import { useState} from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"

export default function itemCount(){
const[count, setCount] = useState

function onIncrease(){
if(count < 5){
    setCount(count + 1)
}
}

function onDecrease(){
if(count> 1){
    setCount(count - 1)
}
}
    return (
    <div>
        <button onClick={onDecrease}>-</button>
        <span>{count}</span>
        <button onClick={onIncrease}>+</button>
    </div>

    )
}
