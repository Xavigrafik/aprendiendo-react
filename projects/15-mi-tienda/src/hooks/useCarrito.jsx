import { useContext, useState } from "react";
import { CarritoContext } from '../context/CarritoContext';


function useCarrito(item) {
    
    const {carrito, setCarrito} = useContext(CarritoContext);
    const [cantidad, setCantidad] = useState(1);
    
      
    const sumarCantidad = ()=> {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const restarCantidad = ()=> {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const addToCart = (id, cantidad) => {

        // Copia el carrito actual
        let newCarrito = [...carrito];
    
        // Verifica si el item ya está en el carrito
        let isInCarrito = newCarrito.find((prod) => prod.id === id);
    
        if (isInCarrito) {
            // Encuentra el item especifico en el carrito
            let itemIndex = newCarrito.findIndex((obj) => obj.id === id);
            // Actualiza la cantidad del item
            newCarrito[itemIndex].cantidad += cantidad;
        } else {
            // Añade un nuevo item al carrito
            newCarrito.push({ id, cantidad });
        }
    
        // Actualiza el estado del carrito
        setCarrito(newCarrito);
        setCantidad(1)
    };

    
    const deleteItemFromCart = (id) => {
        // Copia el carrito actual
        let newCarrito = [...carrito];
        
        // Verifica si el item ya está en el carrito
        let itemIndex = newCarrito.findIndex((obj) => obj.id === id);
        
        // Si el item existe en el carrito, elimínalo
        if (itemIndex !== -1) {
            newCarrito.splice(itemIndex, 1);
        }
        setCarrito(newCarrito);
        //console.log('Se ha eliminado', id);
    }
    const emptyCart = () => {
        setCarrito([]);
    } 

    
    return { 
        cantidad,
        sumarCantidad,
        restarCantidad,
        addToCart,
        deleteItemFromCart,
        emptyCart,
    }
}


export default useCarrito;
