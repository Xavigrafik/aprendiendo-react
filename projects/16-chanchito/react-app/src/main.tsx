import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import App from './App2.tsx'
// import App from './App3.tsx'

import './styles/utils/importsBootstrap.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* "App" se importa de distintas rutas */}
        <App />
  </React.StrictMode>,
)

import 'bootstrap/dist/js/bootstrap.bundle.min.js'