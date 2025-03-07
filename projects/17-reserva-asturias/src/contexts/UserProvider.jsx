import PropTypes from 'prop-types';
import { useState } from "react";
import { UserContext } from './UserContext';

const userNoLogged = {
    id: null,
    name: null,
}



export  const UserProvider = ({ children }) => {
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
    };

    return (
        <UserContext.Provider value={{ user, logUser, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};