import React from 'react'
import { UserRole } from '../../types/user'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {toast} from "react-hot-toast";
import { CreateUser } from '../../redux/reducers/userReducer';
import { useAppDispatch } from '../../hooks/reduxHook';



import {
    Box,
    Button,
    Checkbox,
    Avatar,
    Container,
    CssBaseline,
    FormControlLabel,
    FormHelperText,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Register = () => {
 




  return (
    <Container maxWidth="xs">
    <Box >
      <Avatar>
      <LockOutlinedIcon/>
      </Avatar>
      <Typography component="h1" variant="h5">
            Sign up
      </Typography>
    </Box>
    </Container>
  )
}

export default Register