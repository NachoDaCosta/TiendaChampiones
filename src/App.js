import './App.css';
import { Header } from './componentes/Header/Header';
import { Productos } from './componentes/Productos/Productos';
import 'boxicons';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
 const [availableProducts, setAvailableProducts] = useState([])
const getproduct = () => {
    fetch('http://localhost:8001/products')
      .then(response => response.json())
      .then(data => {
        setAvailableProducts(data)
        console.log(data)
      })
  } 

   useEffect(() => {
    getproduct()
  }, [])

  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path={"/"} />
      <Route path={"/products"} element={<Productos Product={availableProducts}/>} />
    </Routes>
    <div className="App">
     
      
    </div>
    </BrowserRouter>
  );
}

export default App;
