
// IMPORTS
import { useState } from 'react'
import Componente01 from './components/Componente01.jsx';
import Componente02 from './components/Componente02.jsx';
import Componente03 from './components/Componente03.jsx';
import Componente04 from './components/Componente04.jsx';
import Componente05 from './components/Componente05.jsx';
import Componente06 from './components/Componente06.jsx';
import Componente07 from './components/Componente07.jsx';

//STYLES
import './styles/componentes.css' // se importa un CSS genérico para los componentes
import styles from './styles/App.module.css' // se impora un CSS.module específico para App.jsx

function App() {

  // console.log('App.jsx');

  return (
    <div className={styles.containerApp}>
        <h3>App.jsx</h3>
        {/* <Componente01></Componente01>
        <Componente02></Componente02>
        <Componente03></Componente03>
        <Componente04></Componente04>
        <Componente05></Componente05> */}
        {/* <Componente06></Componente06> */}
        <Componente07></Componente07>
    </div>
  )
}

export default App