import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'


// componentes, utility API, forms, module.scss, 
// import App from './App.tsx'

// fetching
// import App from './App2.tsx'

// Simple TO/DO
// import App from './App3.tsx'

// @tanstack/react-query
 import App from './App4.tsx'

import './styles/utils/importsBootstrap.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>

            {/* "App" se importa de distintas rutas */}
            <App />

        </QueryClientProvider>
    </React.StrictMode>
)

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
