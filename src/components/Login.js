import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions";

const Login = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const loginUser = (e) => {
    e.preventDefault();

    if (!state.username || !state.password) {
      setError("Please enter your username and password");
      return;
    }
    dispatch(login(state.username, state.password));

    console.log("State: ", state);

    document.cookie = "loggedin=true;";
    document.cookie = `username=${state.username};`;
    document.cookie = "max-age=60*1000;";
    console.log("cookies", document.cookie);

    navigate("/");

    // fetch('http://localhost:8080/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify( {
    //   username: state.username,
    //   password: state.password
    //   // passwordHash: state.password
    // })
    // }).then((response) => {
    //   console.log('response', response)
    //   return response.json()
    // }).then((data) => {
    // props.login(state.username)
    // navigate('/')
    // console.log('Data', data)
    // document.cookie = "loggedin=true; max-age=60*1000";
    // document.cookie = `token=${data}; max-age=60*1000`;
    // })
  };

  return (
    <div className="App">
      <Container maxWidth="lg">
        <form className="login-form" onSubmit={loginUser}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
            variant="standard"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
            variant="standard"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
