import React from 'react'
import ReactDOM from 'react-dom/client'
//import {App} from './App.jsx'
import './index.css'
import { ProductApp } from './components/ProductApp'

ReactDOM.createRoot(document.getElementById('root')).render( // Esto no es para desarrollo, se elimina el strictmode, donde dice App, podemos cargar otro archivo
  <React.StrictMode>
    <ProductApp title={'Hola mundo react, Productos!'}/>
  </React.StrictMode>,
)
