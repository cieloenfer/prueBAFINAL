import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Título from './Components/Titulo'
import itemListContainer from './Components/itemLIstContainer'
import itemDetailContainer from './Components/itemDetailContainer'
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from './Components/CartContext'
import ItenDetail from './Components/itemDetail'
import CartWidget from './Components/CartWidget'
import {doc, getDoc, getFirestore} from "firebase/firestore"


function App() {
  const [Services, setServices] = useState(0)
    if (Services){
      return<h1>No Services</h1>
    }

  return (
   <>
   <div>
      <Título texto="Iuris Help"color="blue"/>
        </div>
  
   <Navbar/> 
   <itemListContainer greeting={"Nuestros Servicios"}/>
   <itemDetailContainer/>
   <itemCount/>
   </>
  )
}

<CartProvider>
  <ItenDetail/>
</CartProvider>


export default App
