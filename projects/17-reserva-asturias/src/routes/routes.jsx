import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../contexts/ProtectedRoute';

import AddReservation from "../pages/AddReservation";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Galeria from "../pages/Galeria";



const ROUTES = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/galeria" element={<Galeria />} />

        <Route element={<ProtectedRoute />}>
            <Route path="/add" element={<AddReservation />} />
        </Route>

    </Routes>
);

export default ROUTES;