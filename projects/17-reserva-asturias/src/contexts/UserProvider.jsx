import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { UserContext } from './UserContext';
import { Navigate } from 'react-router-dom';

const userNoLogged = {
    id: null,
    name: null,
}



export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(userNoLogged);

    const newUser = {
        id: 22,
        name: "Xavi",
    }
    const logUser = () => {
        setUser(newUser);
    };

    const logOut = () => {
        setUser(userNoLogged);
       console.log(user);
       

    };
    
    // useEffect(() => {
    //     if (user.id == null ) {
    //         Navigate("/");
    //     }
    // }, [user]);

    return (
        <UserContext.Provider value={{ user, logUser, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};