import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from  'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


const Home = (props) => {
  console.log(props)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, idx) => (
            <TableRow
              key={listing.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link to={`/details/${listing.id}`}>{listing.Business_Name}</Link>
              </TableCell>
              <TableCell align="right">{listing.Description}</TableCell>
              <TableCell align="right">{listing.Hours}</TableCell>
              <TableCell align="right">{listing.Address}</TableCell>
              <TableCell align="right">
                <DeleteIcon
                                // add onClick method here
                                onClick={() => props.deleteListing(idx)}
                                className="icon text-red" />
                                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home;