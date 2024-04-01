
// ESTILOS

import styles from '../styles/componente05.module.scss';


export default function Componente05() {
    
    console.log(styles);

    return (
        // Se usa una clase estática (componente) y una clase.module (componente05)
        <div className={`componente ${styles.componente05}`}>

            <h4>Componente CINCO: </h4>
            <p className='bold'>Estilos css, modules, scss</p>
            <hr />

            <div className={styles.item}>item</div>
            <div className={styles.itemDos}>itemDos</div>
            <div className={`${styles.item} ${styles.itemDos}`}>item itemDos"</div>

            <hr />
        </div>
    );
}
