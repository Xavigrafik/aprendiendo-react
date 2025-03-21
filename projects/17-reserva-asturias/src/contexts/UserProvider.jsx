import PropTypes from 'prop-types';
import { UserContext } from './UserContext';
import { useEffect, useState } from 'react';


export const UserProvider = ({ children }) => {
    
    
    const newUser = {
        id: 22,
        name: "Xavi",
    }
    
    const [user, setUser] = useState(newUser);


    const logIn = () => {
        setUser(newUser);
    };

    const logOut = () => {
        setUser(null);
    };

    // useEffect(() => {
    //     if (user.id == null) {
    //         console.log('Usuario no logueado');
    //     }
    // }, [user]);
    
    const value = { user, logIn, logOut };

    return (
        <UserContext.Provider value= {value}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};