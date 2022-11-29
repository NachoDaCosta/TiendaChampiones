import React from "react";
import Nike from "D:/senpai/tienda/src/imagenes/nike.png"

export const Header=()=>{
    return(
        <header >
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>

            <a href="a">
                <div className="logo">
                    <img src={Nike} alt="" className="zapaheader"/>
                </div>
            </a>

            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/products">Productos</a>
                </li>
            </ul>

            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>

        </header>
    )
}
//fui a tirar la basura feo o sergio