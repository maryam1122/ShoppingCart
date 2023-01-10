
import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import {loginUser,AuthenticateUserLogin} from "../../redux/reducers/userReducer"
import { useAppDispatch ,useAppSelector } from "../../hooks/reduxHook";

const Signin = () => {
   
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [message,setMessage] = useState<string>("");
    const dispatch = useAppDispatch();
  const navigate = useNavigate();
    const accessToken = localStorage.getItem("loggedInUser");
    if (accessToken) {
      dispatch(loginUser(accessToken));
      navigate("/");
    }

  
  


  function Signin() {
    dispatch(
      AuthenticateUserLogin({
        email:email,
        password:password
      })
    );
    setEmail("");
    setPassword("")
  }
 
  
 


  return (
    <Container component="main" maxWidth="xs">
      <div className="">
        <Box my={3} textAlign={"center"}>
          <Avatar sx={{ margin: "0 auto" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Box>
     
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => Signin()}
          >
            Sign In
          </Button>
          <Grid container my={2}>
            <Grid item xs>
              <Link to="#">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/register">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
       
      </div>
    </Container>
  );
};
export default Signin;