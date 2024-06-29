import { useContext } from "react";
import cardIcon from "../assets/icons8-line-48.png";
import "../styles/carritoWidget.scss";
import { CarritoContext } from '../context/CarritoContext';
import { Link } from "react-router-dom";

export const CarritoWidget = () => {

  const {carrito, setCarrito} = useContext(CarritoContext);


  return (
    <Link to="/carrito" className="carritoWidget">
      <img src={cardIcon} className="icon" alt="Cart Icon" />
      <div className="num full">5</div>
    </Link>
  );
};
