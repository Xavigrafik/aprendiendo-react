import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import ProductPage from './ProductPage'
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";
import UserPage from "./UserPage";
import PrivateRoute from './PrivateRoute'; // Importamos el nuevo componente
import ErrorDetail from './ErrorDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true, 
                element: <Home/>
            },
            {
                // todo lo que no esté definido
                path: "*",
                element: <ErrorDetail/>
            },
            {
                path: "productos",
                element: <ProductPage/>
            },
            {
                path: "productos/:id",
                element: <ProductDetail/>
            },
            {
                // La ruta '/user' y sus hijos ahora están protegidos por PrivateRoute
                path: "user",
                element: <PrivateRoute><UserPage/></PrivateRoute>,
            },
        ]
    }
]);

export default router
