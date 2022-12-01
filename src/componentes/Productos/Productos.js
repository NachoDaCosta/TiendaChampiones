import React from "react";
import { Producto } from "./Simple_Producto";
import {  Navbar } from '../Header/Navbar';
//Este es el producto individual
export const Productos=(props)=>{
    return (
        <>
        <Navbar/>
        {
            props.Product.map((item,key)=>{
                return(
                    <Producto product={item} key={key} />
                )
            })

        }</>

)}



      