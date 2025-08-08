import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import type { PropsWithChildren } from 'react';

// PropsWithChildren es un tipo de React que añade `children` a tus props.
type Props = PropsWithChildren<{}>;

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

