import { useState } from "react";
import RentService from "../services/RentService";
import { useSlots } from "./useSlots";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";



export function useRent() {
    const [rent, setRent] = useState();
    const { slots, setSlots } = useSlots();
    const [oneRent, setOneRent] = useState();
    const navigate = useNavigate();


    const rentBike = (data) => {
        RentService.rentBike(data)
            .then((dataThen) => {
                if (dataThen.status == 200) {
                    toast.success("You rent a Bike, thanks you")
                    setTimeout(() => {
                        navigate("/home")
                        window.location.reload()
                    }, 1000);
                }
            })
            .catch(() => {
                toast.warning("You can't rent more than 1 bike")
            });
    }

    const getUserRent = () => {

    }

    const returnBike = (data) => {
        RentService.getOneRent()
            .then((dataThen) => {
                if (dataThen.status == 200) {
                    data.bike_id = dataThen.data.bike
                    RentService.returnBike(data)
                        .then((dataReturn) => {
                            if (dataReturn.status == 200) {
                                toast.success("You return a Bike, thanks you")
                                setTimeout(() => {
                                    navigate("/home")
                                    window.location.reload()
                                }, 1000);
                            }
                        })
                }
            })
            .catch(() => {
                toast.warning("You don't have any bike")
            });
    }

    return { rent, setRent, rentBike, returnBike, getUserRent }
}   