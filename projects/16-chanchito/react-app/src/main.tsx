import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// componentes, utility API, forms, module.scss, 
// import App from './App.tsx'

// fetching
// import App from './App2.tsx'

// Simple TO/DO
// import App from './App3.tsx'

// @tanstack/react-query
 import App from './App4.tsx'

import './styles/utils/importsBootstrap.scss'

const queryClient = new QueryClient(
    {defaultOptions: {
        queries: {
            retry: 2,
            staleTime: 60000,
            gcTime: 5 * 60 * 1000,
            refetchOnMount: true,
            refetchOnWindowFocus: true,
        },
      }  
    },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>

            {/* "App" se importa de distintas rutas */}
            <App />
            <ReactQueryDevtools/>
        </QueryClientProvider>
    </React.StrictMode>
)

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
