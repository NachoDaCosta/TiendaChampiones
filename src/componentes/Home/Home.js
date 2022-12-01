import React from "react";
import {  Navbar } from '../Header/Navbar';


export const Home=(props)=>{
    return (
        <>
        
        <div className="welcome-home">
            <Navbar logueo={props.logueo}/>
            <h1>Bienvenidos a la tienda</h1>
        </div>
            
        </>

)}



      