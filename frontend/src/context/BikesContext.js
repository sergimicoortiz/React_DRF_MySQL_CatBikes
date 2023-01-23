import React, { useState, useEffect } from 'react'
import BikeService from '../services/Dashboard/BikeService'

const Context = React.createContext({})

export function BikesContextProvider({ children }) {
    const [bikes, setBikes] = useState([]);

    useEffect(function () {
        console.log("useEffectContext")
        BikeService.getAll()
            .then(({ data }) => {
                setBikes(data)
            })
    }, [setBikes])

    return <Context.Provider value={{ bikes, setBikes }}>
        {children}
    </Context.Provider>
}

export default Context