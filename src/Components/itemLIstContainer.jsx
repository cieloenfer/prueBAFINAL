import {useParams} from "react-router-dom";
import {itemList} from "./itemList";
import {useState, use} from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"


export default function itemLIstContainer({greeting}) {
    return(
        <div className="item-List-Container">
          <h1>{greeting}</h1>
          <itemList/>
        </div>
    )
}