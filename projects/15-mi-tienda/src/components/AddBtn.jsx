import React from 'react'
import "../styles/addToCart.scss"


export const AddBtn = ({ cantidad, handleAddToCart,handleSumar,handleRestar }) => {
  return (
    <div className='addToCart'>
        <div className="counter btn-group" role="group" aria-label="Basic example">
            <button className="restar btn btn-info text-white" onClick={handleRestar}>-</button>
            <div className='cantidad'>{cantidad}</div>
            <button className="sumar btn btn-info text-white" onClick={handleSumar}>+</button>
        </div>
        <div className="add btn btn-info" onClick={handleAddToCart}>Add: {cantidad}</div>
    </div>
  )
}
