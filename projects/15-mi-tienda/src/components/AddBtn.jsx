import React from 'react'

export const AddBtn = ({ cantidad, handleAddToCart,handleSumar,handleRestar }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
        <button className="addToCart btn" onClick={handleRestar}>-</button>
        <div className="addToCart btn" onClick={handleAddToCart}>Add: {cantidad}</div>
        <button className="addToCart btn" onClick={handleSumar}>+</button>
    </div>
  )
}
