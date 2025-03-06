
import { NavMenu } from "./components/NavMenu";
import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import ROUTES from './routes/routes';
import { ReservationProvider } from "./contexts/ReservationContext";

function App() {



    return (
        <>
            <BrowserRouter>
                
                <ReservationProvider>
                    <NavMenu></NavMenu>
                    {ROUTES}
                </ReservationProvider>

            </BrowserRouter>
        </>
    );
}

export default App;
