import React from "react";
//Este es el producto individual
export const Producto=(props)=>{
    return (
    <>
        <div className="productos">
            <a href="0">
                <div className="producto">
                    <img src={props.product.image} alt=""className="imagen"/>
                </div>
            </a>
            <div className="producto_footer">
                <h1>{props.product.product_name}</h1>
                <p>{props.product.category}</p>
                <p className="price">USD {props.product.price}</p>
                <p>{props.product.description}</p>
            </div>
            <div className="button">
                <span className="btn">
                    Añadir al Carrito
                </span>               
            </div>
        </div>

    </>
)}