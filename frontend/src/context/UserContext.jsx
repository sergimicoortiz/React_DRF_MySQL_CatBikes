import React, { useState, useEffect } from 'react'
import UserService from '../services/UserService';
import JwtService from '../services/JwtService';

const Context = React.createContext({})

export function UserContextProvider({ children }) {
    const [token, setToken] = useState(JwtService.getToken ? JwtService.getToken : flase);
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (token) {
            UserService.GetUser()
                .then(({ data, status }) => {
                    if (status === 200) {
                        setUser(data.user);
                        setIsAuth(true);
                        setIsAdmin(data.user.types === 'admin');
                    }
                })
                .catch(e => console.error(e));
        } else {
            JwtService.destroyToken();
            setToken(false);
            setIsAuth(false);
            setIsAdmin(false);
            setUser({});
        }
    }, [token]);

    return <Context.Provider value={{ token, setToken, user, setUser, isAuth, setIsAuth, isAdmin, setIsAdmin }}>
        {children}
    </Context.Provider>
}

export default Context