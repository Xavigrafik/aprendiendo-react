
import { NavMenu } from "./components/NavMenu";

import { BrowserRouter } from "react-router-dom";
import ROUTES from './routes/routes';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavMenu></NavMenu>
                {ROUTES}
            </BrowserRouter>
        </>
    );
}

export default App;
