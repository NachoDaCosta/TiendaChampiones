import React from "react";

//Este es el Home 
export const Login=()=>{
    return (
        <>
        <div className="login">
            <div className="centrar">
                <h1 className="register-text">Registrate o Ingresa para no perderte ninguna novedad</h1>
            </div>
            <div >
                <form className="datos">
                    <div className="correo">
                        <label for="email" className="centrar">Ingrese su Email</label>
                        <input type="text" id="email" name="Email" placeholder="Tu correo" className="input_large"/>
                    </div>
                    <div className="contra">
                        <label for="password" className="centrar space">Ingrese su contraseña</label>
                        <input type="password" id="password" name="password" placeholder="Tu contraseña" className="input_large"/>
                        
                    </div>
                    <div className="enviar">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>

            
        </div>
            
        </>

)}



      