import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='mainContainer'>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;

