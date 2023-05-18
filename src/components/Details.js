import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import Map from './Map';



const Details = (props) => {
  console.log('details props', props)
  let {id} = useParams();
  const listing = props.listings.find(l => l.id == id)

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>{listing.Business_Name}</h1>
        <h3>{listing.Address}</h3>
        <h3>{listing.Hours}</h3>
        <p>{listing.Description}</p>
        <Map address={listing.Address} />
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        
      </Container>
    </React.Fragment>
  );
}

export default Details;