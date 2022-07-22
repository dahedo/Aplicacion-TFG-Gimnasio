import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./Assets/NavBarIcon.svg";

const ResponsiveAppBar = (props) => {
  const [redirect, setRedirect] = React.useState(false);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    setRedirect(true);
  };

  const goMain = () => {
    navigate("/");
  };

  const logoutButton = () => {
    window.localStorage.removeItem("loggedUser");
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }
  return (
    <AppBar position="static" className="navbar">
      <div
        style={{
          height: "70px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          src={logo}
          alt=""
          onClick={goMain}
          style={{ margin: "10px 10px 10px 5px" }}
        />

        {props.loginVisivility ? (
          <Button
            sx={{
              color: "white",
              borderColor: "white",
            }}
            variant="outlined"
            style={{ margin: "15px 20px 15px 10px" }}
            onClick={redirectToLogin}
          >
            Login
          </Button>
        ) : null}
        {props.logoutVisivility ? (
          <Button
            sx={{
              color: "white",
              borderColor: "white",
            }}
            variant="outlined"
            style={{ margin: "15px 20px 15px 10px" }}
            onClick={logoutButton}
          >
            Logout
          </Button>
        ) : null}
      </div>
    </AppBar>
  );
};
export default ResponsiveAppBar;
