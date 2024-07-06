import { useEffect, useState,  } from 'react';
import { NavLink, Link  } from 'react-router-dom';
import { CarritoWidget } from '../components/CarritoWidget'; 
import { CustomNavLink } from '../components/CustomNavLink'; 


import { getAllCategories } from '../helpers/getData';
import '../styles/navBar.scss';

 const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((res) => {
            setCategories(res);
        });
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-xxl">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                    <CustomNavLink to="/">Home</CustomNavLink>

                    {/* <CustomNavLink to="/about">About</CustomNavLink> */}
                    {/* <CustomNavLink to="/404">404</CustomNavLink> */}
                    {/* <CustomNavLink to="/item/1">Item 1</CustomNavLink> */}
                    {/* <CustomNavLink to="/item/555">Item 555</CustomNavLink> */}
                        

                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><CustomNavLink to={`/categoria/all`}>All</CustomNavLink></li>
                            {categories.length > 0 && 
                                categories.map((category, index) => (
                                    <li key={index} data-id={index}>
                                        <CustomNavLink className='dropdown-item'  to={`/categoria/${category}`} >
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </CustomNavLink>
                                    </li>
                                ))
                                }
                        </ul>

                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hooks
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li className='dropdown-item'>
                                <CustomNavLink to="/hookPages/layoutEffect">useLayoutEffect</CustomNavLink></li>
                            <li className='dropdown-item'><CustomNavLink to="/hookPages/hookReducer">useReducer</CustomNavLink></li>

                            <li><hr className="dropdown-divider"/></li>

                            <li className='dropdown-item'>useState ✅</li>
                            <li className='dropdown-item'>useReducer</li>
                            <li className='dropdown-item'>useSyncExternalStore</li>
                            <li className='dropdown-item'>useEffect</li>
                            <li className='dropdown-item'>useLayoutEffect</li>
                            <li className='dropdown-item'>useInsertionEffect</li>
                            <li className='dropdown-item'>useRef</li>
                            <li className='dropdown-item'>useImperativeHandle</li>
                            <li className='dropdown-item'>useMemo</li>
                            <li className='dropdown-item'>useCallback</li>
                            <li className='dropdown-item'>useContext</li>
                            <li className='dropdown-item'>useTransition</li>
                            <li className='dropdown-item'>useDeferredValue</li>
                            <li className='dropdown-item'>useDebugValue</li>
                            <li className='dropdown-item'>useId</li>
                        </ul>

                    </li>

                    </ul>
                    <div className='nav-link ml-auto'>
                        <CarritoWidget></CarritoWidget>
                    </div>
                </div>
            </div>  
        </nav>
    );
};

export default NavBar;