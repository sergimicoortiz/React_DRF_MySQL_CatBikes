import React from "react";

import { useBikes } from "../../../hooks/useBikes";

import DataTable from 'react-data-table-component';


const BikesList = () => {
    const { bikes } = useBikes();
    const [selectedRows, setSelectedRows] = React.useState(false);

    const columns = [
        {
            name: 'Slug',
            selector: row => row.slug,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true
        },
    ];

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };
    console.log(selectedRows)



    return (
        <DataTable
            columns={columns}
            data={bikes}
            pagination
            selectableRows
            onSelectedRowsChange={handleChange}

        />
    );

}

export default BikesList;