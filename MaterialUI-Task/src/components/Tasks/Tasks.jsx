import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150, editable: true },
    { field: 'description', headerName: 'Description', width: 150, editable: true },
    { field: 'duedate', headerName: 'DueDate', width: 150, editable: true },
    { field: 'priority', headerName: 'Priority', width: 150, editable: true },
    { field: 'status', headerName: 'Status', width: 150, editable: true },
];


function Tasks() {
    const nevigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:3000/tasks";
        try {
            const response = await axios.get(url);
            if (response) {
                console.log("tasks", response.data);
                setTasks(response.data);
            }
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Button variant="contained" sx={{ margin: '20px' }} onClick={() => nevigate(`/tasks/add-tasks`)}>Add Task</Button>
            <DataGrid
                rows={tasks}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />

        </Box>
    );
}
export default Tasks
