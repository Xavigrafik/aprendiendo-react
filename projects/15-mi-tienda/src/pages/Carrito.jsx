import React from 'react';
import { Link, useNavigate, useParams,  } from "react-router-dom";


export const Carrito = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="h1">Carrito</div>
            </div>
            <Link className="btn btn-primary btn-lg" to="/">Home</Link>
        </div>
    );
};
