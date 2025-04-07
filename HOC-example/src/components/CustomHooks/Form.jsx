import React from 'react'
import useForm from './UseForm'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Box } from "@mui/material";

function Form() {
    const { form, reset, handlechange } = useForm({
        email: "", password: ""
    });
    console.log("data", form)
    const save = (event) => {
        event.preventDefault();
        alert(`data is ${form.email}, ${form.password}`)
    }
    return (
        <div>
            <form onSubmit={save}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField label="Title" name="email" value={form.email} onChange={handlechange} />
                    <TextField label="Description" name="password" value={form.password} onChange={handlechange} />
                    <Button type="submit" variant="contained">Submit</Button>
                    <Button type="button" variant="contained" onClick={reset}>Reset</Button>
                </Box>
            </form>
        </div>
    )
}

export default Form
