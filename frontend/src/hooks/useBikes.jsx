import { useContext, useEffect, useCallback, useState } from 'react'
import BikeService from '../services/BikeService';
import BikesContext from '../context/BikesContext'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export function useBikes() {
    const { bikes, setBikes } = useContext(BikesContext);
    const [oneBike, setOneBike] = useState({});
    const navigate = useNavigate();

    const getOneBike = useCallback((slug) => {
        BikeService.getOne(slug).
            then(({ data }) => {
                setOneBike(data)
            })
    }, []);

    const createBike = ((data) => {
        BikeService.createBike(data)
            .then((dataThen) => {
                if (dataThen.status == 200) {
                    setBikes([...bikes, dataThen.data])
                    navigate('/dashboard/bikes')
                    toast.success("Created successfully")
                } else {
                    toast.error("Something failed")
                }
            })
    })

    const deleteBike = (async (data) => {
        let save = [];
        for (let i = 0; i < data.length; i++) {
            try {
                await BikeService.deleteBike(data[i])
                save.push(data[i].slug)
                toast.success("Removed")
            } catch (error) {
                toast.error("Falloo")
            }
        }
        setBikes(bikes.filter(item => !save.includes(item.slug)))
    })

    const updateBikes = ((data) => {
        BikeService.updateBike(data)
            .then((dataThen) => {
                if (dataThen.status == 200) {
                    let get_Old_Bike = [...bikes];
                    const remove_old = get_Old_Bike.findIndex(item => item.slug === data.bike.slug);
                    if (remove_old !== -1) {
                        get_Old_Bike[remove_old] = data.bike;
                        setBikes(get_Old_Bike);
                    }
                    navigate('/dashboard/bikes')
                    toast.success("Created successfully")
                } else {
                    toast.error("Something failed")
                }
            })
    })

    return { bikes, setBikes, createBike, deleteBike, getOneBike, oneBike, setOneBike, updateBikes }
}