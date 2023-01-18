import React, { useState } from "react";
import('./StationsList.scss');
import { useStations } from "../../../hooks/useStations";
import DataTable from 'react-data-table-component';

const StationsList = () => {
    const { stations } = useStations();

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

    const [selectedRows, setSelectedRows] = useState(false);

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    const logSelected = () => {
        console.log(selectedRows);
    }

    return (
        <div>
            <h1>Stations List</h1>
            <button onClick={logSelected}>TEST</button>
            <DataTable
                columns={columns}
                data={stations}
                pagination
                selectableRows
                onSelectedRowsChange={handleChange}
            />
        </div>
    )
}

export default StationsList;