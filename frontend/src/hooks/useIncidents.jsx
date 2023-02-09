import { useContext, useState } from 'react';
import IncidentsContext from '../context/IncidentsContext';

export function useIncidents() {
    const { incidents, setIncidents } = useContext(IncidentsContext);

    return { incidents, setIncidents }
}