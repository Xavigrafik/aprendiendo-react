
import { NavMenu } from "./components/NavMenu";
import { BrowserRouter } from "react-router-dom";
import ROUTES from './routes/routes';
import { UserProvider } from "./contexts/UserContext";
import { ReservationProvider } from "./contexts/ReservationContext";

function App() {

    return (
        <>
            <BrowserRouter>
                
                <UserProvider>
                    <ReservationProvider>
                        <NavMenu></NavMenu>
                        {ROUTES}
                    </ReservationProvider>
                </UserProvider>

            </BrowserRouter>
        </>
    );
}

export default App;
