import { useEffect, useState, useCallback } from 'react'
import BikeService from '../services/Dashboard/BikeService';

export function useBikes() {
    const [bikes, setBikes] = useState([]);

    useEffect(function () {
        BikeService.getAll()
            .then(({ data }) => {
                setBikes(data);
            })
    }, [])

    return { bikes, setBikes }
}