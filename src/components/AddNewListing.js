import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

const AddNewListing = (props) => {
  const [mapCenter, setMapCenter] = useState("Lubbock,TX");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");
  const [description, setDescription] = useState("");

  console.log(businessName);

  const handleTextChange = (e) => {
    setMapCenter(e.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        style={{
          display: "flex",
          // alignItems: 'center',
          // justifyContent: 'center',
          maxWidth: "90%",
          // margin: '10px',
          paddingTop: "100px",
        }}
      >
        <Box
          style={
            {
              // backgroundColor: 'red',
              // display: 'flex',
              // flexDirection: 'column',
              // alignContent: 'left',
              // justifyContent: 'left',
              // alignItems: 'left',
              // maxWidth: '100%'
            }
          }
          component="form"
          sx={{
            "& > :not(style)": { s: 1, width: "80ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Business Name"
            variant="standard"
            onChange={(e) => setBusinessName(e.target.value)}
            value={businessName}
          />
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            onChange={(e) => {
              setAddress(e.target.value);
              handleTextChange(e);
            }}
            value={address}
          />
          <TextField
            id="standard-basic"
            label="Hours (ex. 8AM-9PM)"
            variant="standard"
            onChange={(e) => setHours(e.target.value)}
            value={hours}
          />
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <Button
            style={{
              marginTop: "10px",
              maxWidth: "40%",
            }}
            variant="contained"
            onClick={() =>
              props.addListing({
                id: null,
                Business_Name: businessName,
                Description: description,
                Hours: hours,
                Address: address,
                Phone_Number: "",
                Website: "",
              })
            }
          >
            Save
          </Button>
        </Box>

        <iframe
          width="2000"
          height="550"
          title="addedNewListing"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCh5I0uYvNQrOBIhNw0K9ZNCZWuCGusuEQ&q=${mapCenter}`}
        ></iframe>
      </Container>
    </React.Fragment>
  );
};

export default AddNewListing;
