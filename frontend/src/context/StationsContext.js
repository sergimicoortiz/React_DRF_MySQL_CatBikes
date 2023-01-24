import React, { useState, useEffect } from 'react'
import StationService from '../services/Dashboard/StationService';

const Context = React.createContext({})

export function StationContext({ children }) {
    const [stations, setStations] = useState([])

    useEffect(function () {
        console.log("context station")
        StationService.GetStations()
            .then(res => setStations(res.data))
            .catch(e => console.error(e));
    }, [setStations]);

    return <Context.Provider value={{ stations, setStations }}>
        {children}
    </Context.Provider>
}

export default Context