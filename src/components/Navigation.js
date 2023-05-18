import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import cookie from "cookie";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const username = useSelector(
    (reduxGlobalState) => reduxGlobalState.user.username
  );
  const navigate = useNavigate();

  const cookies = cookie.parse(document.cookie);

  const deleteCookie = () => {
    if (cookies["loggedin"]) {
      document.cookie = "loggedin=; max-age=0";
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
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
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/addnewlisting">Add</Link>
              </li>
              <li className="nav-list-item">
                {cookies["loggedin"] ? (
                  <Button
                    style={{ color: "white" }}
                    onClick={() => {
                      deleteCookie();
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button>
                    <Link to="/login">Login</Link>
                  </Button>
                )}
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
      {cookies["loggedin"] ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Typography
              variant="h7"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{
                paddingLeft: "25px",
                backgroundColor: "#D3D3D3",
                color: "#A9A9A9",
              }}
            >
              Logged in as: {username}
            </Typography>
          </AppBar>
        </Box>
      ) : null}
    </>
  );
};

export default Navigation;
