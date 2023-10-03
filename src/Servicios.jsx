import { collection, getDocs, getFireStore, query } from 'firebase/firestore';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export default function Servicios () {
  const [services, setServices ] = useState({});
  const [categoyId] = useParams();

  useEffect(()=>{
    const db = getFireStore();
    const q = query(collection(db, "servicios"));

    getDocs(q).then((snapshot)=>{
      setServices(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()})));
    });
  }, []);

  return (
    <section>
        <h1>Iuris Help</h1>
    <section className='item-container'>
        {services.map((service) => (
        <a className='item' key={service.id} href={'/items/${service.id}'}> 
        <div key= {service.id}>
        <h2>{service.name}</h2>
        <h3>{service.description}</h3>
        <h3>{service.price}</h3>
         </div> 
        </a>
        ))}
        </section>
    </section>
        )}
        
   