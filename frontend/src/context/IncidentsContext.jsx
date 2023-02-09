import React, { useState, useEffect } from 'react'
import IncidentsService from '../services/IncidentsService'

const Context = React.createContext({})

export function IncidentsContextProvider({ children }) {
    const [incidents, setIncidents] = useState([]);

    useEffect(function () {
        IncidentsService.getAll()
            .then(({ data }) => {
                setIncidents(data)
            })
    }, [setIncidents])

    return <Context.Provider value={{ incidents, setIncidents }}>
        {children}
    </Context.Provider>
}

export default Context