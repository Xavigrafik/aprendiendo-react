import { Routes, Route } from 'react-router-dom';

import AddReservation from "../pages/AddReservation";
import Login from "../pages/Login";
import Home from "../pages/Home";


const ROUTES = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddReservation />} />
        <Route path="/login" element={<Login />} />
    </Routes>
);

export default ROUTES;