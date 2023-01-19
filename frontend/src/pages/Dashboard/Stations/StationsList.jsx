import React, { useState } from "react";
import('./StationsList.scss');
import { useStations } from "../../../hooks/useStations";
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const StationsList = () => {
    const navigate = useNavigate();
    const { stations, setStations, useDeleteStationMultiple } = useStations();

    const columns = [
        {
            name: 'Slug',
            selector: row => row.slug,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => row.image,
            sortable: true,

        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,

        },
    ];

    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleCleared, setToggleCleared] = useState(false);

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    const deleteStations = () => {
        useDeleteStationMultiple(selectedRows.map(row => row.slug));
        setToggleCleared(!toggleCleared);
        setSelectedRows([]);
    }


    const redirects = {
        create: () => navigate('/dashboard/stations/create'),
        update: (slug) => navigate('/dashboard/stations/update/' + slug),
    }

    return (
        <div>
            <h1>Stations List</h1>
            <button onClick={() => redirects.create()}>CREATE</button>
            <button onClick={() => redirects.update(selectedRows[0].slug)} disabled={selectedRows.length !== 1}>UPDATE</button>
            <button onClick={() => deleteStations()} disabled={selectedRows.length === 0}>DELETE</button>
            <DataTable
                columns={columns}
                data={stations}
                pagination
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={toggleCleared}
            />
        </div>
    )
}

export default StationsList;