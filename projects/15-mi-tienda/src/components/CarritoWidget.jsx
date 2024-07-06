import { useContext, useState, useEffect } from 'react';
import cardIcon from '../assets/icons8-line-48.png';
import '../styles/carritoWidget.scss';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';


export const CarritoWidget = () => {
    const { carrito } = useContext(CarritoContext);

    const [num, setNum] = useState(0);

    // useEffect para actualizar el número total de artículos en el carrito cuando cambie el carrito
    useEffect(() => {
        // Calcular el número total de artículos sumando las cantidades de cada item en el carrito
        setNum(carrito.reduce((acc, item) => acc + item.cantidad, 0));
    }, [carrito]);


    return (
        <Link to="/carrito" className="carritoWidget">
            <img src={cardIcon} className="icon" alt="Cart Icon" />
            {num > 0 && <div className="num">{num}</div>} {/* Muestra el número solo si es mayor que 0 */}
        </Link>
    );
};
