import React from "react";
import Nike from "D:/senpai/tienda/src/imagenes/nike.png"

export const Navbar=()=>{
    return(
        <nav>
            

            <a href="/">
                <div className="logo menu">
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

        </nav>
    )
}
//fui a tirar la basura feo o sergio