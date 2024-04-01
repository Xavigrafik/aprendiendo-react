// ESTILOS

import styles from '../styles/componente06.module.scss';

import React, { useState, useEffect } from 'react';

export default function Componente06() {
    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/';

    const [fact, setFact] = useState('loading...');
    const [imageUrl, setImageUrl] = useState(' ');

    useEffect(() => {
        if (!fact) return

        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                    const { fact } = data;
                    setFact(fact);
                    const threeFirstWords = fact.split(' ', 3).join(' ')
                    const firstWord = 'putoPERRO';
                    const url = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=70&fontColor=red`;
                    setImageUrl(url);
                })
    }, []);

    // console.log(styles);

    return (
        <div className={`componente ${styles.componente06}`}>
            <h4>Componente SEIS: </h4>
            <p >Fetching de datos</p>
            <hr/>

            <img src={imageUrl} className="img-fluid" />
            <p className={styles.bold}>{fact}</p>
        </div>
    );
}
