
import { NavMenu } from "./components/NavMenu";
import { BrowserRouter } from "react-router-dom";
import ROUTES from './routes/routes';

import { UserProvider } from "./contexts/UserProvider";
import { ReservationProvider } from "./contexts/ReservationProvider";

import { ModalProvider } from "./contexts/ModalProvider";


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import MyModal from './components/MyModal';


function App() {
    
    
    return (
        <>
        <BrowserRouter>
            <UserProvider>
                <ModalProvider>
                    <ReservationProvider>
                        <NavMenu />
                        {ROUTES}
                        { <MyModal />}
                    </ReservationProvider>
                </ModalProvider>
            </UserProvider>
        </BrowserRouter>
        </>
    );
}

export default App;
