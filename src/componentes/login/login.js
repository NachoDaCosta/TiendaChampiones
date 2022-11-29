import React from "react";

//Este es el Home 
export const Login=()=>{
    return (
        <>
        <div className="login">
            <div>
                <h1>Registrate o Ingresa para no perderte ninguna novedad</h1>
            </div>
            <div >
                <form className="datos">
                    <div className="correo">
                        <label for="email">Ingrese su Email</label>
                        <input type="text" id="email" name="Email" placeholder="Tu correo"/>
                    </div>
                    <div className="contra">
                        <label for="password">Ingrese su contraseña</label>
                        <input type="password" id="password" name="password" placeholder="Tu contraseña"/>
                        
                    </div>
                    <div className="enviar">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>

            
        </div>
            
        </>

)}



      