import { useEffect, useState,  } from 'react';
import { Link } from 'react-router-dom';
import { CarritoWidget } from './CarritoWidget'; 


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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-xxl">
                <Link className="navbar-brand" to="/">FOOTER</Link>
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
                        {/* <Link className="nav-link" to="/" >Home</Link> */}
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/404">404</Link>
                        {/* <Link className="nav-link" to="/item/1">Item 1</Link> */}
                        {/* <Link className="nav-link" to="/item/555">Item 555</Link> */}

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className='dropdown-item' to={`/categoria/`}>All</Link></li>
                            {categories.length > 0 && 
                                categories.map((category, index) => (
                                    <li key={index} data-id={index}>
                                        <Link className='dropdown-item'  to={`/categoria/${category}`}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </Link>
                                    </li>
                                ))
                                }
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