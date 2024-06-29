import { useContext } from "react";
import cardIcon from "../assets/icons8-line-48.png";
import "../styles/carritoWidget.scss";
import { CarritoContext } from '../context/CarritoContext';

export const CarritoWidget = () => {

  const {num, carrito, setCarrito} = useContext(CarritoContext);


  return (
    <div className="carritoWidget">
      <img src={cardIcon} className="icon" alt="Cart Icon" />
      <div className="num full">{num}</div>
    </div>
  );
};
