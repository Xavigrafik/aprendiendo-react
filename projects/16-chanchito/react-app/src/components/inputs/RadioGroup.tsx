import React, { useState } from 'react';

type RadioProps = {
  name: string;
  options: string[]; // Array con las opciones del radio
  onChange?: (selectedValue: string) => void;
};

const RadioGroup = ({ name, options, onChange }: RadioProps): JSX.Element => {
  
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    
    if (onChange) {
      onChange(value); // Llama a la función onChange pasada por las props si existe
    }
  };

  return (
    <div className={`radioBlock_${name}`}>
      {options.map((option, index) => (
        <div className={`radioItem ${name}_item${index}`} key={index}>
          <input
            type="radio"
            id={`radio_${option}`}
            className="radio"
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={handleChange}
          />
          <label htmlFor={`radio_${option}`}>{option}</label>
        </div>
      ))}
          
    </div>
  );
};

export default RadioGroup;
