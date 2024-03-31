import { useState } from 'react';
import { useEffect } from 'react';


export default function Componente04() {
    
    
    // useEffect(()=>{}, [])
    // useEffectz(()=>{}, [])

    return (
        <div className="componente componente03">
            <h4>Componente cuatro: </h4>

            <hr />

            <button onClick={()=>setName('**Xavi**')}>Set name</button>
            <button onClick={()=>handleToggleName()}>{toggleName == false ? "Set" : "Clean"} Name</button>

        </div>
    );
}
