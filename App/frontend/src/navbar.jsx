import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";

const ResponsiveAppBar = (props) => {
  const [redirect, setRedirect] = React.useState(false);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    setRedirect(true);
  };

  const goMain = () => {
    console.log("main");
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
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          onClick={goMain}
        >
          LOGO
        </Typography>

        {props.loginVisivility ? (
          <Button
            variant="outlined"
            style={{ backgroundColor: "green" }}
            onClick={redirectToLogin}
          >
            Login
          </Button>
        ) : null}
        {props.logoutVisivility ? (
          <Button
            variant="outlined"
            style={{ backgroundColor: "red" }}
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
