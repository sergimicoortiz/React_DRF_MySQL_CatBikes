import React, { useEffect, useCallback, useState, useContext } from "react";
import IncidentService from "../services/IncidentService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";


export function useIncident() {
    const navigate = useNavigate();
    const [userIncidents, setUserIncidents] = useState([]);
    const { isAuth } = useContext(UserContext);

    useEffect(() => {
        if (isAuth) {
            IncidentService.GetIncidentsUser()
                .then(({ data, status }) => {
                    if (status === 200) {
                        setUserIncidents(data);
                    }
                })
                .catch(e => console.error(e));
        }
    }, []);

    const useCreateIncident = useCallback((data) => {
        if (isAuth) {
            IncidentService.CreateIncident(data)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setUserIncidents([...userIncidents, data]);
                        toast.success('Incident created, redirecting to the home');
                        setTimeout(() => {
                            navigate('/home');
                            window.location.reload();
                        }, 1000);

                    }
                })
                .catch(e => console.error(e));
        }
    }, []);

    return {
        userIncidents,
        setUserIncidents,
        useCreateIncident,
    };
}