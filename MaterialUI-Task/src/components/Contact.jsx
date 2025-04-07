import React, { useState } from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Contact = () => {
    // State for tasks and form inputs
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: null,
        priority: 1,
        status: "Pending",
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    // Handle Date change
    const handleDateChange = (newValue) => {
        setTask((prevTask) => ({ ...prevTask, dueDate: newValue }));
    };
    const Edit = (id) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        if (taskToEdit) {
            setTask(taskToEdit);
        }
    };
    const Delete = (id) => {
        const filterTask = tasks.filter((task) => task.id != id);
        const flag = window.confirm("are you sure to delete?")
        if (flag) {
            setTasks(filterTask);
        }
    };

    // Add task to the list
    const handleAddTask = () => {
        if (task.title && task.description && task.dueDate) {
            setTasks((prevTasks) => [...prevTasks, { ...task, id: tasks.length + 1 }]);
            setTask({
                title: "",
                description: "",
                dueDate: null,
                priority: 1,
                status: "Pending",
            });
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Define columns for DataGrid
    // const columns = [
    //     { field: "id", headerName: "ID", width: 70 },
    //     { field: "title", headerName: "Title", width: 200 },
    //     { field: "description", headerName: "Description", width: 300 },
    //     { field: "dueDate", headerName: "Due Date", width: 150 },
    //     { field: "priority", headerName: "Priority", width: 100 },
    //     { field: "status", headerName: "Status", width: 150 },
    //     { field: "action", headerName: "Action", width: 150 },
    // ];

    return (
        <Box sx={{ padding: 3 }}>
            <h1>Task Management</h1>
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 3 }}>
                <TextField label="Title" name="title" value={task.title} onChange={handleChange} />
                <TextField label="Description" name="description" value={task.description} onChange={handleChange} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField label="Due Date" value={task.dueDate} onChange={handleDateChange} />
                </LocalizationProvider>
                <TextField label="Priority" name="priority" type="number" value={task.priority} onChange={handleChange} />
                <Select label="Status" name="status" value={task.status} onChange={handleChange}>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleAddTask}>Add Task</Button>
            </Box>
            {/* <Box sx={{ height: 400, width: "100%" }}>
                <DataGrid rows={tasks} columns={columns} pageSize={5} />
            </Box> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Due Date</TableCell>
                            <TableCell align="right">Priority</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.dueDate?.toString()}</TableCell> {/* Ensure proper formatting */}
                                <TableCell align="right">{row.priority}</TableCell>
                                <TableCell align="right"><Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={() => Edit(row.id)} >Edit</Button>
                                    <Button variant="contained" color="secondary" sx={{ ml: 2 }} onClick={() => Delete(row.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Contact
