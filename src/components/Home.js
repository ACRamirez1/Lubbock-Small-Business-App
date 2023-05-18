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
import cookie from 'cookie'


const Home = (props) => {

  const cookies = cookie.parse(document.cookie);
  console.log(props)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Hours</TableCell>
            <TableCell align="left">Address</TableCell>
            
            {cookies['loggedin'] ? <TableCell align="left">Delete</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, idx) => (
            <TableRow
              key={listing.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link className='businessName' to={`/details/${listing.id}`}>{listing.Business_Name}</Link>
              </TableCell>
              <TableCell align="left">{listing.Description}</TableCell>
              <TableCell align="left">{listing.Hours}</TableCell>
              <TableCell align="left">{listing.Address}</TableCell>
              {cookies['loggedin'] ? <TableCell align="left">
                <DeleteIcon style={{
                  color: 'red'
                }}
                                // add onClick method here
                                onClick={() => props.deleteListing(idx)}
                                className="icon text-red" />
                                </TableCell> : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home;