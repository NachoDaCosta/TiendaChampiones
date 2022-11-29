import React from "react";
import { Producto } from "./Simple_Producto";
//Este es el producto individual
export const Productos=(props)=>{
    return (
        <>{
            props.Product.map((item,key)=>{
                return(
                    <Producto product={item} key={key}/>
                )
            })

        }</>

)}



      