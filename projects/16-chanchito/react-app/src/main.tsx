import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import App2 from './App2.tsx'

import './styles/utils/importsBootstrap.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App2 />
    {/* <App /> */}
  </React.StrictMode>,
)

import 'bootstrap/dist/js/bootstrap.bundle.min.js'