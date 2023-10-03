import React, { useState, useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Título from './Components/Titulo'
import itemListContainer from './Components/itemLIstContainer'
import itemDetailContainer from './Components/itemDetailContainer'
import * as React from 'react'
import {doc, getDoc, getFirestore} from "firebase/firestore"


function getServicios(){
 return new Promise((resolve) => {
    setTimeout(() =>{
        resolve(data.json);
     }, 2000);
 })
}
export default function itemList(){
    const[servicios, setServicios] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(() => {
        getServicios().then((data) => setServicios(data)
        ).finally(()=>{

        })
    },[] );

       if(loading === true) return <p>Cargando...</p>
    return(
        <div className='itemList'>{servicios.map((servicio) =>(
            <item Key={servicio.id} servicio={servicio}/>
        ))}
        </div>
    )
}