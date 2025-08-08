import { createBrowserRouter } from "react-router-dom";
import Home from './Home'
import ProductPage from './ProductPage'
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import PrivateRoute from './PrivateRoute'; // Importamos el nuevo componente

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
                path: "*",
                element: <ErrorPage/>
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
                element: <PrivateRoute><UserPage /></PrivateRoute>,
            },
        ]
    }
]);

export default router;