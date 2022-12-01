import React from "react";
import Nike from "D:/senpai/tienda/src/imagenes/nike.png"

export const Navbar=(props)=>{
    return(
        <nav>
            

            <a href="/home">
                <div className="logo menu">
                    <img src={Nike} alt="" className="zapaheader"/>
                </div>
            </a>

            <ul>
                <li>
                    <a href="/home">Inicio</a>
                </li>
                <li>
                    <a href="/products">Productos</a>
                </li>
            </ul>

            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div >

            <div className="logout">
                <span className="btn-logout" onClick={props.logueo}>Cerrar Sesion</span>
            </div>

        </nav>
    )
}
//fui a tirar la basura feo o sergio