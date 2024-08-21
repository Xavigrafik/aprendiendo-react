import React, { useState } from 'react';

type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  onChange: (selectedValue: string) => void;
};

const RadioGroup = ({ name, options, onChange }: RadioGroupProps): JSX.Element => {
  
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={`radioBlock_${name}`}>
      {options.map((option, index) => (
        <div className={`radioItem ${name}_item${index}`} key={option.value}>
          <input
            type="radio"
            id={option.value}
            className="radio"
            name={name}
            value={option.value}
            disabled={option.disabled} // Aplica el estado disabled si existe
            checked={selectedValue === option.value} // Compara con el estado
            onChange={handleChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
          
    </div>
  );
};

export default RadioGroup;
