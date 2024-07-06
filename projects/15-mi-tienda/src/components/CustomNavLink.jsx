import { NavLink } from 'react-router-dom';

export const CustomNavLink = ({ to, children, exact }) => (
    <NavLink
        to={to}
        exact={exact}
        className={({ isActive, isPending }) =>
            `nav-link text-info
            ${isPending 
                ? 'pending' 
                : isActive
                    ? 'active' : ''
            }`
        }
    >
        {children}
    </NavLink>
);
