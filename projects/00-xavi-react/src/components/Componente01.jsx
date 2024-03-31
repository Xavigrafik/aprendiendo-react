import { useState } from 'react';

export default function ComponenteUno() {
  const [age, setAge] = useState(10);

    return (
      <div className="componente componente01">
        <h3>ComponenteUno</h3>
        <p>{age}</p>
        <button onClick={()=>setAge(333)}>Change Age to 333</button>
        <button onClick={()=>setAge(0)}>Change Age to 0</button>
      </div>
    )
  }