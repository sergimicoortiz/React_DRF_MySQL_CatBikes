import React, { useState, useEffect, useContext } from 'react'
import NotificationsService from '../services/NotificationsService';
import UserContext from './UserContext';

const Context = React.createContext({})

export function NotificationsContextProvider({ children }) {
    const [notifications, setNotifications] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(function () {
        if (token) {
            NotificationsService.getAll()
                .then(({ data }) => {
                    setNotifications(data)
                })
        }
    }, [setNotifications, token])

    return <Context.Provider value={{ notifications, setNotifications }}>
        {children}
    </Context.Provider>
}

export default Context