import { useState } from 'react'
import Componente01 from './components/Componente01.jsx';
import Componente02 from './components/Componente02.jsx';
import Componente03 from './components/Componente03.jsx';
import Componente04 from './components/Componente04.jsx';


import './App.css'

function App() {

  console.log('App.jsx');

  return (
    <>
      <h3>App.jsx</h3>
      {/* <Componente01></Componente01> */}
      {/* <Componente02></Componente02> */}
      {/* <Componente03></Componente03> */}
      <Componente04></Componente04>
    </>
  )
}

export default App