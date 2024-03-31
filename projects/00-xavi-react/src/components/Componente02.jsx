import { useState } from 'react';
import { useEffect } from 'react';


// USE STATE por defecto hace una cosa y sólo una cosa:
// establecer el nuevo estado y causar un re-renderizado de la función.

export default function ComponenteDos() {

    const [age, setAge] = useState(10);

    useEffect(()=>{
        console.log('useEffect la primera vez');
    }, []);

    useEffect(()=>{
        console.log('useEffect al cambiar el estado de {age}:', age);
    }, [age])

    // useEffect(()=>{}, [])

    return (
        <div className="componente componente02">
            <h4>Componente dos:</h4>
            <hr />
            <span className="age">{age}</span>
            <hr />
            <button onClick={()=>setAge(333)}>Change Age to 333</button>
            <button onClick={()=>setAge(444)}>Change Age to 444</button>
        </div>
    );
}
