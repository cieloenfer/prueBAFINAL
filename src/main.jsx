import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {doc, getDoc, getFirestore} from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB9NvjPt-S-j2Jc2puHIrqyfoKqxv24gc",
  authDomain: "iurishelp-2977a.firebaseapp.com",
  projectId: "iurishelp-2977a",
  storageBucket: "iurishelp-2977a.appspot.com",
  messagingSenderId: "498469995631",
  appId: "1:498469995631:web:ef99d40464a0aac559b99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
