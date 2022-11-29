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
                <p className="price">{props.product.price}</p>
            </div>
            <div className="button">
                <button className="btn">
                    añadir al carrito
                </button>               
            </div>
        </div>

    </>
)}