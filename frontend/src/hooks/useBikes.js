import { useContext, useEffect } from 'react'
import BikeService from '../services/Dashboard/BikeService';
import BikesContext from '../context/BikesContext'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export function useBikes() {
    const { bikes, setBikes } = useContext(BikesContext);
    const navigate = useNavigate();

    useEffect(function () {
        console.log("asd")
        BikeService.getAll()
            .then(({ data }) => {
                setBikes(data)
            })
    }, [setBikes])

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







    //     await BikeService.deleteBike(data)
    //         .then((dataThen) => {
    //             console.log(dataThen)
    //             if (dataThen.status == 200) {
    //                 setBikes(bikes.filter(item_filter => item_filter.slug !== data.slug))
    //             }
    //         })
    // console.log(bikes)

    return { bikes, setBikes, createBike, deleteBike }
}