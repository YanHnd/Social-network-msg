import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase'

//Firebase config

var firebaseConfig = {
    apiKey: "AIzaSyAfVUAUGe0KuOV6xQA9ymyALyA8eAnfX5s",
    authDomain: "studup-dc5db.firebaseapp.com",
    projectId: "studup-dc5db",
    storageBucket: "studup-dc5db.appspot.com",
    messagingSenderId: "143387807472",
    appId: "1:143387807472:web:3f94f45e6e6c3105863c35",
    measurementId: "G-WLEWDZX87J"
  };

  // intialisation de la BD

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

