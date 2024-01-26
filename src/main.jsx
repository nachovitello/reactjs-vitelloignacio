import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCitpUC-zwzOrVZDDk4d2KYIXloDsjmoig",
  authDomain: "entrega-final-react-js-19c4e.firebaseapp.com",
  projectId: "entrega-final-react-js-19c4e",
  storageBucket: "entrega-final-react-js-19c4e.appspot.com",
  messagingSenderId: "916850620555",
  appId: "1:916850620555:web:b86515f1acfc8ba7f9fc8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
