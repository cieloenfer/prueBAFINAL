import {doc, getDoc, getFirestore} from "firebase/firestore"
export default function CartWidget() {
    return(
       <div className="Cart-Widget">
        <span>0</span>
        <img width={50} src="/cart.svg" alt="cart"/>

       </div> 
    )
}