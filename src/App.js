import './App.css';

import { Productos } from './componentes/Productos/Productos';
import 'boxicons';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './componentes/Home/Home';
import { Login } from './componentes/login/login';

function App() {
 const [availableProducts, setAvailableProducts] = useState([])
 const [users, setAvailableUsers] = useState([])
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const loginUser = () => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: document.getElementById('email').value, password: document.getElementById('password').value })
    }
    fetch('http://localhost:8001/auth/login', requestOption)
    .then(response => response.json())
    .then(data => {
      setAvailableUsers(data)
      console.log(data)
      if(data.error===null){
      logueo()
    }
    })
    
    
  }

  const logueo=()=>{
    setIsLoggedIn(!isLoggedIn)
  }
  console.log('cambié el estado y es :'+isLoggedIn)

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
    <Routes>
      {!isLoggedIn &&
      <Route path={"/"}  element={<Login Login={loginUser}/>}/> }
      
      {isLoggedIn && 
      <Route path={"/home"} element={<Home logueo={logueo}/>}/>
      }
      <Route path={"/products"} element={<Productos Product={availableProducts}/>} />
      <Route path={"/home"} element={<Home logueo={logueo}/>}/>
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
/*login por formulario
carrito
producto individual
*/