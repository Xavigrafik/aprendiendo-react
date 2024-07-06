import React, { useContext, useState, useEffect  } from 'react';
import { Link, useNavigate, useParams,  } from "react-router-dom";

import data from "../data/items.json";

import { CarritoContext } from '../context/CarritoContext';
import CarritoItem from '../components/CarritoItem';
import useCarrito from '../hooks/useCarrito';

export const Carrito = () => {

    const { emptyCart } = useCarrito();
    const {carrito} = useContext(CarritoContext);


    // Combinar los datos del carrito con los datos completos de los productos
    const carritoMap = carrito.map(item => {
        const dataFind = data.find(prod => prod.id === item.id);
        return {
            ...item,
            ...dataFind
        };
    });

    const [num, setNum] = useState(0);

    // useEffect para actualizar el número total de artículos en el carrito cuando cambie el carrito
    useEffect(() => {
        // Calcular el número total de artículos sumando las cantidades de cada item en el carrito
        setNum(carrito.reduce((acc, item) => acc + item.cantidad, 0));
    }, [carrito]);

     return (
        <div className="container">
            <div className="row">

                <div className="col-12 mb-4 ">
                    <strong className="h1 ">Carrito</strong>
                    <div className="h5 my-2">{carritoMap.length} {carritoMap.length != 1 ? "productos" : "producto"}, {num} {num != 1 ? "artículos" : "artículo"}.</div>
                </div>

                {carritoMap.length > 0 ? (
                    carritoMap.map((prod) => (
                        <CarritoItem item={prod} key={prod.id} />
                    ))
                ) : (
                    <>
                        <img src="http://placedog.net/200/200" style={{ width: '200px' }} />
                        <p>Perrito triste.</p>
                    </>
                )}
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <Link className="btn btn-primary btn-lg mt-5 mx-2" to="/">Home</Link>
                    {carritoMap.length > 0 ? <a className="btn btn-primary btn-lg mt-5 mx-2" onClick={emptyCart} >Vaciar carrito</a> : "" }
                </div>
            </div>
            
        </div>
    );
};
