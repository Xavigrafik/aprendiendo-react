import { useState } from "react";

function useCarrito(item) {

    const [cantidad, setCantidad] = useState(1);

    const sumarCantidad = ()=> {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const restarCantidad = ()=> {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const addToCart = (id, cantidad)=> {
        console.log(`USE CARRITO: item ${id}, cantidad: ${cantidad}`);
    }


    return { 
        cantidad,
        sumarCantidad,
        restarCantidad,
        addToCart,
    }
}


export default useCarrito;
