import React from "react";

//Este es el Home 
export const Login=(props)=>{
    return (
        
            <div className="login">
                <div className="centrar">
                    <h1 className="register-text">Registrate o Ingresa para no perderte ninguna novedad</h1>
                </div>
                <div >
                    <div className="datos" id="formulario">
                        <div className="correo">
                            <label for="email" className="centrar">Ingrese su Email</label>
                            <input type="text" id="email" name="email" placeholder="Tu correo" className="input_large"/>
                        </div>
                        <div className="contra">
                            <label for="password" className="centrar space">Ingrese su contraseña</label>
                            <input type="password" id="password" name="password" placeholder="Tu contraseña" className="input_large"/>
                            
                        </div>
                        <div className="enviar">
                            <a href="/home">
                            <input type="button" value="Submit" onClick={props.Login} /></a>
                        </div>
                    </div>
                </div>

                
            </div>
        
            
        

)}



      