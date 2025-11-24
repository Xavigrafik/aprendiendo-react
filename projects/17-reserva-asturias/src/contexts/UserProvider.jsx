import PropTypes from 'prop-types';
import { UserContext } from './UserContext';
import { useState } from 'react';


export const UserProvider = ({ children }) => {
    
    
    const usersList = [
        { id: 0, name: 'Xavi',},
        { id: 1, name: 'Guille'},
        { id: 2, name: 'Ricardo'},
    ];
    
    const [user, setUser] = useState(null);


    // LOGIN SIMULADO ****
    const logIn = (userId) => {
        const idToFind = Number(userId);
        const userToLogIn = usersList.find(user => user.id === idToFind);
        setUser(userToLogIn || null);
    };


    const logOut = () => {
        setUser(null);
    };


    return (
        <UserContext.Provider value={{ user, usersList, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};