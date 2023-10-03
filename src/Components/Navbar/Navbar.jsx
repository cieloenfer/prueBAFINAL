import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import CartWidget from "./Components/CartWidget"

function Navbar() {
  return (
    <nav>
    <div className= "navbar"></div>
      <ul>
        <NavbarItem tecto="Inicio"/>
        <NavbarItem tecto="Mediaciones"/>
        <NavbarItem tecto="Asesorías y trámites"/>
        <NavbarItem tecto="Carrito"/>

        
       {/*<li><a href="/">Inicio</a></li>
        <li><a href="/catalogo">Mediaciones</a></li>
        <li><a href="/">Asesorías y trámites</a></li>
  <li><a href="/carrito">Carrito</a></li>*/}
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default Navbar;
