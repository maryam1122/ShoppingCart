import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Alert,
  Button,
  TextField,
  Paper,
  Container,
  Avatar,
  Typography,
  Grid,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Snackbar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { CreateUser } from "../../redux/reducers/userReducer";



const Signup = () => {




const [email ,setEmail] = useState<string> ("");
const [password, setPassword] = useState<string>("");
const [name,setName] = useState("");
const navigate =useNavigate();
const dispatch = useAppDispatch();
const [avatar, setAvatar] = useState<FileList | null>(null);
const user = useAppSelector((state) => state.userReducer);



const handleRegister = () => {
   
  const newUser = {
    name:name,
    email:email,
    password:password
  };
   
  if (avatar) {
    dispatch(CreateUser({ image: avatar, user: newUser }));
  }
  setName("");
  setEmail("");
  setPassword("");
  setAvatar(null);

};
const handleAddFile = (e:any) => {
  const files = e.target.files;
  setAvatar(files);
};



  return (
    <Container>
      {" "}
      <div className="">
        <Box my={3} textAlign={"center"}>
          <Avatar sx={{ margin: "0 auto" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        </Box>
        
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                className="form--field"
                onChange={(e) => setName(e.target.value)}
              />
              <FormHelperText className="field--error" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type= "email"
                autoComplete="email"
                className="form--field"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormHelperText className="field--error" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className="form--field"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText className="field--error" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="file"
                
                type="file"
                id="file"
                className="form--field"
                onChange={(e) => handleAddFile(e)}
              /> 
              <FormHelperText className="field--error" />
            </Grid>
        
            <Grid item xs={12} mb={2}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mb: 2 }}
            onClick={() => handleRegister()}
          >
            Sign Up
          </Button>
          <Grid>
            <Grid item>
              <Link to="/Signin">
                <Typography variant="subtitle2">
                  Already have an account? Sign in
                </Typography>
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}


export default Signup
