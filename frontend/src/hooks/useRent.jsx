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

    return {
        rents,
        setRents,
    }
}