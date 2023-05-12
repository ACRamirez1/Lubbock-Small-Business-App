import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router';


const Login = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        username: "",
        password: "",
    })

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const login = (e) => {
        e.preventDefault();

        document.cookie = "loggedin=true; max-age=60*1000";

        navigate("/");
    }


return (
    <div className="App">
      <Container maxWidth="lg">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
            variant='standard'
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
            variant='standard'
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