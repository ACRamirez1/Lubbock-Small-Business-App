import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Map from './Map';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


const addedNewListing = () => {
  return (
    <React.Fragment>
      <CssBaseline />
    <Container maxWidth={false} disableGutters style={{
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '100%',
      // margin: '10px',
    }}>
    <Box style={{
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'left',
      justifyContent: 'left',
      alignItems: 'left',
      maxWidth: '100%'
    }}
      component="form"
      sx={{
        '& > :not(style)': { s: 1, width: '90ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Business Name" variant="standard" />
      <TextField id="standard-basic" label="Address" variant="standard" />
      <TextField id="standard-basic" label="Hours (ex. 8AM-9PM)" variant="standard" />
      <TextField id="standard-basic" label="Description" variant="standard" />
    </Box>

      <Map />
      
     </Container> 
     </React.Fragment>
  );
}


export default addedNewListing;