import {doc, getDoc, getFirestore} from "firebase/firestore"
export default function ítem({servicios}) {
    return(
        <div className="ítem">
           <h2>{servicios.title}</h2>
           <span>{servicios.price}</span>
        </div>
    )
}
