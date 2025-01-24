import { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const LayoutEffect = () => {
    console.log('1- Render');

    useLayoutEffect(() => {
        console.log('2- useLayoutEffect');
        return console.log('3- useLayoutEffect');
    }, []);

    useEffect(() => {
        console.log('4- useEffect');
        return console.log('5-useEffect');
    }, []);

    return (
        <div>
            <h3>useLayoutEffect</h3>
            <p>Este hook se renderiza antes que el useEffect
                <br />
                Es útil cuando hay que modificar el dom antes de que se renderice.
            </p>
            <p>Consultar console.log</p>

            <a className="mb-5 d-inline-block btn btn-link" target="_blank" href="https://www.youtube.com/watch?v=YiT1GCaYwwU&t=51s">Ver video</a>

            <br />
            
            <Link className="btn btn-primary btn-lg" to="/">Home</Link>
        </div>
    );
};
