import React, { useState } from 'react'
import "../styles/addToCart.scss"
import useCarrito from '../hooks/useCarrito';
export  const AddBtn = ({item}) => {


    const { cantidad, sumarCantidad, restarCantidad, addToCart } = useCarrito(item);

  return (
    <div className='addToCart'>
        <div className="counter btn-group" role="group" aria-label="Basic example">
            <button className="restar btn btn-info text-white" onClick={restarCantidad}>-</button>
            <div className='cantidad'>{cantidad}</div>
            <button className="sumar btn btn-info text-white" onClick={sumarCantidad}>+</button>
        </div>
        <div className="add btn btn-info" onClick={() => addToCart(item.id, cantidad)}>Add: {cantidad}</div>
    </div>
  )
}
