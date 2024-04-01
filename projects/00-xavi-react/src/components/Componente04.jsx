import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/componente04.css' // se importa un CSS 
// LIMPIAR USE EFFECT

const ClicksCounter = ()=> {

    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        const handleClick = () => {
           // console.log('handleClick');
            setClicks(prevClicks => prevClicks + 1);
            // setClicks(clicks + 1);
        }
        // Siempre que haya un: eventListener, setInterval o setTimeOut
        // debe haber un cleanup del useEffect eliminando el evento
        document.addEventListener('click',handleClick )

        // CON UN RETURN EN EL USE EFFECT SE EJECUTA AL ELIMINAR EL COMPONENTE CLICKSCOUNTER
        return ()=>{
            console.log('AQUÍ SE LIMPIA EL "USE EFFECT"');
            document.removeEventListener('click',handleClick )
        }
    }, []);

    return (
        <div>
            <h4>Clicks: {clicks}</h4>
            {/* <button onClick={()=>setCount(count + 1)}>+ 1</button> */}
        </div>
    )
};

const Spinner = ({rotate})=> {
    const [isSpinning, setIsSpinning] = useState(false);
    useEffect(() => {
        setIsSpinning(rotate);
      }, [rotate]); // Ejecutar este efecto cada vez que rotate/play cambie

    return (
        <span className={isSpinning ? 'spinner spin' : 'spinner'}></span>
    )
}
const IntervalCount = ()=> {
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(false);
    
    useEffect(() => {
        
        if (!play) {
            return
        }

        const intervalId = setInterval(() => {
            // !! Llamar a la función setCount no cambia el estado actual en el código que ya se está ejecutando
            // (por eso el prevCount)
            // en setCount(count + 1) --> count sigue siendo el valor anterior
            setCount(prevCount=>prevCount + 1);
        }, 1000);
        
        return ()=> clearInterval(intervalId);

    }, [play]);

    return (
        <div>
            <h4>Interval: {count} <Spinner rotate={play}/></h4>
            <button onClick={()=>{setPlay(!play)}}>{play ? "Pause" : "Play"} Interval</button>
        </div>
    )
}


export default function Componente04() {
    
    const [show, setShow] = useState(true);
    const [showInt, setShowInt] = useState(true);

    return (
        <div className="componente componente04">
            <h4>Componente cuatro: </h4>
            <hr />

            {show && <ClicksCounter/>}
            <button onClick={()=>{setShow(!show)}}>{show ? "Hide" : "Show"} Counter</button>
            <hr />

            {showInt && <IntervalCount/>}
            <button onClick={()=>{setShowInt(!showInt)}}>{showInt ? "Hide" : "showInt"} Counter</button>
            <hr />
        </div>
    );
}
