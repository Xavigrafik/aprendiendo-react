// En tu UserContext.js
import { createContext, useState } from 'react';

export const UserContext = createContext();

const userNoLogged = {
    id: null,
    name: null,
    isLogged: false
}



export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(userNoLogged);

    const newUser = {
        id: 22,
        name: "Pepe",
        isLogged: true
    }
    const logUser = () => {
        console.log('newUser');
        setUser(newUser);
    };

    const logOut = () => {
        console.log('logOut userContext');
        setUser(userNoLogged);
    };

    return (
        <UserContext.Provider value={{ user, logUser, logOut }}>
            {children}
        </UserContext.Provider>
    );
};