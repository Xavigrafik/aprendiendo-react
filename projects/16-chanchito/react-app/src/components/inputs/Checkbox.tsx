import React, { useState } from 'react';
import "./Inputs.scss";

type Props = {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckBox({ name, onChange }: Props): JSX.Element {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked); // Actualiza el estado local
    console.log('a tope!');
    
    if (onChange) {
      onChange(event); // Llama a la función onChange pasada por las props si existe
    }
  };

  return (
    <div className={`check_Block_${name}`}>
      <input
        type="checkbox"
        id={`checkbox_${name}`}
        className="ab-checkbox"
        name={name}
        value={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={`checkbox_${name}`}>{name}</label>
    </div>
  );
}

export default CheckBox;
