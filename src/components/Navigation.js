import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import cookie from "cookie";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  const navigate = useNavigate;
  const cookies = cookie.parse(document.cookie);

  const deleteCookie = () => {
    if (cookies["loggedin"]) {
      return (document.cookie = "loggedin=; max-age=0"), navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#3CB371",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lubbock Small Business
          </Typography>
          <nav>
            <NavLink to="/">Listings</NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
