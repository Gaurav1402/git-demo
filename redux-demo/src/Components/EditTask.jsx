import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { taskFeatureKey, tasksAction } from './TaskSlice';
import { useNavigate, useParams } from 'react-router-dom';

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Box } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function EditTask() {
    const { id } = useParams();
    console.log("id", id)
    const dispatch = useDispatch();
    const stateData = useSelector((state) => state[taskFeatureKey])
    useEffect(() => {
        dispatch(tasksAction.getTaskById(id))
    }, [id, dispatch])
    console.log("storedata", stateData)
    const navigate = useNavigate();

    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        status: "",
    });
    useEffect(() => {
        if (stateData.task) {
            setTask(stateData.task);
        }
    }, [stateData.task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleDateChange = (e) => {
        setTask((prevTask) => ({ ...prevTask, dueDate: e.target.value }));
    };
    // const save = (e) => {
    //     e.preventDefault();
    // };

    function save(e) {
        e.preventDefault();
        console.log("Tasktoatt", task)
        dispatch(tasksAction.editTask({ taskId: id, data: task }))
        navigate(-1)
    }
    return (
        <>
            <p> Edit components</p>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Card sx={{ minWidth: 400, padding: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                            Add Task
                        </Typography>
                        <form onSubmit={save}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <TextField label="Title" name="title" value={task.title} onChange={handleChange} />
                                <TextField label="Description" name="description" value={task.description} onChange={handleChange} />
                                <TextField type="date" label="Due Date" name="dueDate" value={task.dueDate} onChange={handleDateChange} />
                                <FormControl >
                                    <InputLabel>Priority</InputLabel>
                                    <Select name="priority" value={task.priority} onChange={handleChange}>
                                        <MenuItem value="Low">Low</MenuItem>
                                        <MenuItem value="Medium">Medium</MenuItem>
                                        <MenuItem value="High">High</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel>Status</InputLabel>
                                    <Select name="status" value={task.status} onChange={handleChange}>
                                        <MenuItem value="Pending">Pending</MenuItem>
                                        <MenuItem value="InProgress">InProgress</MenuItem>
                                        <MenuItem value="Completed">Completed</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button type="submit" variant="contained">
                                    Add Task
                                </Button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default EditTask
