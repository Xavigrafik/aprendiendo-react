import React, { useState } from 'react';
import "./Inputs.scss"

type Props = {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
};

function Radio({ name }: Props): JSX.Element {
    
    const [checked, setChecked] = useState(false)

    function onChange() {
        setChecked(true)
    }

  return (
    <div className={"radio_"+name }>
      <input
        type="radio"
        className="ab-radio"
        name={name}
        value={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default Radio;
