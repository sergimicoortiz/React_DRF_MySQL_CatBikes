import { useContext, useEffect } from 'react'
import BikeService from '../services/Dashboard/BikeService';
import BikesContext from '../context/BikesContext'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export function useBikes() {
    const { bikes, setBikes } = useContext(BikesContext);
    const navigate = useNavigate();

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

    return { bikes, setBikes, createBike, deleteBike }
}
export function useBike() {

    const { bike, setBike } = useContext(BikesContext);

}