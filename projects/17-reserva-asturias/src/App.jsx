import { useState } from "react";
import { NavMenu } from "./components/NavMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle";

function App() {

    return (
        <>
            <NavMenu></NavMenu>
            <div>
                <ul>
                    <li>Inicio sesion</li>
                    <li>Seleccionar/reservar fecha</li>
                    <li>Mostrar fechas</li>
                    <li>Editar fechas</li>
                </ul>
            </div>
        </>
    );
}

export default App;
