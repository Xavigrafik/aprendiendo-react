import React, { useEffect, useState } from 'react';

export const About = () => {
  console.log('Se MONTA el componente About');

    useEffect(() => {
        const clickLogger = () => {
            console.log('Click');
        };

        window.addEventListener('click', clickLogger);
        
        // EL RETURN SÓLO SE EJECUTA AL DESMONTAR EL COMPONENTE
        return () => {
            console.log('Se DESMONTA el componente About');
            window.removeEventListener('click', clickLogger);
        };
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>About</h3>
                    <p>Hay una funcion "clickLogger" que se monta al entrar en la página y se desmonta al salir </p>
                </div>
            </div>
        </div>
    );
};
