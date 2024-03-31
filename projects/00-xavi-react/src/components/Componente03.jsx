import { useState } from 'react';
import { useEffect } from 'react';


// USE STATE por defecto hace una cosa y sólo una cosa:
// establecer el nuevo estado y causar un re-renderizado de la función.

export default function Componente03() {

    const [name, setName] = useState(null);
    const [toggleName, setToggleName] = useState(false);
    const [age, setAge] = useState(null);
    const [increment, setIncrement] = useState(5);

    const ComponenteDefinido = ({onClick, children}) => {
        return <button onClick = {onClick}>{children}</button>
    }

    useEffect(()=>{
        console.log('useEffect cada vez');
       // console.log('--name: ', name);
       // console.log('--toggleName: ', toggleName);
        
    });

    useEffect(()=>{
        console.log('useEffect la primera vez');
    }, []);

    useEffect(()=>{
      //  console.log('useEffect al cambiar el estado de {age}:', age);
    }, [age])

    useEffect(()=>{
       // console.log('useEffect al cambiar el estado de {name}:', name);
       if (!isNullOrEmpty(name)) {
           setToggleName(true);
       }
    }, [name])
    
    function isNullOrEmpty(str) {
        return str === null || str === undefined || str === '';
    }


    let handleToggleName= ()=> {

        if (isNullOrEmpty(name)) {
            setName("Xavi desde handleToggleName ");
            setToggleName(true) 
        } else {
            setName("");
            setToggleName(false) 

        }

    }

    let incrementAge= (inc)=>{
        setAge(age + parseInt(inc));
    }

    let cleanInput= (input)=>{
        setIncrement(0)
        let elem = document.getElementsByClassName(input)
        elem[0].value = "";
        elem[0].placeholder = increment;
    }

    let resetAge= ()=>{
        setAge(0);
    }

    
    // useEffect(()=>{}, [])

    return (
        <div className="componente componente03">
            <h4>Componente tres: </h4>
            <hr />
            <div style={{ height: '26px' }}>
                {age >= 1 ? <span className="label age">{age}</span> : null}
                {!isNullOrEmpty(name) ? <span className="label name">{name}</span> : null}
            </div>
            <hr />

            <button onClick={()=>setAge(333)}>333</button>
            <button onClick={()=>resetAge()}>reset Age</button>
            <hr />

            <ComponenteDefinido onClick={()=>{setAge(222)}}>{age} ComponenteDefinido</ComponenteDefinido>
            <hr />
            
            <input className='incrementInput' type="text" onChange={(e) => setIncrement(e.target.value)} placeholder={increment}/>
            <button onClick={()=>incrementAge(increment)}>Age + {increment}</button>
            <button onClick={()=>cleanInput('incrementInput')}>x</button>

            <hr />

            <button onClick={()=>setName('**Xavi**')}>Set name</button>
            <button onClick={()=>handleToggleName()}>{toggleName == false ? "Set" : "Clean"} Name</button>

        </div>
    );
}
