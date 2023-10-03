import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./itemDetail";
import ItemDetail from "firebase/firestore";


export default function itemDetailContainer() {
    const [servicios, setServicios] = useState();

    useEffect(()=>{
        fetch()
        .then((res)=>res.json())
        .then((data)=>setServicios(data))
    }, [])

    if(!servicios) return null;

    return(
        <div className="item-list-container">
            <ItemDetail servicios={servicios}/>
        </div>
    );
}