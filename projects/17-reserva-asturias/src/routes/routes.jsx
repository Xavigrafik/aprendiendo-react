import { Routes, Route } from 'react-router-dom';

import AddReservation from "../pages/AddReservation";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Galeria from "../pages/Galeria";


const ROUTES = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddReservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/galeria" element={<Galeria />} />
    </Routes>
);

export default ROUTES;