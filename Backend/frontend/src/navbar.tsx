import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';


const ResponsiveAppBar = (props: {loginVisivility: Boolean}) => {
  const [redirect, setRedirect] = React.useState(false);

  const redirectToLogin = (event: React.MouseEvent<HTMLElement>) => {
     setRedirect(true)
  };


  if (redirect) {
    return <Navigate to="/login" />;
}
  return (
    <AppBar position="static" className="navbar">

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          LOGO
        </Typography>
 {props.loginVisivility ? 
        <Button variant="outlined" style={{backgroundColor:'red'}} onClick={redirectToLogin} >Login</Button>
:
null}
      </div>
    </AppBar>
  );
};
export default ResponsiveAppBar;
