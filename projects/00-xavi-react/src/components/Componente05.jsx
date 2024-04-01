
// ESTILOS

import styles from '../styles/componente05.module.css';


export default function Componente05() {
    
    console.log(styles);

    return (
        <div className="componente componente05">
            <h4>Componente CINCO: </h4>
            <p>Estilos css, modules, scss</p>
            <hr />

            <div className={styles.item}>
                item
            </div>
            <div className={styles.itemDos}>
                itemDos"
            </div>
            <div className={`${styles.item} ${styles.itemDos}`}>
                item itemDos"
            </div>
            <hr />
        </div>
    );
}
