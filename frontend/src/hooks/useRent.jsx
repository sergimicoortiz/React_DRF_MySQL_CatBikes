import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import RentService from "../services/RentService";

export function useRent() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [rents, setRents] = useState([]);

    useEffect(() => {
        const path = pathname.split('/')[1];
        if (path === 'dashboard') {
            RentService.GetRentDashboard()
                .then(({ data, status }) => {
                    if (status === 200) {
                        setRents(data);
                    }
                })
                .catch(e => console.error(e));
        }
    }, []);

    const useDeleteRentMultiple = async (ids) => {
        let ids_ok = [];
        for (let i = 0; i < ids.length; i++) {
            try {
                await RentService.DeleteRentDashboard(ids[i]);
                ids_ok.push(ids[i]);
                toast.success(`Rent ${ids[i]} deleted`);
            } catch (error) {
                toast.error(`Rent ${slugs[i]}`);
                console.error(error);
            }
        }
        setRents(rents.filter(item => !ids_ok.includes(item.id)));
    }

    return {
        rents,
        setRents,
        useDeleteRentMultiple
    }
}