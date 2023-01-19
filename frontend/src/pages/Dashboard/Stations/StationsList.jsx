import React, { useState } from "react";
import('./StationsList.scss');
import { useStations } from "../../../hooks/useStations";
import DataTable from 'react-data-table-component';

const StationsList = () => {
    const { stations, setStations, useDeleteStation } = useStations();

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

    const logSelected = () => {
        console.log(selectedRows);
    }

    const deleteStations = () => {
        const slugsSelected = selectedRows.map(row => row.slug)
        selectedRows.forEach(row => useDeleteStation(row.slug));
        setToggleCleared(!toggleCleared);
        setSelectedRows([]);
        setStations(stations.filter(item => !slugsSelected.includes(item.slug)));
    }

    return (
        <div>
            <h1>Stations List</h1>
            <button onClick={() => logSelected()}>TEST</button>
            <button onClick={() => deleteStations()} disabled={selectedRows.length == 0}>DELETE</button>
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