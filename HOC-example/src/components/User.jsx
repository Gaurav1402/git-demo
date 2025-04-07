import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GetUser from './GetUser';

function User(props) {
  const { UserList, loading, error } = props;
  console.log("user", UserList);
  console.log("loading", loading);
  return (
    <div>
      <TableContainer component={Paper} sx={{ border: 1 }}>
        <Table sx={{ minWidth: 650, margin: '20px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>UserName</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserList.map((row) => (
              <TableRow key={row.id}  >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default GetUser(User)
