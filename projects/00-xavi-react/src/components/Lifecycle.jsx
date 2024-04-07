// Este componente representa el ciclo de vida de React utilizando useEffect.

import React, { useState, useEffect } from 'react';

console.log('Pre-render');

const Lifecycle = () => {
    console.log('Logic render -------------------------')
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // useEffect ejecutado solo después del montaje y desmontaje del componente
    useEffect(() => {
        console.log('>>>> useEffect []');
        return () => {
            console.log('<----- cleanup useEffect []')
        }
    }, [])

    // useEffect ejecutado después de cada renderizado, similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        console.log('>>>> useEffect no dependency');
        return () => {
            console.log('<----- cleanup useEffect no dependenct');
        }
    })

    // useEffect ejecutado después del montaje y desmontaje del componente, y cada vez que 'counter1' cambia
    useEffect(() => {
        console.log('>>>> useEffect [counter1]');
        return () => {
            console.log('<----- cleanup useEffect [counter1]');
        }
    }, [counter1]);

    // useEffect ejecutado después del montaje y desmontaje del componente, y cada vez que 'counter2' cambia
    useEffect(() => {
        console.log('>>>> useEffect [counter2]');
        return () => {
            console.log('<----- cleanup useEffect [couter2]');
        }
    }, [counter2]);

    // useEffect ejecutado después del montaje y desmontaje del componente, y cada vez que 'counter1' o 'counter2' cambian
    useEffect(() => {
        console.log('>>>> useEffect [counter1, counter2]');
        return () => {
            console.log('<----- cleanup useEffect [counter1, couter2]');
        }
    }, [counter1, counter2]);
   
    
    return (
        <div>
            { console.log('return render LIFECYCLE START') }
            <h4>Clicks c1: {counter1}</h4>
            <h4>Clicks c2: {counter2}</h4>
            <button onClick={() => setCounter1(counter1+1)}>
                Increment c1
            </button>
            <button onClick={() => setCounter2(counter2+1)}>
                Increment c2
            </button>
            <hr />
            <small className='d-block'>
                Recurso: <a href="https://www.youtube.com/watch?v=6lvI-gTF_X8">useEffect explicado al detalle - Con 3 mini Apps - React </a>
            </small>
            { console.log('return render LIFECYCLE END') }
        </div>
    )
}

export default Lifecycle
